const mongoose = require("mongoose");

const box41EcoSchema = mongoose.Schema({
  name: { type: String, require: true },
  pv: { type: Number, required: true },
});

let box41EcoModel = mongoose.model("box41Ecodata", box41EcoSchema);

module.exports = box41EcoModel;