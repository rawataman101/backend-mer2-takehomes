const router = require("express").Router();
const { createNewDiscussion } = require("../controllers/discussion.controller");

router.post("/new", createNewDiscussion);
module.exports = router;
