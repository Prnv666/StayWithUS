import React, { useState, useEffect } from "react";

const BookingConfirm = ({ hotel, onBooked }) => {
  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [guestDetails, setGuestDetails] = useState([{ name: "", ageGroup: "" }]);

  const [basePrice, setBasePrice] = useState(0);
  const [nights, setNights] = useState(1);
  const [nightPrice, setNightPrice] = useState(0);
  const [guestCharge, setGuestCharge] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const base = extractBasePrice(hotel.price);
    setBasePrice(base);
  }, [hotel.price]);

  useEffect(() => {
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diffTime = end - start;
    const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 1);
    setNights(diffDays);

    const nightTotal = basePrice * diffDays;
    const guestTotal = (formData.guests - 1) * 500;

    setNightPrice(nightTotal);
    setGuestCharge(guestTotal);
    setTotalPrice(nightTotal + guestTotal);
  }, [formData.checkIn, formData.checkOut, formData.guests, basePrice]);

  useEffect(() => {
    // Adjust guestDetails array size when number of guests changes
    const count = parseInt(formData.guests) || 1;
    const updated = [...guestDetails];

    if (updated.length < count) {
      for (let i = updated.length; i < count; i++) {
        updated.push({ name: "", ageGroup: "" });
      }
    } else {
      updated.length = count;
    }

    setGuestDetails(updated);
  }, [formData.guests]);

  const extractBasePrice = (priceString) => {
    const match = priceString.match(/\d+/g);
    return match ? parseInt(match.join("")) : 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGuestDetailChange = (index, field, value) => {
    const updated = [...guestDetails];
    updated[index][field] = value;
    setGuestDetails(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guestDetails.some((g) => !g.name || !g.ageGroup)) {
      alert("⚠️ Please fill name and age group for all guests.");
      return;
    }

    const bookingData = {
      id: Date.now(),
      hotelId: hotel.id,
      hotelName: hotel.name,
      image: hotel.image,
      type: hotel.type,
      totalPrice,
      ...formData,
      guestDetails,
    };

    const summary = `
✅ Booking Confirmed!

Name: ${formData.name}
Guests: ${formData.guests}
Nights: ${nights}
Check-In: ${formData.checkIn}
Check-Out: ${formData.checkOut}
Total Price: ₹${totalPrice}
`;

    alert(summary);

    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    stored.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(stored));

    onBooked();
  };

  if (hotel.type !== "room") return null;

  return (
    <div className="card shadow p-4 rounded-4 mt-4">
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
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>

        {/* Dynamic guest info */}
        {guestDetails.map((guest, i) => (
          <div key={i} className="col-md-6">
            <label className="form-label">Guest {i + 1} Name</label>
            <input
              type="text"
              className="form-control mb-2"
              value={guest.name}
              onChange={(e) =>
                handleGuestDetailChange(i, "name", e.target.value)
              }
              required
            />
            <select
              className="form-select"
              value={guest.ageGroup}
              onChange={(e) =>
                handleGuestDetailChange(i, "ageGroup", e.target.value)
              }
              required
            >
              <option value="">Select Age Group</option>
              <option value="Child">Child</option>
              <option value="Adult">Adult</option>
            </select>
          </div>
        ))}

        <div className="col-12">
          <div className="mt-3 border-top pt-3 d-flex flex-column gap-1">
            <span className="fw-semibold text-dark">
              🏨 Room Price (per night): {hotel.price}
            </span>
            <span className="fw-semibold text-dark">📅 Nights: {nights}</span>
            <span className="fw-semibold text-dark">👥 Guest Charges: ₹{guestCharge}</span>
            <span className="fw-bold text-success">💰 Total: ₹{totalPrice}</span>
          </div>
        </div>

        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary w-100">
            Book Suite
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingConfirm;
