import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const API =
    process.env.REACT_APP_API_URL ||
    "https://mern-portfolio-0idk.onrender.com";

  const YOUR_EMAIL = "yourgmail@gmail.com";

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
      console.error(error);

      setTimeout(() => setMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${YOUR_EMAIL}`;
  };

  return (
    <div className="page-container contact-page">

      {/* Header */}
      <div className="contact-header">
        <span className="contact-badge">GET IN TOUCH</span>

        <h1>Let's Work Together</h1>

        <p>
          Have a project, opportunity, or just want to say hello?
          Feel free to reach out. I'd love to hear from you.
        </p>
      </div>

      <div className="contact-wrapper">

        {/* Contact Form */}
        <div className="contact-form-card">

          <div className="form-title">
            <h2>Send Me a Message</h2>
            <p>I'll get back to you as soon as possible.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            {message && (
              <div
                className={`message ${
                  message.includes("successfully")
                    ? "success"
                    : "error"
                }`}
              >
                {message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <span>→</span>
                </>
              )}
            </button>

          </form>
        </div>

        {/* Direct Email Card */}
        <div className="direct-email-card">

          <div className="email-icon">
            ✉
          </div>

          <h2>Prefer Email?</h2>

          <p>
            You can also contact me directly through your
            preferred email application.
          </p>

          <div className="email-address">
            <span>My Email</span>

            <strong>{YOUR_EMAIL}</strong>
          </div>

          <button
            className="email-btn"
            onClick={handleEmailClick}
          >
            Email Me
            <span>↗</span>
          </button>

          <p className="email-note">
            Clicking the button will open your default email app.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Contact;
