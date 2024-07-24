const express = require("express");
const rowsOSModel = require("../../models/analytics/rowsOSModel");

const router = express.Router();

router.get("/rowsOSlist", async (req, res) => {
  const rowsOSdata = await rowsOSModel.find();
  res.send(rowsOSdata);
});

module.exports = router;