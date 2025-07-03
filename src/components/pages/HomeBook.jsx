import React from "react";
import { useNavigate } from "react-router-dom";
import HomeRoomCard from "./HomeRoomCard";

const HomeBook = () => {
  const navigate = useNavigate();

  
  return (
    <>
      <div className="container-fluid p-5 ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <h1 className="text-center my-3"> Features</h1>
            <p className="text-muted text-center">
              From cozy rooms to grand gatherings and irresistible sweets we
              make every moment special.
            </p>
          </div>
          <div className="row">
            <HomeRoomCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBook;
