const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");

const set_opt = {
  secret: "my secret", //本番環境ではわかりにくいキーを設定すること
  resave: false, //trueにするとsessionに変更がなくても強制的に保存　通常false
  saveUninitialized: false, //trueにすると初期はされていなくても保存 通常false
  cookie: { maxAge: 60 * 60 * 1000 }, //cookieの寿命　単位はミリ秒
};

const corsOptions = {
  orign: "http://localhost:3000",
  credentials: true,
};
app.use(session(set_opt));
app.use(cors(corsOptions));
//リクエストされたJSONオブジェクトを読み取れるようにする
app.use(express.json());
//URLのなかでエンコードされた文字を読み取れるようにする
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(400).send({
    message: err.message,
  });
};

app.use(errorHandler);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is runnning on port ${PORT}.`);
});
