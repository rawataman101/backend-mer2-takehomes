const { json } = require("express");
const User = require("../models/user.model");

const createNewUsers = async (req, res) => {
  try {
    const { fullName, username, email } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({
        message: "Failed to create new user",
        reason: "Already Exists in DB",
      });
    }
    const newUser = new User({ fullName, username, email });
    const result = await newUser.save();
    res.send(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create new user",
      reason: "Internal Server Error",
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const result = await User.find({});
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "No Users found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const searchUsers = async (req, res) => {
  try {
    const { username } = req.params;
    const result = await User.findOne({ username: username });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "No Users found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllUsers, createNewUsers, searchUsers };
