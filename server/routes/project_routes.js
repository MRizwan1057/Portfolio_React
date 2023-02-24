const router = require("express").Router();
const {
  createProject,
  updateProject,
  removeProject,
  getProject,
  getAllProject,
} = require("../controllers/project_controller");

// Create a Project
router.post("/", createProject);

// update a Project
router.put("/:id", updateProject);

// delete a Project
router.delete("/:id", removeProject);

// get a single Project
router.get("/:id", getProject);

// get all Projects
router.get("/", getAllProject);

module.exports = router;
