const router = require("express").Router();
const User = require("../models/User_Model");
const Project = require("../models/Project_Model");

// Create Project
const createProject = async (req, res) => {
  const newProject = new Project(req.body);
  try {
    await newProject.save();
    res.status(200).json(newProject);
  } catch (error) {
    res.status(500).json(error.messages);
  }
};

// Update  Project
const updateProject = async (req, res) => {
  try {
    const project = await project.findById(req.params.id);
    if (project.name === req.body.name) {
      try {
        const updatedProject = await Project.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedProject);
      } catch (error) {
        res.status(500).json(error.messages);
        console.log(error);
      }
    } else res.status(404).json("You cannot update except your own project");
  } catch (error) {
    res.status(500).json(error.messages);
    console.log(error);
  }
};

// Delete Project
const removeProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.name === req.body.name) {
      try {
        project.delete();
        res.status(200).json("Project has been deleted...");
      } catch (error) {
        res.status(500).json(error.messages);
        console.log(error);
      }
    } else res.status(404).json("You cannot delete except your own project");
  } catch (error) {
    res.status(500).json(error.messages);
    console.log(error);
  }
};

// get a single project
const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// get all projects
const getAllProject = async (req, res) => {
  try {
    const project = await Project.find();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createProject,
  updateProject,
  removeProject,
  getProject,
  getAllProject,
};
