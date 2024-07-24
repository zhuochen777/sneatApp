const mongoose = require("mongoose");

const rowsBrowserSchema = mongoose.Schema({
  number: { type: Number, require: true },
  logoSrc: { type: String, required: true },
  browser:{ type: String, required: true },
  visit:{ type: String, required: true },
  dataInPer:{type: Number, required: true},
  color: { type: String, required: true },

});

let rowsBrowserModel = mongoose.model("rowsBrowser", rowsBrowserSchema);

module.exports = rowsBrowserModel;