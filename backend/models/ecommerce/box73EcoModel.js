const mongoose = require("mongoose");

const box73EcoSchema = mongoose.Schema({
  name: { type: String, require: true },
  uv: { type: Number, require: true },
  pv: { type: Number, require: true },
});

let box73EcoModel = mongoose.model("box73Ecodata", box73EcoSchema);

module.exports = box73EcoModel;