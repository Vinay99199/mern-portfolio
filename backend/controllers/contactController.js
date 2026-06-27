const axios = require("axios");
const Contact = require("../models/Contact");

exports.sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await Contact.create({ name, email, message });

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Portfolio",
          email: process.env.EMAIL_USER,
        },
        to: [{ email: process.env.MY_EMAIL }],
        replyTo: { email: email },
        subject: `New Message from ${name}`,
        htmlContent: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};