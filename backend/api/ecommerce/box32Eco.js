const express = require("express");
const box32EcoModel = require("../../models/ecommerce/box32EcoModel");

const router = express.Router();

router.get("/box32Ecolist", async (req, res) => {
  const box32Ecodata = await box32EcoModel.find();
  res.send(box32Ecodata);
});

module.exports = router;