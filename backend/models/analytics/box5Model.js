const mongoose = require("mongoose");

const box5Schema = mongoose.Schema({
  name: { type: String, require: true },
  value: { type: Number, required: true },
});

let box5Model = mongoose.model("box5data", box5Schema);

module.exports = box5Model;