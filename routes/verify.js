const express = require("express");
const sequelize = require("../sequelize");
const jwtHelper = require("../helper/jwtHelper");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    // const token = req.query.token;
    const token = req.headers.authorization;
    if (jwtHelper.verifyToken(token)) {
      res.status(200).json({ isAuthenticated: true });
    } else {
      res.status(200).json({ isAuthenticated: false });
    }

    // res.json({ userInfo, token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
