require("dotenv").config();
const app = require("./app");
// const chalk = require("chalk");
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
