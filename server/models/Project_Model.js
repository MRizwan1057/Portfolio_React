const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
    host: {
      type: String,
      default: "localhost",
    },
    code: {
      type: String,
      default: "",
    },
    demo: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
