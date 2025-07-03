import React, { useEffect, useState, useRef } from "react";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const CustomUserMenu = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="position-relative" ref={menuRef}>
      <img
        src={user.imageUrl}
        alt="profile"
        onClick={toggleMenu}
        className="rounded-circle"
        style={{ width: "36px", height: "36px", cursor: "pointer" }}
      />
      {menuOpen && (
        <div
          className="position-absolute bg-white border shadow-sm rounded p-2"
          style={{ right: 0, top: "110%", minWidth: "160px", zIndex: 999 }}
        >
          <div className="dropdown-item text-dark fw-semibold mb-2">
            👋 {user.firstName}
          </div>
          <div
            className="dropdown-item text-dark py-1 px-2"
            onClick={() => {
              navigate("/my-bookings");
              setMenuOpen(false);
            }}
            style={{ cursor: "pointer" }}
          >
            📖 My Bookings
          </div>
          <div
            className="dropdown-item text-dark py-1 px-2"
            onClick={() => {
              navigate("/profile");
              setMenuOpen(false);
            }}
            style={{ cursor: "pointer" }}
          >
            👤 Profile
          </div>
          <div
            className="dropdown-item text-danger py-1 px-2"
            onClick={() => signOut()}
            style={{ cursor: "pointer" }}
          >
            🚪 Logout
          </div>
        </div>
      )}
    </div>
  );
};
export default CustomUserMenu