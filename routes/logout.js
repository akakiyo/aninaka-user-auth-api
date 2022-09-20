const { users } = require("../models/models.js");
const express = require("express");
const sequelize = require("../sequelize");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
