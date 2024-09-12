const express = require("express");
const router = express.Router();

const {
  addUsersG,
  addUsers,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

// Get all users...
router.get("/getusers", getUsers);

router.get("/users", addUsersG);

// Create User (retrieve all items)
router.post("/users", addUsers);

// Define route for updating a user by ID
router.put("/users/:id", updateUser);

// Delete Users
router.delete("/users/:id", deleteUser);

module.exports = router;
