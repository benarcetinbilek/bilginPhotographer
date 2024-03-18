import "./openingAnimation.css";
import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const OpeningAnimation = () => {
  return (
    <div className="openingAnimationContainer">
      <div className="openingAnimationUpper"></div>
      <div className="openingAnimationLower"></div>
    </div>
  );
};

export default OpeningAnimation;
