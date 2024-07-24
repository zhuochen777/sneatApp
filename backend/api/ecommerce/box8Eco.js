const express = require("express");
const box8EcoModel = require("../../models/ecommerce/box8EcoModel");

const router = express.Router();

router.get("/box8Ecolist", async (req, res) => {
  const box8Ecodata = await box8EcoModel.find();
  res.send(box8Ecodata);
});

module.exports = router;