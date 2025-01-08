const express = require("express");
const box1CrmModel = require("../../models/crm/box1CrmModel");

const router = express.Router();

router.get("/box1Crmlist", async (req, res) => {
  const box1Crmdata = await box1CrmModel.find();
  res.send(box1Crmdata);
});

module.exports = router;