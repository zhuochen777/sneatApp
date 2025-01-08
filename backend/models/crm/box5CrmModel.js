const mongoose = require("mongoose");

const box5CrmSchema = mongoose.Schema({
  name: { type: String,required: true },
  "Series-1": { type: Number,required: true },
});

let box5CrmModel = mongoose.model("box5Crmdata", box5CrmSchema);

module.exports = box5CrmModel;