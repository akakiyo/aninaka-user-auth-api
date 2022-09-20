const { users } = require("../models/models.js");
const express = require("express");
const sequelize = require("../sequelize");
const jwtHelper = require("../helper/jwtHelper");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //ユーザの新規登録の処理
    const { emailAddress, password } = req.query;
    console.log(emailAddress);
    const userName = (
      await sequelize.query(
        `SELECT user_name FROM USERS WHERE email_address = (?) AND password = (?)`,
        {
          replacements: [emailAddress, password],
        }
      )
    )[0];
    console.log(userName);
    if (userName.length === 1) {
      const token = jwtHelper.createToken(userName);
      console.log(token);
      res.json({ userName, token });
    } else if (userName.length === 0) {
      res.json("ログインに失敗しました");
    } else {
      res.json("予期せぬエラー");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
