const mongoose = require("mongoose");
const CitySchema = require("./schema");

const City = mongoose.model("City", CitySchema);

module.exports = City;
