const express = require("express");
const router = express.Router();

router.use("/healthz", require("./healthz"));

module.exports = router;
