const mongoose = require("mongoose");

const rowsOSSchema = mongoose.Schema({
  number: { type: Number, require: true },
  logoSrc: { type: String, required: true },
  os:{ type: String, required: true },
  visit:{ type: String, required: true },
  dataInPer:{type: Number, required: true},
  color: { type: String, required: true },

});

let rowsOSModel = mongoose.model("rowsOS", rowsOSSchema);

module.exports = rowsOSModel;