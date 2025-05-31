import React, { useState } from "react";
import "./mainPage.css";
import Header from "../components/header/Header";
import NewsList from "../components/newList/NewsList";
import Footer from "../components/footer/Footer";

const MainPage = () => {
  const [expandedNews, setExpandedNews] = useState(null);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

  const collapseAllNews = () => {
    setExpandedNews(null);
  };

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
    setIsSignUpModalOpen(false);
    setIsSummaryModalOpen(false);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setIsSignInModalOpen(false);
    setIsSummaryModalOpen(false);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const openSummaryModal = () => {
    setIsSummaryModalOpen(true);
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(false);
  };

  const closeSummaryModal = () => {
    setIsSummaryModalOpen(false);
  };

  return (
    <main className="main-page">
      <Header
        collapseAllNews={collapseAllNews}
        openSignInModal={openSignInModal}
        isSignInModalOpen={isSignInModalOpen}
        closeSignInModal={closeSignInModal}
        isSignUpModalOpen={isSignUpModalOpen}
        openSignUpModal={openSignUpModal}
        closeSignUpModal={closeSignUpModal}
        isSummaryModalOpen={isSummaryModalOpen}
        openSummaryModal={openSummaryModal}
        closeSummaryModal={closeSummaryModal}
      />
      <NewsList expandedNews={expandedNews} setExpandedNews={setExpandedNews} />
      <Footer />
    </main>
  );
};

export default MainPage;
