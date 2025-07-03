import React from "react";

const HomeFeatureVid = () => {
  return (
    <>
      <div className="col-lg-6 col-md-12">
        <p className="text-muted">
          Escape the ordinary and step into paradise. Our resort welcomes you
          with lush landscapes, tranquil pools, and luxurious rooms tailored for
          relaxation.
        </p>

        <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
          <video
            src="/assets/maitriVid.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-100 h-100 object-fit-cover"
          />
        </div>
      </div>
    </>
  );
};

export default HomeFeatureVid;
