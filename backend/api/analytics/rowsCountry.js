const express = require("express");
const rowsCountryModel = require("../../models/analytics/rowsCountryModel");

const router = express.Router();

router.get("/rowsCountrylist", async (req, res) => {
  const rowsCountrydata = await rowsCountryModel.find();
  res.send(rowsCountrydata);
});

module.exports = router;