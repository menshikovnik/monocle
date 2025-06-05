from typing import List
from pydantic import BaseModel

class RssItem(BaseModel):
    title: str
    link: str
    published: str | None = None

class ClusteredArticle(BaseModel):
    cluster_id: int
    title: str               # «представительный» заголовок
    links: List[str]         # все URL в кластере
    summary: str | None = None
