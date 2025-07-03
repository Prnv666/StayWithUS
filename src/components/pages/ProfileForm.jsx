import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const navigate = useNavigate();
  const existingProfile = JSON.parse(localStorage.getItem("userProfile"));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    profession: "",
  });

  useEffect(() => {
    if (existingProfile) {
      setFormData(existingProfile); // Pre-fill for edit
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <div className="container py-5 my-5">
      <h2 className="mb-4">{existingProfile ? "Edit" : "Complete"} Your Profile</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            rows={2}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profession</label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {existingProfile ? "Update" : "Save"} Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
