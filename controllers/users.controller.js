// const express = require("express");
// const users = require("../models/users.model"); // Assume this is an array of users
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");

// // Get all users
// const getUsers = (req, res) => {
//   res.status(200).json(users);
// };

// // Serve HTML form
// const addUsersG = (req, res) => {
//   res.sendFile(path.join(__dirname + "/../views/index.html"));
// };

// // Create User with ID
// const addUsers = (req, res) => {
//   let name = req.body.name;
//   let email = req.body.email;

//   const user = {
//     id: uuiv4(),
//     name,
//     email,
//   };

//   users.push(user);

//   res.status(200).json({
//     success: true,
//     users,
//   });
// };

// // Update User by ID
// const updateUser = (req, res) => {
//   // const { id } = req.params; // Get the user ID from the URL parameters
//   // const { name, email } = req.body; // Get the new data from the request body

//   // // Find the user by ID and ensure proper comparison (parseInt for integer IDs)
//   // const user = users.find((user) => user.id === parseInt(id));

//   // if (user) {
//   //   // Update user details if found
//   //   user.name = name || user.name;
//   //   user.email = email || user.email;

//   //   res.status(200).json({
//   //     success: true,
//   //     message: "User updated successfully",
//   //     user, // Return the updated user data
//   //   });
//   // } else {
//   //   // If user not found
//   //   res.status(404).json({
//   //     success: false,
//   //     message: "User not found",
//   //   });
//   // }

//   let userid = req.params.id;
//   let { name, email } = req.body;
//   users
//     .filter((user) => user.id === userid)
//     .map((selecteduser) => {
//       selecteduser.name = name;
//       selecteduser.email = email;
//     });
//   res.status(200).json(users);
// };

// // delete user
// const deleteUser = (req, res) => {
//   var userid = req.params.id;
//   newUsers = users.filter((user) => user.id !== userid);
//   res.send({ newUsers });
// };

// module.exports = {
//   addUsersG,
//   addUsers,
//   getUsers,
//   updateUser,
//   deleteUser,
// };

const express = require("express");
const users = require("../models/users.model"); // Assume this is an array of users
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Get all users
const getUsers = (req, res) => {
  res.status(200).json({ success: true, users });
};

// Serve HTML form
const addUsersG = (req, res) => {
  res.sendFile(path.join(__dirname, "/../views/index.html"));
};

// Create User with ID
const addUsers = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ success: false, message: "Name and email are required" });
  }

  const user = {
    id: uuidv4(),
    name,
    email,
  };

  users.push(user);

  res
    .status(201)
    .json({ success: true, message: "User added successfully", users });
};

// Update User by ID
const updateUser = (req, res) => {
  const userid = req.params.id;
  const { name, email } = req.body;

  const user = users.find((user) => user.id === userid);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  // Update only if new values are provided
  user.name = name || user.name;
  user.email = email || user.email;

  res
    .status(200)
    .json({ success: true, message: "User updated successfully", user });
};

// Delete user by ID
const deleteUser = (req, res) => {
  const userid = req.params.id;

  const newUsers = users.filter((user) => user.id !== userid);

  if (newUsers.length === users.length) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  // Simulate updating the users array
  users.length = 0; // Clear the array
  users.push(...newUsers); // Push remaining users back into the array

  res
    .status(200)
    .json({ success: true, message: "User deleted successfully", users });
};

module.exports = {
  addUsersG,
  addUsers,
  getUsers,
  updateUser,
  deleteUser,
};
