const express = require("express");
const box6CrmModel = require("../../models/crm/box6CrmModel");

const router = express.Router();

router.get("/box6Crmlist", async (req, res) => {
  const box6Crmdata = await box6CrmModel.find();
  res.send(box6Crmdata);
});

module.exports = router;