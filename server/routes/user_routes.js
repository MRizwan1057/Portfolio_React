const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} = require("../controllers/user_contoller.js");

// Update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

// Get User
router.get("/:id", getUser);

// Get  All User
router.get("/", getAllUser);

module.exports = router;
