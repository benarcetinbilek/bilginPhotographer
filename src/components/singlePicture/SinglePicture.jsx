import { useContext, useEffect, useState } from "react";
import "./singlePicture.css";
import { PortfolioContext } from "../../context/PortfolioContext";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import imagesThumbnailData from "../../imagesData/ImagesThumbnailData";

const SinglePicture = () => {
  const { setIsSinglePicture, id, setId } = useContext(PortfolioContext);

  const [singlePicClassName, setSinglePicClassName] =
    useState("singlePicContainer");

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        singlePicCloseHandler();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const singlePicCloseHandler = () => {
    setSinglePicClassName("singlePicContainer singlePicContainerClose");
    setTimeout(() => {
      setIsSinglePicture(false);
      setSinglePicClassName("singlePicContainer");
    }, 500);
  };

  const singlePicLeftArrowHandler = () => {
    if (id <= 0) {
      console.log("this is first pic");
    } else {
      const newId = id - 1;
      setId(newId);
    }
  };

  const singlePicRightArrowHandler = () => {
    const newId = id + 1;
    setId(newId);
  };

  return (
    <div className={singlePicClassName}>
      <div className="picContainer">
        <img
          className="singlepic"
          src={imagesThumbnailData[id - 1].src}
          alt="singlePic"
        />
      </div>
      <IoIosArrowBack
        className="SinglePicLeftArrow"
        namee="left"
        onClick={singlePicLeftArrowHandler}
      />
      <IoIosArrowForward
        className="SinglePicRightArrow"
        namee="right"
        onClick={singlePicRightArrowHandler}
      />
      <IoClose className="SinglePicClose" onClick={singlePicCloseHandler} />
      {/* <div className="singlePicDesc">
        <h1>Gunesin batisi</h1>
        <p>
          Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum
        </p>
        <div className="singlePicSpecs">
          <p>specs</p>
          <p>Cannon EOS 3200</p>
          <p>shutter: 2000</p>
          <p>eos: 123</p>
          <p>lens: ABC</p>
          <p>asd</p>
          <p>asd</p>
        </div>
      </div> */}
    </div>
  );
};

export default SinglePicture;
