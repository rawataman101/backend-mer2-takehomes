const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, maxLength: 50, default: "" },
    username: { type: String, maxLength: 25, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: (value) => validator.isEmail(value),
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
