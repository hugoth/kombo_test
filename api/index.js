const router = require("express").Router();

router.use("/city", require("./city/routes"));

module.exports = router;
