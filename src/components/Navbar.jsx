import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Style.css";

import { CiSearch } from "react-icons/ci";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import CustomUserMenu from "./pages/CustomUserMenue";

const Navbar = () => {
  // clerk sign in functionality
  const { openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();

  const navigate = useNavigate();
  const location = useLocation();

  // navbar scroll animations
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="container-fluid">
        <nav
          className={`navbar navbar-expand-lg ${
            isScrolled ? "scrolled-navbar" : "transparent-navbar"
          } fixed-top transition-navbar rounded nav-text`}
        >
          <div className="container-fluid px-3 px-md-4">
            <NavLink className="navbar-brand text-decoration-none" to="/">
              <h3 className="maitri p-2 mb-0">StayWithUS</h3>
            </NavLink>

            {/* Toggler for small screens */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links and user section */}
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center gap-lg-4 gap-md-3 text-center">
                <li className="nav-item">
                  <NavLink className="nav-link text-color" to="/">
                    <h6 className="mb-0">Home</h6>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-color" to="/rooms">
                    <h6 className="mb-0">Hotels</h6>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-color" to="/review">
                    <h6 className="mb-0">Experience</h6>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-color" to="/about">
                    <h6 className="mb-0">About</h6>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to="/login">
                    {user && (
                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => navigate("/owner")}
                      >
                        <h6 className="mb-0">Dashboard</h6>
                      </button>
                    )}
                  </NavLink>
                </li> */}
              </ul>

              {/* Search + User/Login Section */}
              <div className="d-flex align-items-center justify-content-end gap-3 mt-3 mt-lg-0">
                <CiSearch size={20} className="text-dark" />
                {isSignedIn ? (
                  <CustomUserMenu />
                ) : (
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={openSignIn}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
