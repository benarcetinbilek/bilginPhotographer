import "./sideBar.css";
import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const SideBar = ({ backButtonHandler }) => {
  const { sideBarClassName, backHandler, aboutMeContactMeBAckHandler } =
    useContext(PortfolioContext);

  return (
    <div className={sideBarClassName} onClick={backButtonHandler}>
      <div className="sideBarWrapper">
        <div className="backArrow">a</div>
        <div className="smallText">Hello</div>
      </div>
    </div>
  );
};

export default SideBar;
