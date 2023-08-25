const Joi = require("joi");

const createBlogSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required().max(256),
  author: Joi.string().required(),
});

const updateBlogSchema = Joi.object({
  blogId: Joi.string().required(),
  title: Joi.string().optional(),
  content: Joi.string().optional().max(256),
  author: Joi.string().optional(),
});

const blogIdSchema = Joi.object({
  blogId: Joi.string().required(),
});

module.exports = {
  createBlogSchema,
  updateBlogSchema,
  blogIdSchema,
};
