const mongoose = require("mongoose");

const box6EcoSchema = mongoose.Schema({
  pv: { type: Number, require: true },
});

let box6EcoModel = mongoose.model("box6Ecodata", box6EcoSchema);

module.exports = box6EcoModel;