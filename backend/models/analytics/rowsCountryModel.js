const mongoose = require("mongoose");

const rowsCountrySchema = mongoose.Schema({
  number: { type: Number, require: true },
  logoSrc: { type: String, required: true },
  country:{ type: String, required: true },
  visit:{ type: String, required: true },
  dataInPer:{type: Number, required: true},
  color: { type: String, required: true },

});

let rowsCountryModel = mongoose.model("rowsCountry", rowsCountrySchema);

module.exports = rowsCountryModel;