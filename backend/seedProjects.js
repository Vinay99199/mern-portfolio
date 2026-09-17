const mongoose = require("mongoose");
const Project = require("./models/Project");
const projects = require("./projects.json");
require("dotenv").config();

async function seedProjects() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

    // Remove all existing projects
    await Project.deleteMany({});

    console.log("Old projects deleted");

    // Insert projects from projects.json
    const result = await Project.insertMany(projects);

    console.log(`Inserted ${result.length} projects`);

    console.log("Projects seeded successfully");

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error.message);

    await mongoose.connection.close();

    process.exit(1);
  }
}

seedProjects();