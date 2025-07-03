import React from "react";
import AboutCarousal from "./AboutCarousal";

const About = () => {
  return (
    <div className="container py-5 my-5">
      <h2 className="text-center mb-4">🏨 About StayWithUs</h2>

      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6">
          <p className="lead">
            Welcome to <strong>StayWithUs</strong>, your trusted destination for luxury suites, relaxing getaways, and unforgettable celebrations.
          </p>
          <p>
            Whether you're booking a short business trip, a romantic honeymoon, or a grand marriage hall for special moments, StayWithUs offers top-class amenities with transparent pricing, seamless booking, and heartfelt hospitality.
          </p>
          <p>
            Our platform is built with care to give users an easy experience—from browsing rooms and marriage halls, to submitting personalized booking requests, managing your bookings, and getting support—all in one place.
          </p>
          <p className="fw-bold text-primary">
            We don’t just offer stays — we offer experiences worth remembering.
          </p>
        </div>

        {/* Carousel */}
        <AboutCarousal/>
      </div>

      <hr className="my-5" />

      <div className="text-center">
        <h4 className="mb-3">🎯 Our Mission</h4>
        <p className="mx-auto" style={{ maxWidth: "700px" }}>
          To create a seamless and trusted platform where guests can find and book the perfect room or hall for any occasion—comfortably, transparently, and confidently.
        </p>
      </div>

      <div className="mt-5">
        <h5>💡 Why Choose StayWithUs?</h5>
        <ul className="list-unstyled mt-3">
          <li>✅ Easy booking experience across devices</li>
          <li>✅ Transparent pricing with no hidden charges</li>
          <li>✅ Responsive support and user-friendly cancellation</li>
          <li>✅ Options for suites, marriage halls, and corporate stays</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
