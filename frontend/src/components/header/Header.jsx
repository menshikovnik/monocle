import React, { useState } from "react";
import "./header.css";
import eyeIcon from "./../../assets/passiveEye.svg";
import eyeHoverIcon from "../../assets/howerEye.svg";
import SignInModal from "../signInModal/SignInModal";
import SignUpModal from "../signUpModal/SignUpModal";
import SummaryModal from "../summaryModal/SummaryModal";

const Header = ({
  collapseAllNews,
  openSignInModal,
  isSignInModalOpen,
  closeSignInModal,
  isSignUpModalOpen,
  openSignUpModal,
  closeSignUpModal,
  isSummaryModalOpen,
  openSummaryModal,
  closeSummaryModal,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header className="header">
        <div
          className="header-text left"
          onClick={openSummaryModal}
          style={{ cursor: "pointer" }}
        >
          summary
        </div>

        <img
          src={isHovered ? eyeHoverIcon : eyeIcon}
          alt="Eye Icon"
          className="eye-icon"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={collapseAllNews}
          style={{ cursor: "pointer" }}
        />

        <div
          className="header-text right"
          onClick={openSignInModal}
          style={{ cursor: "pointer" }}
        >
          sign in
        </div>
      </header>
      {isSignInModalOpen && (
        <SignInModal
          closeSignInModal={closeSignInModal}
          openSignUpModal={openSignUpModal}
        />
      )}
      {isSignUpModalOpen && <SignUpModal closeSignUpModal={closeSignUpModal} />}
      {isSummaryModalOpen && (
        <SummaryModal closeSummaryModal={closeSummaryModal} />
      )}
    </>
  );
};

export default Header;
