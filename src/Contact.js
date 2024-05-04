import React, { useState } from "react";
import "./ContactUs.css"; // Ensure to create this CSS file for styling

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, send the data to your backend
    // After successful submission, you can show the sent confirmation
    setIsSent(true);
    setTimeout(() => setIsSent(false), 1500);
  };

  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-us-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
      {isSent && <div className="sent-popup">Message sent!</div>}
    </div>
  );
}

export default ContactUsPage;
