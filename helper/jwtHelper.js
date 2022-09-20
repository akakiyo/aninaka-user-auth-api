const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

class jwtHelper {
  static createToken(userName) {
    const token = jwt.sign({ userName }, jwtConfig.SECRET, {
      algorithm: jwtConfig.ARGORITHM,
      expiresIn: jwtConfig.EXPIRESIN,
    });
    return token;
  }
  static verifyToken(req, res, next) {
    try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, jwtConfig.SECRET);
      console.log(decoded);
      req.jwtPayload = decoded;
      next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({ message: "Not authenticated" });
    }
  }
}

module.exports = jwtHelper;
