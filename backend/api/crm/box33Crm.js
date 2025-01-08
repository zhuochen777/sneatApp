const express = require("express");
const box33CrmModel = require("../../models/crm/box33CrmModel");

const router = express.Router();

router.get("/box33Crmlist", async (req, res) => {
  const box33Crmdata = await box33CrmModel.find();
  res.send(box33Crmdata);
});

module.exports = router;