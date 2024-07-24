const mongoose = require("mongoose")

const box21Schema = mongoose.Schema({
  name: { type: String, require: true },
  pv: { type: Number, required: true },
});

let box21Model = mongoose.model("box21data",box21Schema)

module.exports = box21Model