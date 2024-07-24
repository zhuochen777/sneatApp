const mongoose = require("mongoose");

const box21EcoSchema = mongoose.Schema({
  name: { type: String, require: true },
  uv: { type: Number, required: true },
});

let box21EcoModel = mongoose.model("box21Ecodata", box21EcoSchema);

module.exports = box21EcoModel;