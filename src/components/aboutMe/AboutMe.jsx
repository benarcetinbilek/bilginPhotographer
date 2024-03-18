import { useContext } from "react";
import SideBar from "../sideBar/SideBar";
import "./aboutMe.css";
import { PortfolioContext } from "../../context/PortfolioContext";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const { aboutMeContactMeBAckHandler } = useContext(PortfolioContext);

  const navigate = useNavigate();

  const aboutMeBackHandler = () => {
    aboutMeContactMeBAckHandler();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="aboutmeContainer">
      <SideBar backButtonHandler={aboutMeBackHandler} />
      <div className="aboutMeContent">
        <div className="aboutMePiccontainer">
          <img
            src="aboutMePicTwo.jpg"
            alt="aboutMePic"
            className="aboutMePic"
          />
        </div>
        <div className="aboutMeTextContainer">
          <div className="aboutMeTitle">
            <h1>About Me</h1>
          </div>
          <div className="aboutMeText">
            <p>hi this is Bilgin CETINBILEK</p>
            <p>I am a photographer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
