import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (!storedProfile) {
      navigate("/profile-form");
    } else {
      setProfile(storedProfile);
    }
  }, [navigate]);

  const handleEdit = () => {
    navigate("/profile-form");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
    if (confirmDelete) {
      localStorage.removeItem("userProfile");
      setProfile(null);
      navigate("/profile-form");
    }
  };

  if (!profile) return null;

  return (
    <div className="container my-5 py-5">
      <h2 className="mb-4">My Profile</h2>
      <div className="bg-light p-4 rounded shadow">
        <p><strong>Full Name:</strong> {profile.fullName}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Profession:</strong> {profile.profession}</p>

        <div className="mt-4 d-flex gap-2">
          <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
