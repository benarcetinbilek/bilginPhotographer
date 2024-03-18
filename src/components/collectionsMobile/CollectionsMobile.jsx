import "./collectionsMobile.css";
import imagesThumbnailData from "../../imagesData/ImagesThumbnailData";

const CollectionsMobile = () => {
  //   console.log(imagesThumbnailData);
  return (
    <div className="collectionsMContainer">
      <div className="collectionsMWrapper">
        {imagesThumbnailData.map((pic, i) => (
          <img key={i} src={pic.src} alt="mobilepicSingle" />
        ))}
      </div>
    </div>
  );
};

export default CollectionsMobile;
