const express = require("express");
const rowsBrowserModel = require("../../models/analytics/rowsBrowserModel");

const router = express.Router();

router.get("/rowsBrowserlist", async (req, res) => {
  const rowsBrowserdata = await rowsBrowserModel.find();
  res.send(rowsBrowserdata);
});

module.exports = router;