const express = require("express");
const box3Model = require("../../models/analytics/box3Model");

const router = express.Router();

router.get("/box3list", async (req, res) => {
  const box3data = await box3Model.find();
  res.send(box3data);
});

module.exports = router;