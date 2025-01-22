const express = require("express");
const eventModel = require("../../models/calendar/eventModel");

const router = express.Router();

//save/add a new event
router.post("/calendar/add", async (req, res) => {
  try {
    await eventModel.create(req.body);
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//get all events
router.get("/calendar/all", async (req, res) => {
  try {
    let allEvents = await eventModel.find();
    res.status(200).send(allEvents);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
