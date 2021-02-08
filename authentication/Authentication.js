const jwt = require("jsonwebtoken");

// authentication middleware
const authenticate = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split("")[1];
      // verify token
      const verified = jwt.verify(token, process.env.TOKEN);

      // attach token to request
      req.user = verified;
      next();
    } else {
      return res.status(400).json({ message: "unauthorized" });
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { authenticate };
