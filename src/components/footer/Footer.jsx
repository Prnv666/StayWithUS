import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">🏨 StayWithUs</h5>
            <p>Your perfect destination for luxury stays and events. We provide premium hotel suites and grand marriage halls tailored to your needs.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link className="text-light text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-light text-decoration-none" to="/rooms">Suites & Halls</Link></li>
              <li><Link className="text-light text-decoration-none" to="/my-bookings">My Bookings</Link></li>
              <li><Link className="text-light text-decoration-none" to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold">Contact Us</h6>
            <p className="mb-1">📍 123 Grand Avenue, Mumbai, India</p>
            <p className="mb-1">📞 +91 9272119568</p>
            <p className="mb-1">📧 pranavgavkhare999@gmail.com</p>
            <p className="mb-0">💼 Hours: 9am – 9pm IST</p>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-top pt-3 text-center small text-secondary">
          © {new Date().getFullYear()} StayWithUs. All Rights Reserved -- @Pranav Gavkhare
        </div>
      </div>
    </footer>
  );
};

export default Footer;
