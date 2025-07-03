import React from "react";

const AboutCarousal = () => {
  return (
    <>
      <div className="col-md-6">
        <div
          id="aboutCarousel"
          className="carousel slide shadow rounded-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded-4">
            <div className="carousel-item active">
              <img
                src="https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                className="d-block w-100"
                alt="Luxury Suite 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww"
                className="d-block w-100"
                alt="Luxury Suite 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=80"
                className="d-block w-100"
                alt="Marriage Hall"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutCarousal;
