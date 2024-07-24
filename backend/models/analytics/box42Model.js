const mongoose = require("mongoose");

const box42Schema = mongoose.Schema({
  name: { type: String, require: true },
  uv: { type: Number, required: true },
});

let box42Model = mongoose.model("box42data", box42Schema);

module.exports = box42Model;