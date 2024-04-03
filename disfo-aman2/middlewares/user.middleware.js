const Discussion = require("../models/discussion.model");
const fetchUserInCollection = async (req, res, next) => {
  try {
    const { author } = req.body;
    const res = await Discussion.findOne({ author });
    if (res) {
      res.json(res);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
};
