const mongoose = require("mongoose");

const box6CrmSchema = mongoose.Schema({
  name: { type: String,required: true },
  "Series-1": { type: Number,required: true },
});

let box6CrmModel = mongoose.model("box6Crmdata", box6CrmSchema);

module.exports = box6CrmModel;