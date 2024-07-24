const express = require("express");
const box5Model = require("../../models/analytics/box5Model");

const router = express.Router();

router.get("/box5list", async (req, res) => {
  const box5data = await box5Model.find();
  res.send(box5data);
});

module.exports = router;