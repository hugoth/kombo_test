const express = require("express");
const router = express.Router();
const controller = require("./controllers");

router.post("/city/create", controller.createCity);
router.get("/cities", controller.getCities);
router.post("/city/search", controller.searchCity);
module.exports = router;
 