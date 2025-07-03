import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import BookingConfirm from "./BookingConfirm";
import HallBookingForm from "./HallBookingForm";

const HotelDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  if (!state) {
    return (
      <div className="container py-5 my-5 text-center">
        <h3>No Details Found</h3>
        <button
          className="btn btn-secondary mt-3"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5  py-5">
      <h2 className="text-center mb-4">{state.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={state.image}
            alt={state.name}
            className="img-fluid rounded"
          />
          {/* <div className="mt-3">
            <img
              src="https://via.placeholder.com/200x150?text=Extra+1"
              className="me-2 rounded"
              alt="Extra 1"
            />
            <img
              src="https://via.placeholder.com/200x150?text=Extra+2"
              className="rounded"
              alt="Extra 2"
            />
          </div> */}
        </div>

        <div className="col-md-6">
          <h4>
            Price: <span className="text-success">{state.price}</span>
          </h4>
          <h5 className="mt-4">Features:</h5>
          <ul>
            {state.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <button
            className="btn btn-success mt-3"
            onClick={() => setShowForm(true)}
          >
            Confirm Booking
          </button>

          {showForm &&
            (state.type === "room" ? (
              <BookingConfirm
                hotel={state}
                onBooked={() => setShowForm(false)}
              />
            ) : (
              <HallBookingForm
                hotel={state}
                onBooked={() => setShowForm(false)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
