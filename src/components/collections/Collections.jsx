import { useContext } from "react";
import "./collections.css";
import { PortfolioContext } from "../../context/PortfolioContext";
import SideBar from "../sideBar/SideBar";
import SinglePicture from "../singlePicture/SinglePicture";
import imagesThumbnailData from "../../imagesData/ImagesThumbnailData";

const Collections = () => {
  const {
    isCollectionClick,
    collectionWrapper,
    firstLineClassName,
    secondLineClassName,
    thirdLineClassName,
    collectionsImgClassName,
    isSideBar,
    backHandler,
    isSinglePicture,
    setIsSinglePicture,
    setId,
  } = useContext(PortfolioContext);

  const firstLineImgs = imagesThumbnailData.filter(
    (_, index) => index >= 0 && index < 10
  );
  const secondLineImgs = imagesThumbnailData.filter(
    (_, index) => index >= 10 && index < 20
  );
  const thirdLineImgs = imagesThumbnailData.filter(
    (_, index) => index >= 20 && index < 30
  );

  const singlePicHandler = (id) => {
    if (isCollectionClick === "collections collectionsClicked") {
      setId(id);
      setIsSinglePicture(true);
    }
  };

  return (
    <div className={isCollectionClick}>
      {isSideBar && <SideBar backButtonHandler={backHandler} />}
      {isSinglePicture && <SinglePicture />}
      <div className={collectionWrapper}>
        <div className="firstLine">
          <div className={firstLineClassName}>
            {firstLineImgs.map((i, index) => (
              <img
                key={index}
                src={i.src}
                alt="firstLineThumbnail"
                className={collectionsImgClassName}
                // {...(isCollectionClick && onclick(asd()))}
                onClick={() => singlePicHandler(i.id)}
              />
            ))}
          </div>
        </div>
        <div className="secondLine">
          <div className={secondLineClassName}>
            {secondLineImgs.map((i, index) => (
              <img
                key={index}
                src={i.src}
                alt="firstLineThumbnail"
                className={collectionsImgClassName}
                onClick={() => singlePicHandler(i.id)}
              />
            ))}
          </div>
        </div>
        <div className="thirdLine">
          <div className={thirdLineClassName}>
            {thirdLineImgs.map((i, index) => (
              <img
                key={index}
                src={i.src}
                alt="firstLineThumbnail"
                className={collectionsImgClassName}
                onClick={() => singlePicHandler(i.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
