const mongoose = require("mongoose");

const box32EcoSchema = mongoose.Schema({
  name: { type: String, require: true },
  uv: { type: Number, required: true },
  pv: { type: Number, required: true },
});

let box32EcoModel = mongoose.model("box32Ecodata", box32EcoSchema);

module.exports = box32EcoModel;