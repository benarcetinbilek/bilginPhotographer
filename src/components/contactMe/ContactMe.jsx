import "./contactMe.css";
import SideBar from "../sideBar/SideBar";
import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  const { aboutMeContactMeBAckHandler } = useContext(PortfolioContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const navigate = useNavigate();

  const contactMeBackHandler = () => {
    aboutMeContactMeBAckHandler();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const formHandler = () => {
    // TODO - email sender
  };

  return (
    <div className="contactmeContainer">
      <SideBar backButtonHandler={contactMeBackHandler} />
      <div className="contactmeContent">
        <div className="contactmeForm">
          <h1>Contact Me</h1>
          <h2> not gonna bite ya</h2>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="email"
            placeholder="contact info"
            onChange={(e) => setContactInfo(e.target.value)}
          />
          <button onClick={formHandler}>send</button>
        </div>
        <div className="contactmePicContainer">
          <img src="smallPic.jpg" alt="contactmePic" className="contactmePic" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
