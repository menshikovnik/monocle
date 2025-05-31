import React from "react";
import "./SummaryModal.css";
import closeIcon from "../../assets/cancel.svg";

const dummyNews = [
  {
    id: 1,
    title: "ИИ меняет рынок труда",
    date: "2025-05-31 12:00",
  },
  {
    id: 2,
    title: "Мировые рынки в нестабильности",
    date: "2025-05-30 18:30",
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
