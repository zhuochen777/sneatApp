const express = require("express");
const rowsBox10CrmModel = require("../../models/crm/rowsBox10CrmModel");

const router = express.Router();

router.get("/rowsBox10Crmlist", async (req, res) => {
  const rowsBox10Crmdata = await rowsBox10CrmModel.find();
  res.send(rowsBox10Crmdata);
});

module.exports = router;