const router = require("express").Router();
const User = require("../models/User_Model");
const bcrypt = require("bcrypt");
const { registerUser, loginUser } = require("../controllers/auth_controller");

// Regiser User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

module.exports = router;
