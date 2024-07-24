const mongoose = require("mongoose");

const emailSchema = mongoose.Schema(
  {
    sender: { type: String },
    from: { type: String },
    to: { type: String },
    img: { type: String },
    subject: { type: String },
    type: { type: String }, 
    labels: { type: Array },
    body: { type: String },
    read: { type: Boolean },
    trash: { type: Boolean },
    starred: { type: Boolean },
    spam:{ type: Boolean },
  },
  { timestamps: true }
);

let emailModel = mongoose.model("email", emailSchema);

module.exports = emailModel;
