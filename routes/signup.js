const { users } = require("../models/models.js");
const express = require("express");
const sequelize = require("../sequelize");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    await sequelize.sync();
    //ユーザの新規登録の処理
    await sequelize.transaction(async (trn) => {
      const { userName, emailAddress, password } = req.body;
      console.log(userName, emailAddress, password);
      await users.sync();
      await users.create(
        {
          user_name: userName,
          email_address: emailAddress,
          password,
        },
        {
          transaction: trn,
        }
      );
    });
    res.end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
