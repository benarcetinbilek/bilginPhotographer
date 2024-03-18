import { useState, createContext, useEffect } from "react";

export const PortfolioContext = createContext();

export const PortfolioContextProvider = (props) => {
  const [openingAnimation, setOpeningAnimation] = useState(true);
  const [isCollectionClick, setIsCollectionClick] = useState("collections");
  const [collectionWrapper, setcollectionWrapper] =
    useState("collectionsWrapper");
  const [homeClassName, setHomeClassName] = useState("homePageWrapper");
  const [homeWrapperClassName, setHomeWrapperClassName] = useState(
    "homePageLeftWrapper"
  );
  const [firstLineClassName, setFirstLineClassName] =
    useState("firstLineInner");
  const [secondLineClassName, setsecondLineClassName] =
    useState("secondLineInner");
  const [thirdLineClassName, setthirdLineClassName] =
    useState("thirdLineInner");
  const [isSideBar, setIsSideBar] = useState(false);
  const [sideBarClassName, setsideBarClassName] = useState("sideBar");
  // const [sideBarClassName, setsideBarClassName] = useState("sideBarFixed");
  const [collectionsImgClassName, setCollectionsImgClassName] =
    useState("collectionsImage");
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isTransition, setIsTransition] = useState(false);
  const [transitionPageText, setTransitionPageText] = useState("");
  const [navbarClassName, setNavbarClassName] = useState("homePageNavbar");
  const [isSinglePicture, setIsSinglePicture] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    if (window.innerWidth > 750) {
      setTimeout(() => {
        setHomeClassName("homePageWrapper reduced");
        setFirstLineClassName("firstLineInner firstLineInnerAnimated");
        setsecondLineClassName("secondLineInner secondLineInnerAnimated");
        setthirdLineClassName("thirdLineInner thirdLineInnerAnimated");
      }, 1000);
      setTimeout(() => {
        setNavbarClassName("homePageNavbarFixed");
      }, 3000);
    }
    setTimeout(() => {
      setOpeningAnimation(false);
    }, 1000);
  }, []);

  const collectionHandler = () => {
    if (window.innerWidth > 750) {
      setHomeClassName("homePageWrapper reduced hidden");
      setHomeWrapperClassName("homePageLeftWrapper wrapperHidden");
      setIsCollectionClick("collections collectionsClicked");
      setcollectionWrapper("collectionsWrapper wrapperClicked");
      setFirstLineClassName("firstLineInner");
      setthirdLineClassName("thirdLineInner");
      setCollectionsImgClassName("collectionsImage cIClicked");
      setTimeout(() => {
        setIsHomeOpen(false);
      }, 3000);
      setTimeout(() => {
        setIsSideBar(true);
      }, 3000);
      setTimeout(() => {
        setsideBarClassName("sideBar sideBarOpen");
      }, 2000);
    }
    // if (window.innerHeight > 750) {
    // }
  };

  const backHandler = () => {
    setHomeClassName("homePageWrapper reduced");
    setHomeWrapperClassName("homePageLeftWrapper");
    setIsCollectionClick("collections");
    setcollectionWrapper("collectionsWrapper");
    setsideBarClassName("sideBar");
    setCollectionsImgClassName("collectionsImage");
    setFirstLineClassName("firstLineInner firstLineInnerAnimated");
    setsecondLineClassName("secondLineInner secondLineInnerAnimated");
    setthirdLineClassName("thirdLineInner thirdLineInnerAnimated");
    // setIsHomeOpen(true);
    setTimeout(() => {
      setIsSideBar(false);
    }, 510);
  };

  const aboutMeHandler = () => {
    if (window.innerWidth > 750) {
      setTransitionPageText("ABOUT ME");
      setsideBarClassName("sideBarFixed");
      setIsSideBar(true);
      setIsTransition(true);
      setTimeout(() => {
        setIsTransition(false);
      }, 2500);
      console.log("hi");
    }
  };

  const aboutMeContactMeBAckHandler = () => {
    if (window.innerWidth > 750) {
      transitionOn();
      setIsSideBar(false);
      // setNavbarClassName("navbarLinksFixed");
      setTransitionPageText("HOME");
    }
  };

  const contactMeHandler = () => {
    if (window.innerWidth > 750) {
      setTransitionPageText("CONTACT ME");
      transitionOn();
      setsideBarClassName("sideBarFixed");
      setIsSideBar(true);
    }
    console.log("hicontext");
  };

  const transitionOn = () => {
    setIsTransition(true);
    setTimeout(() => {
      setIsTransition(false);
    }, 3000);
  };

  return (
    <PortfolioContext.Provider
      value={{
        openingAnimation,
        setOpeningAnimation,
        isCollectionClick,
        setIsCollectionClick,
        collectionWrapper,
        setcollectionWrapper,
        homeClassName,
        setHomeClassName,
        homeWrapperClassName,
        setHomeWrapperClassName,
        firstLineClassName,
        setFirstLineClassName,
        secondLineClassName,
        setsecondLineClassName,
        thirdLineClassName,
        setthirdLineClassName,
        isSideBar,
        setIsSideBar,
        sideBarClassName,
        setsideBarClassName,
        collectionHandler,
        backHandler,
        collectionsImgClassName,
        setCollectionsImgClassName,
        isHomeOpen,
        setIsHomeOpen,
        isTransition,
        setIsTransition,
        transitionOn,
        transitionPageText,
        setTransitionPageText,
        aboutMeHandler,
        contactMeHandler,
        aboutMeContactMeBAckHandler,
        navbarClassName,
        isSinglePicture,
        setIsSinglePicture,
        id,
        setId,
      }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
};

//look sidebar for collections animation
