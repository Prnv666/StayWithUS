// HallBookingForm.jsx
import React, { useState } from "react";

const HallBookingForm = ({ hotel, onBooked }) => {
  const [formData, setFormData] = useState({
    name: "",
    purpose: "Wedding",
    customPurpose: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const extractBasePrice = (priceString) => {
    const match = priceString.match(/\d+/g);
    return match ? parseInt(match.join("")) : 0;
  };

  const basePrice = extractBasePrice(hotel.price);
  const totalPrice = basePrice; // static or flat rate

  const handleSubmit = (e) => {
    e.preventDefault();

    const purposeFinal =
      formData.purpose === "Other" ? formData.customPurpose : formData.purpose;

    const bookingData = {
      id: Date.now(),
      hotelId: hotel.id,
      hotelName: hotel.name,
      image: hotel.image,
      type: hotel.type,
      totalPrice,
      name: formData.name,
      purpose: purposeFinal,
    };

    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    stored.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(stored));

    alert("✅ Hall booking confirmed! Check 'My Bookings' for details.");
    onBooked();
  };

  return (
    <div className="card shadow p-4 rounded-4 mt-4">
      <h4 className="mb-4">🎉 Book This Hall</h4>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Your Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Purpose of Booking</label>
          <select
            name="purpose"
            className="form-select"
            value={formData.purpose}
            onChange={handleChange}
          >
            <option>Wedding</option>
            <option>Engagement</option>
            <option>Reception</option>
            <option>Corporate Event</option>
            <option>Other</option>
          </select>
        </div>

        {formData.purpose === "Other" && (
          <div className="col-12">
            <label className="form-label">Enter Custom Purpose</label>
            <input
              name="customPurpose"
              type="text"
              className="form-control"
              value={formData.customPurpose}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="col-md-6">
          <label className="form-label">Estimated Price</label>
          <div className="text-success fw-semibold fs-5">₹{totalPrice}</div>
        </div>

        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary w-100">
            Book Hall
          </button>
        </div>
      </form>
    </div>
  );
};

export default HallBookingForm;
