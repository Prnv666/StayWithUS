import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  const handleCancel = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  if (!bookings.length) {
    return (
      <div className="container py-5 text-center">
        <h4 className="my-5">📭 No bookings yet</h4>
      </div>
    );
  }

  return (
    <div className="container my-5 py-5">
      <h2 className="mb-4">
        <span role="img" aria-label="bookings">
          📝
        </span>{" "}
        My Bookings
      </h2>
      <div className="row">
        {bookings.map((b) => (
          <div className="col-md-6 col-lg-4 mb-4" key={b.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={b.image}
                alt={b.hotelName}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{b.hotelName}</h5>
                <p className="card-text">
                  <strong>Name:</strong> {b.name} <br />
                  {b.type === "room" ? (
                    <>
                      <strong>Guests:</strong> {b.guests} <br />
                      <strong>Check-In:</strong> {b.checkIn} <br />
                      <strong>Check-Out:</strong> {b.checkOut} <br />
                      <strong>Guest Info:</strong>
                      <br />
                      <ul className="mb-2 ps-3">
                        {b.guestDetails?.map((g, i) => (
                          <li key={i}>
                            👤 {g.name} ({g.ageGroup})
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <strong>Purpose:</strong> {b.purpose || "Not specified"}{" "}
                      <br />
                    </>
                  )}
                  <strong>Total Price:</strong>{" "}
                  <span className="text-success fw-semibold">
                    ₹{b.totalPrice}
                  </span>
                </p>
                <button
                  className="btn btn-outline-danger btn-sm mt-2"
                  onClick={() => handleCancel(b.id)}
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
