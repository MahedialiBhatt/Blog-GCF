const mongoose = require("mongoose");
const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log("Blog Server Started on Port:", PORT);
  });
});
