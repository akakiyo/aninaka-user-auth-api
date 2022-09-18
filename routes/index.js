const express = require("express");
const router = express.Router();

router.use("/healthz", require("./healthz"));
router.use("/signup", require("./signup"));

module.exports = router;
