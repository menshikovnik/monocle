from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from typing import List, Dict
from .models import RssItem
from .config import TITLE_SIM_THRESHOLD

_model: SentenceTransformer | None = None

def _get_model() -> SentenceTransformer:
    global _model
    if _model is None:
        _model = SentenceTransformer("sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2")
    return _model

def cluster_titles(items: List[RssItem]) -> Dict[int, List[RssItem]]:
    """Возвращает dict cluster_id -> List[RssItem]"""
    titles = [it.title for it in items]
    model = _get_model()
    emb = model.encode(titles, show_progress_bar=False)
    sim = cosine_similarity(emb)
    clusters: Dict[int, List[RssItem]] = {}
    cluster_id = 0
    assigned = set()

    for i, item in enumerate(items):
        if i in assigned:
            continue
        # новый кластер
        clusters[cluster_id] = [item]
        assigned.add(i)
        # ищем похожие
        for j in range(i + 1, len(items)):
            if j in assigned:
                continue
            if sim[i][j] >= TITLE_SIM_THRESHOLD:
                clusters[cluster_id].append(items[j])
                assigned.add(j)
        cluster_id += 1
    return clusters
