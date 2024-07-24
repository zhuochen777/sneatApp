const mongoose = require("mongoose");

const box9EcoSchema = mongoose.Schema({
  name: { type: String, require: true },
  pv: { type: Number, require: true },
});

let box9EcoModel = mongoose.model("box9Ecodata", box9EcoSchema);

module.exports = box9EcoModel;