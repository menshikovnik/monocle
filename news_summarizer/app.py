from fastapi import FastAPI, HTTPException
import asyncio
from rss_reader.feed_fetcher import fetch_all_feeds, download_article
from rss_reader.similarity import cluster_titles
from rss_reader.summarizer import summarize
from rss_reader.models import ClusteredArticle

app = FastAPI(title="News Summarizer API")

@app.get("/refresh", response_model=list[ClusteredArticle])
async def refresh_news():
    items = await fetch_all_feeds()
    if not items:
        raise HTTPException(502, "Не удалось получить RSS")

    clusters = cluster_titles(items)

    results: list[ClusteredArticle] = []
    for cid, rss_items in clusters.items():
        texts = [download_article(it.link) or "" for it in rss_items]
        texts = [t for t in texts if t.strip()]
        if not texts:
            continue
        headline = rss_items[0].title
        summary = await summarize(texts, headline)
        results.append(
            ClusteredArticle(
                cluster_id=cid,
                title=headline,
                links=[it.link for it in rss_items],
                summary=summary,
            )
        )

    return results
