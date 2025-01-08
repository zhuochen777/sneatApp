const mongoose = require("mongoose");

const box33CrmSchema = mongoose.Schema({
  name: { type: String,required: true },
  value: { type: Number,required: true },
});

let box33CrmModel = mongoose.model("box33Crmdata", box33CrmSchema);

module.exports = box33CrmModel;