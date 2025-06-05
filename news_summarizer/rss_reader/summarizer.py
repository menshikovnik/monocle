import httpx, asyncio
from typing import List
from .config import LLM_API_URL, LLM_BEARER_TOKEN

HEADERS = {"Authorization": f"Bearer {LLM_BEARER_TOKEN}"}

async def summarize(texts: List[str], headline: str) -> str:
    payload = {
        "headline": headline,
        "articles": texts,
        "lang": "ru",
        "size": "short"
    }
    async with httpx.AsyncClient() as session:
        r = await session.post(LLM_API_URL, json=payload, headers=HEADERS, timeout=30)
        r.raise_for_status()
        data = r.json()
        return data.get("summary", "Нет summary")
