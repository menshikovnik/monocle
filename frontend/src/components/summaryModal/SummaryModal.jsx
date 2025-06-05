import React from "react";
import "./SummaryModal.css";
import closeIcon from "../../assets/cancel.svg";

const dummyNews = [
 {
  id: 3,
  title: "На Марсе обнаружены следы древнего озера",
  date: "2025-05-29 09:15",
},

{
  id: 5,
  title: "Европа переходит на экологичный транспорт",
  date: "2025-05-27 14:45",
},
{
  id: 6,
  title: "Новая волна искусственного мяса на полках супермаркетов",
  date: "2025-05-26 17:10",
},
{
  id: 7,
  title: "Учёные научились расшифровывать сны",
  date: "2025-05-25 08:00",
},

];

const SummaryModal = ({ closeSummaryModal }) => {
  const startDate = "2025-05-30";
  const endDate = "2025-05-31";

  return (
    <div className="summary-modal-overlay">
      <div className="summary-modal-content">
        <img
          src={closeIcon}
          alt="Close Icon"
          className="summary-modal-close-icon"
          onClick={closeSummaryModal}
        />
        <h2 className="summary-modal-title">Weekly summary</h2>
        <div className="summary-modal-dates">{`${startDate} - ${endDate}`}</div>
        <div className="summary-modal-titles">
          {dummyNews.map((news) => (
            <div key={news.id} className="summary-modal-title-item">
              {news.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
