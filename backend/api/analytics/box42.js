const express = require("express");
const box42Model = require("../../models/analytics/box42Model");

const router = express.Router();

router.get("/box42list", async (req, res) => {
  const box42data = await box42Model.find();
  res.send(box42data);
});

module.exports = router;