import React, { useState } from "react";
import "./NewsItem.css";

const NewsItem = ({
  id,
  title,
  date,
  content,
  categories,
  sources,
  isExpanded,
  setExpandedNews,
}) => {
  const handleExpand = () => {
    if (!isExpanded) {
      setExpandedNews(id);
    }
  };

  const handleCollapse = () => {
    if (isExpanded) {
      setExpandedNews(null);
    }
  };

  return (
    <div
      className="news-item"
      onClick={handleExpand}
      style={{ cursor: isExpanded ? "default" : "pointer" }}
    >
      <div
        className={isExpanded ? "news-title-expanded" : "news-title"}
        onClick={isExpanded ? handleCollapse : undefined}
      >
        {title}
      </div>

      {isExpanded ? (
        <>
          <div className="news-date-expanded">{date}</div>
          <div className="news-content">{content}</div>

          <div className="news-label">Category:</div>
          <div className="news-tags">
            {categories.map((cat, index) => (
              <div className="news-tag" key={index}>
                {cat}
              </div>
            ))}
          </div>

          <div className="news-label">Source:</div>
          <div className="news-tags">
            {sources.map((src, index) => (
              <div className="news-tag" key={index}>
                {src}
              </div>
            ))}
          </div>

          <div className="news-actions">
            <button className="btn-share">Share</button>
            <button className="btn-default">Suggest</button>
            <button className="btn-default">Complain</button>
          </div>
        </>
      ) : (
        <div className="news-date">{date}</div>
      )}
    </div>
  );
};

export default NewsItem;
