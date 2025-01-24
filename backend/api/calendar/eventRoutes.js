const express = require("express");
const eventModel = require("../../models/calendar/eventModel");

const router = express.Router();

//get all events
router.get("/calendar/all", async (req, res) => {
  try {
    let allEvents = await eventModel.find();
    res.status(200).send(allEvents);
  } catch (e) {
    res.status(500).send(e);
  }
});

//save/add a new event
router.post("/calendar/add", async (req, res) => {
  try {
    await eventModel.create(req.body.calendarEvent);
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//update an event
router.post("/calendar/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const {
      title,
      calendar,
      startDate,
      endDate,
      eventURL,
      guests,
      description,
    } = req.body.calendarEvent;

    await eventModel.updateOne(
      { _id: id },
      {
        $set: {
          title,
          calendar,
          startDate,
          endDate,
          eventURL,
          guests,
          description,
        },
      }
    );
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/calendar/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await eventModel.deleteOne({ _id: id });
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
