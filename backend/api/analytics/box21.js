const express = require("express");
const box21Model = require("../../models/analytics/box21Model");

const router = express.Router();

router.get("/box21list", async (req, res) => {
  const box21data = await box21Model.find();
  res.send(box21data);
});

module.exports = router;