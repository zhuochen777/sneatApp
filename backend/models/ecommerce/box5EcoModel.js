const mongoose = require("mongoose");

const box5EcoSchema = mongoose.Schema({
  month: { type: String, require: true },
  Income: { type: Number, required: true },
  Earning: { type: Number, required: true },
  fullMark: { type: Number, required: true },
});

let box5EcoModel = mongoose.model("box5Ecodata", box5EcoSchema);

module.exports = box5EcoModel;