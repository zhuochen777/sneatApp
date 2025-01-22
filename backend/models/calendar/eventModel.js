const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title: { type: String },
    calendar: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    eventURL: { type: String },
    guests: { type: Array }, 
    description: { type: String },
  },
  { timestamps: true }
);

let eventModel = mongoose.model("event", eventSchema);

module.exports = eventModel;