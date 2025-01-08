const mongoose = require("mongoose");

const box31CrmSchema = mongoose.Schema({
  "Series-1": { type: Number,required: true },
});

let box31CrmModel = mongoose.model("box31Crmdata", box31CrmSchema);

module.exports = box31CrmModel;