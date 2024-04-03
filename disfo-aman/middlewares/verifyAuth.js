const PASSWORD = process.env.AUTH_KEY;
//const PASSWORD = "Abracadabra";

const verifyAuth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== PASSWORD) {
    return res.status(403).json({ message: "Unauthorised Access" });
  }
  next();
};
module.exports = verifyAuth;
