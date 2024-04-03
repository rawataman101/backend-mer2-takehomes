const Discussion = require("../models/discussion.model");
const createNewDiscussion = async (req, res) => {
  try {
    const { author, title, content } = req.body;
    const newDiscussion = new Discussion({
      author,
      title,
      content,
    });
    const result = await newDiscussion.save();
    res.json(result);
    console.log("***created new user***");
  } catch (error) {
    res.status(500).json({
      message: "Failed to create new discussion",
      title: req.body.title,
      error,
    });
  }
};

module.exports = { createNewDiscussion };
