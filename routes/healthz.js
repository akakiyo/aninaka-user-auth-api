const express = require("express");
const sequelize = require("../sequelize");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("healthz");
    res.json("goods");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
