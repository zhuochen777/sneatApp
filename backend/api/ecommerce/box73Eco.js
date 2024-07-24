const express = require("express");
const box73EcoModel = require("../../models/ecommerce/box73EcoModel");

const router = express.Router();

router.get("/box73Ecolist", async (req, res) => {
  const box73Ecodata = await box73EcoModel.find();
  res.send(box73Ecodata);
});

module.exports = router;