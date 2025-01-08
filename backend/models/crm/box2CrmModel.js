const mongoose = require("mongoose");

const box2CrmSchema = mongoose.Schema({
  name: { type: String, required: true},
  "PRODUCT A": { type: Number,required: true },
  "PRODUCT B": { type: Number,required: true },
});

let box2CrmModel = mongoose.model("box2Crmdata", box2CrmSchema);

module.exports = box2CrmModel;