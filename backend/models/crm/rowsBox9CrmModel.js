const mongoose = require("mongoose");

const rowsBox9CrmSchema = mongoose.Schema({
  name: { type: String, require: true },
  avatar: { type: String, required: true },
  title:{ type: String, required: true },
  project:{ type: String, required: true },
  progress:{type: Number, required: true},
  color: { type: String, required: true },

});

let rowsBox9CrmModel = mongoose.model("rowsBox9Crm", rowsBox9CrmSchema);

module.exports = rowsBox9CrmModel;