const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Sajib Bhattacharjee",
    email: "examplemail@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Fatema Zahan Shayla",
    email: "examplemail@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Nayela Sultana",
    email: "examplemail@gmail.com",
  },
  {
    id: uuidv4(),
    name: "Sadiya Jahan Shapla",
    email: "examplemail@gmail.com",
  },
];

module.exports = users;
