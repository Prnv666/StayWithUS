import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "service_ebz7p14";
    const TEMPLATE_ID = "template_0m8n7ss";
    const USER_ID = "Y7V_fh4vLc5dLXONq";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        alert(`✅ Thank you, ${formData.name}! Your message has been sent.`);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      })
      .catch((err) => {
        console.error("Email send failed:", err);
        alert("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <div className="container py-5 my-5 rounded">
      <h2 className="text-center mb-4">📬 Contact Us</h2>
      <div className="row">
        <div className="col-md-7">
          <form className="p-4 shadow rounded bg-light" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows="4"
                className="form-control"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="alert alert-success mt-3" role="alert">
              ✅ Message sent successfully!
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="col-md-5 mt-4 mt-md-0">
          <div className="bg-dark text-light p-4 rounded shadow">
            <h5 className="mb-3">📍 Hotel Address</h5>
            <p>123 Grand Avenue, Mumbai, India</p>
            <h5 className="mb-3">📞 Phone</h5>
            <p>+91 98765 43210</p>
            <h5 className="mb-3">📧 Email</h5>
            <p>support@grandstay.in</p>
            <h5 className="mb-3">🕒 Office Hours</h5>
            <p>Mon - Sun: 9:00 AM – 9:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
