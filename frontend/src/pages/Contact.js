import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const API =
    process.env.REACT_APP_API_URL ||
    "https://mern-portfolio-0idk.onrender.com";

  const YOUR_EMAIL = "vinayjaiswal059@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${API}/api/contact`,
        formData
      );

      if (response.data.success) {
        setMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setMessage(""), 5000);
      }
    } catch (error) {
      setMessage("Error sending message");
      setTimeout(() => setMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container contact-page">

      <div className="contact-header">
        <span className="contact-badge">GET IN TOUCH</span>

        <h1>Let's Work Together</h1>

        <p>
          Have a project, opportunity, or just want to say hello?
          Feel free to reach out. I'd love to hear from you.
        </p>
      </div>

      <div className="contact-wrapper">

        {/* FORM */}
        <div className="contact-form-card">

          <div className="form-title">
            <h2>Send Me a Message</h2>
            <p>I'll get back to you as soon as possible.</p>
          </div>

          <form
            className="contact-page-form"
            onSubmit={handleSubmit}
          >

            {message && (
              <div
                className={`contact-page-message ${
                  message.includes("successfully")
                    ? "success"
                    : "error"
                }`}
              >
                {message}
              </div>
            )}

            <div className="contact-page-group">
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contact-page-group">
              <label>Your Email</label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contact-page-group">
              <label>Your Message</label>

              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-page-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Sending..."
                : "Send Message →"}
            </button>

          </form>
        </div>

        {/* EMAIL */}
        <div className="direct-email-card">

          <div className="email-icon">✉</div>

          <h2>Prefer Email?</h2>

          <p>
            You can also contact me directly through your
            preferred email application.
          </p>

          <div className="email-address">
            <span>MY EMAIL</span>
            <strong>{YOUR_EMAIL}</strong>
          </div>

          <a
            href={`mailto:${YOUR_EMAIL}`}
            className="email-btn"
          >
            Email Me ↗
          </a>

          <p className="email-note">
            Clicking the button will open your default email app.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Contact;
