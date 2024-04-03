require("dotenv").config();

const router = require("express").Router();
const {
  getAllUsers,
  createNewUsers,
  searchUsers,
} = require("../controllers/user.controller");
const verifyAuth = require("../middlewares/verifyAuth");
const validateUser = require("../validations/user.validator");

router.get("/all", verifyAuth, getAllUsers);
router.post("/register", validateUser, createNewUsers);
router.get("/search/:username", searchUsers);

module.exports = router;
