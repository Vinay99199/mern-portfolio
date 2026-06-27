const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/connect");
const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");

const app = express();

connectDB();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://mern-portfolio-frontend-qaf3.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running 🚀",
    endpoints: {
      projects: "/api/projects",
      contact: "/api/contact"
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});