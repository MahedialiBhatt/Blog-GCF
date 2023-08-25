const express = require("express");
const router = express.Router();

const blogController = require("../controller/Blog.Controller");

// Create a new blog
router.post("/blog", async (req, res) => {
  return await blogController.createBlog(req, res);
});

// Update existing blog
router.patch("/blog/:blogId", async (req, res) => {
  return await blogController.updateBlog(req, res);
});

// Fetch blog by Id
router.get("/blog/:blogId", async (req, res) => {
  return await blogController.getBlog(req, res);
});

// Delete blog by Id
router.delete("/blog/:blogId", async (req, res) => {
  return await blogController.deleteBlog(req, res);
});

module.exports = router;
