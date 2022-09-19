const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(400).send({
    message: err.message,
  });
};

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is runnning on port ${PORT}.`);
});
