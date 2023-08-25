const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: String,
    publicationDate: Date,
  },
  {
    timestamps: true,
  }
);

PostSchema.methods.toJSON = function () {
  var obj = this.toObject();
  obj["id"] = obj._id;
  delete obj._id;
  delete obj.__v;
  return obj;
};

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
