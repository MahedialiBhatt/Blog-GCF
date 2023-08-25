const Blog = require("../models/Blog");

async function createBlog(title, content, author) {
  const newBlog = new Blog({
    title,
    content,
    author,
    publicationDate: Date.now(),
  });

  await newBlog.save();

  return newBlog;
}

async function updateBlog(blogId, title, content, author) {
  const newUpdatedData = {};

  if (title) {
    newUpdatedData["title"] = title;
  }
  if (content) {
    newUpdatedData["content"] = content;
  }
  if (author) {
    newUpdatedData["author"] = author;
  }

  const blog = await Blog.findByIdAndUpdate(blogId, newUpdatedData, {
    new: true,
  });

  await blog.save();

  return blog;
}

async function getById(blogId) {
  const blog = await Blog.findById(blogId);
  return blog;
}

async function deleteById(blogId) {
  await Blog.findByIdAndDelete(blogId);
  return true;
}

async function isBlogExist(blogId) {
  const blog = await Blog.findById(blogId);

  if (blog) return true;
  return false;
}

module.exports = { createBlog, updateBlog, getById, deleteById, isBlogExist };
