const express = require("express");
const router = express.Router();

router.use("/healthz", require("./healthz"));
router.use("/signup", require("./signup"));
router.use("/login", require("./login"));
router.use("/logout", require("./logout"));

module.exports = router;
