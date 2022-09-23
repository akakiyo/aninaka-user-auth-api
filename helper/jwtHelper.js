const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

class jwtHelper {
  static createToken(userId) {
    const token = jwt.sign({ userId }, jwtConfig.SECRET, {
      algorithm: jwtConfig.ARGORITHM,
      expiresIn: jwtConfig.EXPIRESIN,
    });
    return token;
  }
  static verifyToken(token) {
    try {
      const decoded = jwt.verify(token, jwtConfig.SECRET);
      if (decoded) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
}

module.exports = jwtHelper;
