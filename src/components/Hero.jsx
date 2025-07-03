import React from "react";
import HeroSearchCard from "./HeroSearchCard";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <>
      
        <div className="row position-relative">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <HeroImg />
          </div>

          <div className="row position-absolute" style={{ top: "30%" }}>
            <div className="col-lg-6 col-md-12 col-sm-12 text-light p-5 d-none d-md-block">
              <p>The Ultimate Experience</p>
              <h1>
                Discover Your Perfect <br /> Gateway Destination
              </h1>
              <p>
                Unparalleled luxury and comfort await at the world's most
                exclusive <br />
                hotels and resorts. Start your journey today.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-light">
              <HeroSearchCard />
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Hero;
