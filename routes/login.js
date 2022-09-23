const { users } = require("../models/models.js");
const express = require("express");
const sequelize = require("../sequelize");
const jwtHelper = require("../helper/jwtHelper");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //ユーザの新規登録の処理
    const { emailAddress, password } = req.query;
    const userInfo = (
      await sequelize.query(
        `SELECT user_name,id FROM USERS WHERE email_address = (?) AND password = (?)`,
        {
          replacements: [emailAddress, password],
        }
      )
    )[0][0];
    if (userInfo) {
      const token = jwtHelper.createToken(userInfo["id"]);
      res.json({ userInfo, token });
    } else {
      res.json("認証失敗");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
