const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a project title"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"]
    },
    description: {
      type: String,
      required: [true, "Please provide a project description"],
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"]
    },
    image: {
      type: String,
      required: [true, "Please provide an image URL"],
    },
    githubLink: {
      type: String,
      required: [true, "Please provide a GitHub link"],
      match: [/^https?:\/\/.+/, "Please provide a valid URL"]
    },

    liveLink: {
      type: String,
      required: [true, "Please provide a live demo link"],
      match: [/^https?:\/\/.+/, "Please provide a valid URL"]
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

projectSchema.index({ title: 1 });

module.exports = mongoose.model("Project", projectSchema);