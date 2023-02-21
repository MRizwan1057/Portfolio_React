const router = require("express").Router();
const User = require("../models/User_Model");
const bcrypt = require("bcrypt");

// Regiser User
const registerUser = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    });

    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.log(res.status(500).json(err.message));
  }
};

// Login User
const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    !user && res.status(400).json("Wrong Credentials");
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong Credentials");
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    console.log(res.status(500).json(err.message));
  }
};

module.exports = { registerUser, loginUser };
