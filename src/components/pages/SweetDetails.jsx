import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sweetData from "./sweetData";

const SweetDetails = () => {
  const { id } = useParams();
  const room = sweetData.find((r) => r.id === id);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  //  Dynamically calculate total price
  const totalPrice = room ? room.pricePerNight * formData.guests : 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      return;
    }

    const booking = {
      roomId: room.id,
      roomName: room.name,
      name: formData.name,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      image: room.images[0],
      price: totalPrice,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existingBookings, booking]));

    alert(
      `✅ Booking Confirmed!\n🏨 Room: ${room.name}\n👤 Guest: ${formData.name}\n📅 ${formData.checkIn} to ${formData.checkOut}\n👥 Guests: ${formData.guests}\n💰 Total Price: ₹${totalPrice}`
    );

    setFormData({ name: "", checkIn: "", checkOut: "", guests: 1 });
  };

  if (!room) {
    return (
      <div className="container text-center py-5 mt-5">
        <h4 className="text-danger">Room not found!</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-2 pt-5">{room.name}</h2>
      <p className="text-muted mb-2">{room.description}</p>
      <h5 className="text-success mb-4">₹{room.pricePerNight} / night</h5>

      {/* Gallery */}
      <div className="row g-3 mb-4">
        {room.images.map((img, idx) => (
          <div className="col-12 col-md-6" key={idx}>
            <img
              src={img}
              alt={`Room ${idx}`}
              className="img-fluid rounded-4 shadow-sm"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* Booking Form */}
      <div className="card shadow p-4 rounded-4">
        <h4 className="mb-4">🛎️ Book This Room</h4>
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
          <div className="col-md-3">
            <label className="form-label">Check-in</label>
            <input
              name="checkIn"
              type="date"
              className="form-control"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Check-out</label>
            <input
              name="checkOut"
              type="date"
              className="form-control"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Guests</label>
            <input
              name="guests"
              type="number"
              className="form-control"
              min="1"
              max='1'
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          {/* ✅ Total Price Display (inline in form, responsive) */}
          <div className="col-md-3 d-flex align-items-end">
            <div className="text-success fw-semibold">
              💰 Total: ₹{totalPrice}
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <button className="btn btn-outline-success text-center fw-bold"onClick={()=> navigate('/rooms')}>Multiple Guests Booking</button>
          </div>

          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary w-100">
              Book Suite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SweetDetails;
