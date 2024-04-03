const Joi = require("joi");

const userSchema = Joi.object({
  fullName: Joi.string().max(50).default(""),
  username: Joi.string().max(25).required(),
  email: Joi.string().email().required(),
});
const validateUser = (req, res, next) => {
  const { fullName, username, email } = req.body;

  const result = userSchema.validate({ fullName, username, email });
  if (result.error) {
    console.log(result.error);
    return res.status(422).json({ message: result.error.details[0].message });
  }
  next();
};

module.exports = validateUser;
