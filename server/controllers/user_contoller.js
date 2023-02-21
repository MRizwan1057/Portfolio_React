const User = require("../models/User_Model");
const bcrypt = require("bcrypt");

// Update User
const updateUser = async (req, res, next) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const udatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(udatedUser);
    } catch (err) {
      console.log(res.status(500).json(err.message));
    }
  } else {
    res.status(401).json("You can only update your account");
  }
};

// Delete User
const deleteUser = async (req, res, next) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        console.log(res.status(500).json(err.message));
      }
    } catch (error) {
      res.status(404).json("User Not Found");
    }
  } else {
    res.status(401).json("You can only delete your account");
  }
};

// Get User
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Get All User
const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { updateUser, deleteUser, getUser, getAllUser };
