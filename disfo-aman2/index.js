const PORT = 8082;
const MONGODB_URI = "mongodb://127.0.0.1:27017";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user.routes");
const discussionRouter = require("./routes/discussion.route");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("mongoDB connected.");
  })
  .catch((e) => {
    console.log("ERROR! in connecting mongoDB!");
  });

app.use(express.json());
app.use("/user", userRouter);
app.use("/discussions", discussionRouter);
app.listen(PORT, () => {
  console.log(`Server Listening at PORT ${PORT}`);
});
