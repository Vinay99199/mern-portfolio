const Project = require("../models/Project");

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ displayOrder: 1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error("Error fetching projects:", error);

    res.status(500).json({
      success: false,
      message: "Error fetching projects"
    });
  }
};

// Get featured projects
exports.getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ featured: true })
      .sort({ featuredOrder: 1 })
      .limit(2);

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error("Error fetching featured projects:", error);

    res.status(500).json({
      success: false,
      message: "Error fetching featured projects"
    });
  }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error("Error fetching project:", error);

    res.status(500).json({
      success: false,
      message: "Error fetching project"
    });
  }
};