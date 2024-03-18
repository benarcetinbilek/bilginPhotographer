import { useContext } from "react";
import "./App.css";
import AboutMe from "./components/aboutMe/AboutMe";
import HomePage from "./components/homePage/HomePage";
import Transition from "./components/transition/Transition";
import { PortfolioContext } from "./context/PortfolioContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactMe from "./components/contactMe/ContactMe";
import CollectionsMobile from "./components/collectionsMobile/CollectionsMobile";

function App() {
  const { isTransition } = useContext(PortfolioContext);
  return (
    // <PortfolioContextProvider>
    <div className="App">
      {/* <HomePage /> */}
      {/* <AboutMe /> */}
      {isTransition && <Transition />}
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
          <Route exact path="/contactme" element={<ContactMe />} />
          <Route exact path="/collectionsM" element={<CollectionsMobile />} />
        </Routes>
      </Router>
    </div>
    // </PortfolioContextProvider>
  );
}

export default App;
