const blogService = require("../service/Blog.service");
const { invoker, writeResponse } = require("../utils/utility");
const {
  createBlogSchema,
  updateBlogSchema,
  blogIdSchema,
} = require("../utils/validationSchema");

async function createBlog(req, res) {
  const { error, value } = createBlogSchema.validate(req.body);

  if (error) {
    return writeResponse(
      {
        code: 400,
        message: error.details[0].message,
      },
      null,
      res
    );
  }

  const { title, content, author } = value;

  const [response, err1] = await invoker(
    blogService.createBlog(title, content, author)
  );

  if (err1) {
    return writeResponse(
      {
        code: 500,
        message: "Something went wrong while creating blog.",
      },
      null,
      res
    );
  }
  return writeResponse(null, response, res);
}

async function updateBlog(req, res) {
  const { error, value } = updateBlogSchema.validate({
    ...req.params,
    ...req.body,
  });

  if (error) {
    return writeResponse(
      {
        code: 400,
        message: error.details[0].message,
      },
      null,
      res
    );
  }

  const { blogId, title, content, author } = value;

  const [isBlogExist, err1] = await invoker(blogService.isBlogExist(blogId));

  if (!isBlogExist) {
    return writeResponse(
      {
        code: 404,
        message: "Blog not found.",
      },
      null,
      res
    );
  }

  if (err1) {
    return writeResponse(
      { code: 500, message: "Something went wrong while fetching blog." },
      null,
      res
    );
  }

  const [response, err2] = await invoker(
    blogService.updateBlog(blogId, title, content, author)
  );

  if (err2) {
    return writeResponse(
      { code: 500, message: "Something went wrong while updating blog." },
      null,
      res
    );
  }
  return writeResponse(null, response, res);
}

async function getBlog(req, res) {
  const { error, value } = blogIdSchema.validate(req.params);

  if (error) {
    return writeResponse({ code: 400, message: "Bad Request" }, null, res);
  }

  const [isBlogExist, err1] = await invoker(
    blogService.isBlogExist(value.blogId)
  );

  if (!isBlogExist) {
    return writeResponse(
      {
        code: 404,
        message: "Blog not found.",
      },
      null,
      res
    );
  }

  if (err1) {
    return writeResponse(
      { code: 500, message: "Something went wrong while fetching blog." },
      null,
      res
    );
  }

  const [response, err2] = await invoker(blogService.getById(value.blogId));

  if (err2) {
    return writeResponse(
      { code: 500, message: "Something went wrong while fetching blog." },
      null,
      res
    );
  }

  return writeResponse(null, response, res);
}

async function deleteBlog(req, res) {
  const { error, value } = blogIdSchema.validate(req.params);

  if (error) {
    return writeResponse({ code: 400, message: "Bad Request" }, null, res);
  }

  const [isBlogExist, err1] = await invoker(
    blogService.isBlogExist(value.blogId)
  );

  if (!isBlogExist) {
    return writeResponse(
      {
        code: 404,
        message: "Blog not found.",
      },
      null,
      res
    );
  }

  if (err1) {
    return writeResponse(
      { code: 500, message: "Something went wrong while fetching blog." },
      null,
      res
    );
  }

  const [response, err2] = await invoker(blogService.deleteById(value.blogId));

  if (err2) {
    return writeResponse(
      { code: 500, message: "Something went wrong while deleting blog." },
      null,
      res
    );
  }

  return writeResponse(null, response, res);
}

module.exports = { createBlog, updateBlog, getBlog, deleteBlog };
