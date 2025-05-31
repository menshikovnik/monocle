import React from "react";
import NewsItem from "../../components/newsItem/NewsItem";
import "./newsList.css";

const dummyNews = [
  {
    id: 1,
    title: "ИИ меняет рынок труда",
    date: "2025-05-31 12:00",
    content:
      "Искусственный интеллект проникает в сферы бизнеса и повседневной жизни, заставляя компании адаптироваться к новым условиям.",
    categories: ["Технологии", "Экономика", "Будущее"],
    sources: ["РИА Новости", "Meduza", "MIT Tech Review"],
  },
  {
    id: 2,
    title: "Мировые рынки в нестабильности",
    date: "2025-05-30 18:30",
    content:
      "Инвесторы обеспокоены замедлением глобального роста, а центральные банки держат ставку без изменений.",
    categories: ["Финансы", "Аналитика"],
    sources: ["Bloomberg", "Ведомости"],
  },
  {
    id: 3,
    title: "ИИ меняет рынок труда",
    date: "2025-05-31 12:00",
    content:
      "Искусственный интеллект проникает в сферы бизнеса и повседневной жизни, заставляя компании адаптироваться к новым условиям.",
    categories: ["Технологии", "Экономика", "Будущее"],
    sources: ["РИА Новости", "Meduza", "MIT Tech Review"],
  },
  {
    id: 4,
    title: "Мировые рынки в нестабильности",
    date: "2025-05-30 18:30",
    content:
      "Инвесторы обеспокоены замедлением глобального роста, а центральные банки держат ставку без изменений.",
    categories: ["Финансы", "Аналитика"],
    sources: ["Bloomberg", "Ведомости"],
  },
  {
    id: 5,
    title: "ИИ меняет рынок труда",
    date: "2025-05-31 12:00",
    content:
      "Искусственный интеллект проникает в сферы бизнеса и повседневной жизни, заставляя компании адаптироваться к новым условиям.",
    categories: ["Технологии", "Экономика", "Будущее"],
    sources: ["РИА Новости", "Meduza", "MIT Tech Review"],
  },
  {
    id: 6,
    title: "Мировые рынки в нестабильности",
    date: "2025-05-30 18:30",
    content:
      "Инвесторы обеспокоены замедлением глобального роста, а центральные банки держат ставку без изменений.",
    categories: ["Финансы", "Аналитика"],
    sources: ["Bloomberg", "Ведомости"],
  },
];
const NewsList = ({ expandedNews, setExpandedNews }) => {
  return (
    <section className="news-list">
      {dummyNews.map((news) => (
        <NewsItem
          key={news.id}
          {...news}
          isExpanded={expandedNews === news.id}
          setExpandedNews={setExpandedNews}
        />
      ))}
    </section>
  );
};

export default NewsList;
