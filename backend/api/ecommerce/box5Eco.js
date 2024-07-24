const express = require("express");
const box5EcoModel = require("../../models/ecommerce/box5EcoModel");

const router = express.Router();

router.get("/box5Ecolist", async (req, res) => {
  const box5Ecodata = await box5EcoModel.find();
  res.send(box5Ecodata);
});

module.exports = router;