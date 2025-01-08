const express = require("express");
const box2CrmModel = require("../../models/crm/box2CrmModel");

const router = express.Router();

router.get("/box2Crmlist", async (req, res) => {
  const box2Crmdata = await box2CrmModel.find();
  res.send(box2Crmdata);
});

module.exports = router;