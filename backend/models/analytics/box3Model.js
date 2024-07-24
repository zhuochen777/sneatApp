const mongoose = require("mongoose");

const box3Schema = mongoose.Schema({
  name: { type: String, require: true },
  2023: { type: Number, required: true },
  2022: { type: Number, required: true },
});

let box3Model = mongoose.model("box3data", box3Schema);

module.exports = box3Model;
