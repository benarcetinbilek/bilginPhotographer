import { useContext } from "react";
import "./homePage.css";
import { PortfolioContext } from "../../context/PortfolioContext";
import OpeningAnimation from "../openingAnimation/OpeningAnimation";
import SideBar from "../sideBar/SideBar";
import Collections from "../collections/Collections";
// import Transition from "../transition/Transition";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const {
    openingAnimation,
    collectionHandler,
    isSideBar,
    homeClassName,
    homeWrapperClassName,
    isCollectionClick,
    isHomeOpen,
    isTransition,
    transitionOn,
    aboutMeHandler,
    contactMeHandler,
    navbarClassName,
  } = useContext(PortfolioContext);

  const navigate = useNavigate();

  const aboutMeClickHandler = () => {
    if (window.innerWidth > 750) {
      aboutMeHandler();
      setTimeout(() => {
        navigate("/aboutMe");
      }, 1000);
    }
    if (window.innerWidth < 750) {
      navigate("/aboutMe");
    }
  };

  const contactMeClickHandler = () => {
    if (window.innerWidth > 750) {
      contactMeHandler();
      setTimeout(() => {
        navigate("/contactMe");
      }, 1000);
    }
    if (window.innerWidth < 750) {
      navigate("/contactMe");
    }
  };

  const collectionsHandler = (e) => {
    if (window.innerWidth > 750) {
      collectionHandler();
    }
    if (window.innerWidth < 750) {
      navigate("/collectionsM");
    }
  };

  return (
    <div className="homePageContainer">
      {openingAnimation && <OpeningAnimation />}
      {/* {isHomeOpen && ( */}
      <div className={homeClassName}>
        <div className={homeWrapperClassName}>
          <div className={navbarClassName}>
            <div className="navbarLogo">asd</div>
            <div className="navbarLinks">
              <p onClick={collectionsHandler}>Collections</p>
              <p onClick={aboutMeClickHandler}>about Me</p>
              <p onClick={contactMeClickHandler}>Contact me</p>
            </div>
          </div>
          <div className="brandText">Cetinbilek</div>
          <div className="homePageFooter">
            <p className="homePageDesigner">
              Designed by <span>Bn'r</span>
            </p>
            <div className="homePageFooterMiddle">
              <p>High quality pictures</p>
              <p>From 2010</p>
            </div>
            <div className="footerLinks">
              <a>twitter</a>
              <a
                href="https://www.instagram.com/bilgincetinbilek/"
                className="footerInsta"
              >
                instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      {isCollectionClick && <Collections />}
    </div>
  );
};

export default HomePage;
