const mongoose = require("mongoose");

const box1CrmSchema = mongoose.Schema({
  name: { type: String, required: true},
  "This Month": { type: Number,required: true },
  "Last Month": { type: Number,required: true },
});

let box1CrmModel = mongoose.model("box1Crmdata", box1CrmSchema);

module.exports = box1CrmModel;