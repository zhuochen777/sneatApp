const mongoose = require("mongoose");

const rowsBox10CrmSchema = mongoose.Schema({
  name: { type: String, require: true },
  avatar: { type: String, required: true },
  email:{ type: String, required: true },
  amount:{ type: Number, required: true },
  status:{type: String, required: true},
  paidBy: { type: String, required: true },

});

let rowsBox10CrmModel = mongoose.model("rowsBox10Crm", rowsBox10CrmSchema);

module.exports = rowsBox10CrmModel;