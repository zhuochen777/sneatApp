const mongoose = require("mongoose");

const box8EcoSchema = mongoose.Schema({
  product: { type: Array, require: true },
  category: { type: String, require: true },
  payment: { type: Array, require: true },
  orderStatus: { type: String, require: true },
});

let box8EcoModel = mongoose.model("box8Ecodata", box8EcoSchema);

module.exports = box8EcoModel;