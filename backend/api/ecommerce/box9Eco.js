const express = require("express");
const box9EcoModel = require("../../models/ecommerce/box9EcoModel");

const router = express.Router();

router.get("/box9Ecolist", async (req, res) => {
  const box9Ecodata = await box9EcoModel.find();
  res.send(box9Ecodata);
});

module.exports = router;