const config = require("../../config");
const jwt = require("jsonwebtoken");

module.exports = {
  authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, config.tokenSecret, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  },
  generateAccessToken(username) {
    return {
      token: jwt.sign(username, config.tokenSecret, { expiresIn: "1h" }),
    };
  },
};
