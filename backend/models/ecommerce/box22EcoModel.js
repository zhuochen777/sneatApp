const mongoose = require("mongoose");

const box22EcoSchema = mongoose.Schema({
  name: { type: String, require: true },
  pv: { type: Number, required: true },
});

let box22EcoModel = mongoose.model("box22Ecodata", box22EcoSchema);

module.exports = box22EcoModel;