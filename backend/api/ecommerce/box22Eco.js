const express = require("express");
const box22EcoModel = require("../../models/ecommerce/box22EcoModel");

const router = express.Router();

router.get("/box22Ecolist", async (req, res) => {
  const box22Ecodata = await box22EcoModel.find();
  res.send(box22Ecodata);
});

module.exports = router;