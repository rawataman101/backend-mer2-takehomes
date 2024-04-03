const mongoose = require("mongoose");
const validator = require("validator");

const discussionSchema = new mongoose.Schema(
  {
    title: { type: String, maxLength: 150, required: true },
    author: { type: String, required: true, immutable: true },
    content: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const discussionModel = mongoose.model("Discussions", discussionSchema);
module.exports = discussionModel;
