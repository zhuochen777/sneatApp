const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    messages:{type:Array,default:[]}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema)