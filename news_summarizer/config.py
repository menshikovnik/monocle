import os
from dotenv import load_dotenv


RSS_SOURCES = [
    "https://www.kommersant.ru/RSS/main.xml",
    "https://lenta.ru/rss/",
    "https://www.rbc.ru/v10/ajax/get-news-feed/?limit=40&offset=0"  # пример
]

LLM_API_URL = os.getenv("LLM_API_URL", "https://api.your-llm.com/v1/summarize")
LLM_BEARER_TOKEN = os.getenv("LLM_BEARER_TOKEN", "PASTE_TOKEN_HERE")

TITLE_SIM_THRESHOLD = float(os.getenv("TITLE_SIM_THRESHOLD", 0.8))
