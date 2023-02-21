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
    if (project.username === req.body.username) {
      try {
        updatedProject = await Project.findByIdAndUpdate(
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
    if (project.username === req.body.username) {
      try {
        post.delete();
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
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;

    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      project = await Project.find();
    }
    res.status(200).json(posts);
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
