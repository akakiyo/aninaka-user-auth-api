const express = require("express");
const sequelize = require("../sequelize");
const jwtHelper = require("../helper/jwtHelper");

const router = express.Router();

router.get("/", jwtHelper.verifyToken, async (req, res, next) => {
  try {
    console.log("healthz");
    res.json("goods");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
