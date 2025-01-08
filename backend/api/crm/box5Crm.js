const express = require("express");
const box5CrmModel = require("../../models/crm/box5CrmModel");

const router = express.Router();

router.get("/box5Crmlist", async (req, res) => {
  const box5Crmdata = await box5CrmModel.find();
  res.send(box5Crmdata);
});

module.exports = router;