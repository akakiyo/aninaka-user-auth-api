require("dotenv").config();
module.exports = {
  SECRET: process.env.SECRET,
  ARGORITHM: process.env.ARGORITHM,
  EXPIRESIN: process.env.EXPIRESIN,
};
