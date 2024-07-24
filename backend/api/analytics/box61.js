const express = require("express");
const box61Model = require("../../models/analytics/box61Model");

const router = express.Router();

router.get("/box61list", async (req, res) => {
  const box61data = await box61Model.find();
  res.send(box61data);
});

module.exports = router;