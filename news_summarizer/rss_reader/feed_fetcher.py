import feedparser, httpx, asyncio
from typing import List
from trafilatura import fetch_url, extract
from .models import RssItem
from .config import RSS_SOURCES

async def fetch_feed(session: httpx.AsyncClient, url: str) -> List[RssItem]:
    r = await session.get(url, timeout=10)
    feed = feedparser.parse(r.text)
    items = []
    for entry in feed.entries:
        items.append(
            RssItem(
                title=getattr(entry, "title", ""),
                link=getattr(entry, "link", ""),
                published=getattr(entry, "published", None),
            )
        )
    return items

async def fetch_all_feeds() -> List[RssItem]:
    async with httpx.AsyncClient() as session:
        tasks = [fetch_feed(session, url) for url in RSS_SOURCES]
        results = await asyncio.gather(*tasks, return_exceptions=False)
    # плоский список
    all_items = [item for sub in results for item in sub]
    return all_items

def download_article(url: str) -> str | None:
    """Скачиваем HTML и чистим до plain-текста."""
    html = fetch_url(url)
    if not html:
        return None
    return extract(html, include_comments=False, output_format="txt")
