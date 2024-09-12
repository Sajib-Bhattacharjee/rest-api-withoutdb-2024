const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// User Routers
app.use(userRouter, productRouter);
// app.use(productRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/wellcome.html"));
});
// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message || "Something went wrong!",
  });
});

// 404 - Not Found middleware
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;
