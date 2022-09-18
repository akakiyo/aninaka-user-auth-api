const { users } = require("../models/models.js");
const express = require("express");
const sequelize = require("../sequelize");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    await sequelize.sync();
    //ユーザの新規登録の処理
    await sequelize.transaction(async (trn) => {
      console.log(req.body);
      const { user_name, email_address, password } = req.body;
      console.log(user_name);
      console.log(email_address);
      console.log(password);
      await users.create(
        {
          user_name,
          email_address,
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
