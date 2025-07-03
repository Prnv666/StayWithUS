import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeRoomCard.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      name: "Riya Sharma",
      location: "Pune, India",
      feedback:
        "Our stay at GrandStay was simply perfect. The suite was luxurious and the service was top-notch. Highly recommend!",
      rating: 5,
      date: "June 2025",
    },
    {
      id: 2,
      name: "Aman Verma",
      location: "Delhi, India",
      feedback:
        "Booked the banquet hall for my sister’s wedding — the staff and arrangements were flawless. Thank you!",
      rating: 4,
      date: "May 2025",
    },
    {
      id: 3,
      name: "Neha Kulkarni",
      location: "Mumbai, India",
      feedback:
        "The ambiance was amazing. Clean rooms, great food, and friendly staff. I’ll definitely come again.",
      rating: 5,
      date: "April 2025",
    },
  ];

  return (
    <div className="container py-5 my-5 shadow rounded">
      <h2 className="text-center mb-5">🌟 Guest Experiences</h2>
      <div className="row">
        {experiences.map((exp) => (
          <div className="col-md-6 col-lg-4 mb-4" key={exp.id}>
            <div className="card h-100 shadow-sm rounded-4 p-3 shadow hover-scale">
              <div className="card-body">
                <h5 className="card-title mb-1">{exp.name}</h5>
                <p className="text-muted small mb-2">{exp.location} • {exp.date}</p>
                <p className="card-text text-secondary" style={{ minHeight: "100px" }}>
                  “{exp.feedback}”
                </p>
                <div className="text-warning">
                  {"★".repeat(exp.rating)}{"☆".repeat(5 - exp.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
