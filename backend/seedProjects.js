const mongoose = require("mongoose");
const Project = require("./models/Project");
const projects = require("./projects.json");
require("dotenv").config();

async function seedProjects() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const existing = await Project.countDocuments();
    console.log("Existing projects:", existing);

    if (process.env.NODE_ENV === "development") {
      await Project.deleteMany({});
      console.log("Old projects deleted");
    }

    const result = await Project.insertMany(projects);
    console.log("Inserted projects:", result.length);
    console.log("Seeding completed");

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Error:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
}

seedProjects();