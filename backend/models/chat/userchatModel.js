const mongoose = require("mongoose");

const userchatSchema = new mongoose.Schema(
  {
    userId:{type: String},
    chats: {type: Array}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Userchat", userchatSchema)