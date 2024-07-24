const express = require("express");
const box6EcoModel = require("../../models/ecommerce/box6EcoModel");

const router = express.Router();

router.get("/box6Ecolist", async (req, res) => {
  const box6Ecodata = await box6EcoModel.find();
  res.send(box6Ecodata);
});

module.exports = router;