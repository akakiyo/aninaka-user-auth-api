const { users } = require("../models/models.js");
const express = require("express");
const sequelize = require("../sequelize");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    await sequelize.sync();
    //ユーザの新規登録の処理
    const { email_address, password } = req.body;
    const user_name = (
      await sequelize.query(
        `SELECT user_name FROM USERS WHERE email_address = (?) AND password = (?)`,
        {
          replacements: [email_address, password],
        }
      )
    )[0];

    if (user_name.length === 1) {
      res.json("ログインに成功しました");
    } else if (user_name.length === 0) {
      res.json("ログインに失敗しました");
    } else {
      res.json("予期せぬエラー");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
