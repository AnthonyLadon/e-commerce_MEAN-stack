const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({ error });
  }
};
