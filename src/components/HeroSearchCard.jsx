import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSearchCard = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    const section = document.getElementById("feature");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/rooms");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="p-4 rounded-4 shadow-lg"
        style={{
          width: "90%",
          maxWidth: "1000px",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <form className="row g-3 align-items-end" onSubmit={handleSearch}>
          <div className="col-md-12 col-12">
            <label htmlFor="purpose" className="form-label text-dark fw-semibold">
              Why are you booking this room?
            </label>
            <select className="form-select" id="purpose" required>
              <option value="">Select purpose</option>
              <option value="one-night">One Night Stay</option>
              <option value="marriage">Marriage Stay</option>
              <option value="honeymoon">Honeymoon Stay</option>
              <option value="business">Business Trip</option>
              <option value="vacation">Family Vacation</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="col-md-6 col-6">
            <label htmlFor="checkin" className="form-label text-dark fw-semibold">
              Check in
            </label>
            <input type="date" className="form-control" id="checkin" required />
          </div>
          <div className="col-md-6 col-6">
            <label htmlFor="checkout" className="form-label text-dark fw-semibold">
              Check out
            </label>
            <input type="date" className="form-control" id="checkout" required />
          </div>

          <div className="col-md-4 col-6">
            <label htmlFor="guests" className="form-label text-dark fw-semibold">
              Guests
            </label>
            <input
              type="number"
              className="form-control"
              id="guests"
              min="1"
              required
              defaultValue="1"
            />
          </div>

          <div className="col-md-4 col-6">
            <button type="submit" className="btn btn-dark w-100 py-2 mt-md-0 mt-2">
              Search
            </button>
          </div>

          <div className="col-md-4 col-6">
            <button
              type="button"
              onClick={handleExplore}
              className="btn btn-outline-primary w-100 py-2 mt-md-0 mt-2"
            >
              Explore
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSearchCard;
