import React from "react";
import HomeCaraousal from "./HomeCaraousal";
import HomeFeatureVid from "./HomeFeatureVid";

const HomeFeature = () => {
  return (
    <>
      <div className="container-fluid " style={{height:"100vh"}}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className="text-center m-3">
              <h1>Nest & Nuptials </h1>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="text-center m-3">
              <h6>“A space for hearts to meet, rest, and rejoice.”</h6>
              <h6>
                “Crafting experiences, from restful nights to joyful vows.”
              </h6>
            </div>
          </div>
          <div className="row ">
            <HomeCaraousal/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFeature;
