const express = require("express");
const box21EcoModel = require("../../models/ecommerce/box21EcoModel");

const router = express.Router();

router.get("/box21Ecolist", async (req, res) => {
  const box21Ecodata = await box21EcoModel.find();
  res.send(box21Ecodata);
});

module.exports = router;