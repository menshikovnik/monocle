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
  title: "На Марсе обнаружены следы древнего озера",
  date: "2025-05-29 09:15",
  content:
    "Новое исследование NASA подтверждает, что на Марсе когда-то существовало пресноводное озеро — это может стать ключом к поиску внеземной жизни.",
  categories: ["Космос", "Наука"],
  sources: ["NASA", "Space.com", "Наука и жизнь"],
},
{
  id: 4,
  title: "Глобальный турнир по киберспорту собрал рекордную аудиторию",
  date: "2025-05-28 22:00",
  content:
    "Финал чемпионата по Dota 2 посмотрели более 100 миллионов зрителей по всему миру — киберспорт продолжает набирать популярность.",
  categories: ["Киберспорт", "Развлечения", "Технологии"],
  sources: ["ESPN", "CyberNews", "Игромания"],
},
{
  id: 5,
  title: "Европа переходит на экологичный транспорт",
  date: "2025-05-27 14:45",
  content:
    "Города Европы массово отказываются от дизельных авто и инвестируют в развитие электрического общественного транспорта.",
  categories: ["Экология", "Транспорт", "Европа"],
  sources: ["Euronews", "The Guardian", "РБК"],
},
{
  id: 6,
  title: "Новая волна искусственного мяса на полках супермаркетов",
  date: "2025-05-26 17:10",
  content:
    "Инновационные стартапы представили растительные и клеточные аналоги мяса с улучшенным вкусом и питательными свойствами.",
  categories: ["Питание", "Инновации", "Бизнес"],
  sources: ["The Verge", "Forbes", "VC.ru"],
},
{
  id: 7,
  title: "Учёные научились расшифровывать сны",
  date: "2025-05-25 08:00",
  content:
    "С помощью нейросетей исследователи смогли визуализировать образы, которые видит человек во сне, открывая новое направление в психологии и нейронауке.",
  categories: ["Наука", "Технологии", "Психология"],
  sources: ["Nature", "N+1", "BBC"],
},
{
  id: 8,
  title: "Популярность ретро-музыки растёт среди молодёжи",
  date: "2025-05-24 20:20",
  content:
    "Аналитика музыкальных сервисов показывает резкий рост интереса к хитам 70-х и 80-х годов у поколения Z.",
  categories: ["Музыка", "Культура"],
  sources: ["Spotify", "Rolling Stone", "Медуза"],
},
{
  id: 9,
  title: "Беспилотные такси начали работать в Токио",
  date: "2025-05-23 11:30",
  content:
    "Японская столица стала одним из первых мегаполисов с полностью автономными такси на дорогах общего пользования.",
  categories: ["Авто", "Технологии", "Азия"],
  sources: ["NHK", "Reuters", "TechCrunch"],
},
{
  id: 10,
  title: "Школьники России выиграли международную олимпиаду по математике",
  date: "2025-05-22 16:00",
  content:
    "Российская команда заняла первое место на международной математической олимпиаде, обойдя Китай и США.",
  categories: ["Образование", "Наука", "Россия"],
  sources: ["ТАСС", "Коммерсантъ", "Science Daily"],
}

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
