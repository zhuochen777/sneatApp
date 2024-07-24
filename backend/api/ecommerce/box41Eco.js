const express = require("express");
const box41EcoModel = require("../../models/ecommerce/box41EcoModel");

const router = express.Router();

router.get("/box41Ecolist", async (req, res) => {
  const box41Ecodata = await box41EcoModel.find();
  res.send(box41Ecodata);
});

module.exports = router;