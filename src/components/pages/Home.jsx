import React, { useRef } from "react";
import './home.css';

import Hero from "../Hero";
import HomeFeature from "./HomeFeature";
import HomeBook from "./HomeBook";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Hero />
      </div>
      <div className="container-fluid" id="feature">
        <HomeFeature />
      </div>
      <div className="container-fluid">
        <HomeBook />
      </div>
      <div className="container-fluid">
        <About />
      </div>
      <div className="container-fluid">
        <Experience />
      </div>
      <div className="container-fluid">
        <Contact />
      </div>
    </>
  );
};

export default Home;
