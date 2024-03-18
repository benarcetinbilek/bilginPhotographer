import { useContext } from "react";
import "./transition.css";
import { PortfolioContext } from "../../context/PortfolioContext";
import { useEffect } from "react";

const Transition = () => {
  const { transitionPageText, setIsTransition } = useContext(PortfolioContext);

  useEffect(() => {
    setTimeout(() => {
      setIsTransition(false);
    }, 2500);
  }, []);

  return (
    <div className="transitionContainer">
      <div className="transitionLF">
        <div className="transitionFC">
          <p className="firstLineText">CETINBILEK</p>
          <p className="firstLineText">CETINBILEK</p>
          <p className="firstLineText">CETINBILEK</p>
          <p className="firstLineText">CETINBILEK</p>
          <p className="firstLineText">CETINBILEK</p>
          <p className="firstLineText">CETINBILEK</p>
        </div>
      </div>
      <div className="transitionLS">
        <div className="transitionSC">
          <p className="secondLineText">{transitionPageText}</p>
          <p className="secondLineText">{transitionPageText}</p>
          <p className="secondLineText">{transitionPageText}</p>
          <p className="secondLineText">{transitionPageText}</p>
          <p className="secondLineText">{transitionPageText}</p>
          <p className="secondLineText">{transitionPageText}</p>
        </div>
      </div>
      <div className="transitionLT">
        <div className="transitionTC">
          <p className="thirdLineText">CETINBILEK</p>
          <p className="thirdLineText">CETINBILEK</p>
          <p className="thirdLineText">CETINBILEK</p>
          <p className="thirdLineText">CETINBILEK</p>
          <p className="thirdLineText">CETINBILEK</p>
          <p className="thirdLineText">CETINBILEK</p>
        </div>
      </div>
    </div>
  );
};

export default Transition;
