const express = require("express");
const box31CrmModel = require("../../models/crm/box31CrmModel");

const router = express.Router();

router.get("/box31Crmlist", async (req, res) => {
  const box31Crmdata = await box31CrmModel.find();
  res.send(box31Crmdata);
});

module.exports = router;