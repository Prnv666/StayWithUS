import React from "react";
import HomeFeatureVid from "./HomeFeatureVid";


const HomeCaraousal = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row g-4 justify-content-center align-items-center">
          {/* Carousel Section */}
          <div className="col-lg-6 col-md-12">
            <div
              id="carouselExample"
              className="carousel slide shadow rounded"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src='/assets/roomImg1.png'
                    className="d-block w-100 rounded"
                    alt="Slide 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/roomImg4.png"
                    className="d-block w-100 rounded"
                    alt="Slide 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/roomImg3.png"
                    className="d-block w-100 rounded"
                    alt="Slide 2"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>

          {/* Video Section */}
          <HomeFeatureVid/>
        </div>
      </div>
    </>
  );
};

export default HomeCaraousal;
