const express = require("express");
const app = express();
const BlogRoutes = require("./routes/Blog");

require("dotenv").config();

// SERVER PORT
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api", BlogRoutes);

app.use("/", (req, res) => {
  res.send("OK!");
});

module.exports = app;
