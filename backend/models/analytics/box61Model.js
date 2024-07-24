const mongoose = require("mongoose");

const box61Schema = mongoose.Schema({
  name: { type: String, require: true },
  series1: { type: Number, required: true },
});

let box61Model = mongoose.model("box61data", box61Schema);

module.exports = box61Model;