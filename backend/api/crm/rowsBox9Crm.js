const express = require("express");
const rowsBox9CrmModel = require("../../models/crm/rowsBox9CrmModel");

const router = express.Router();

router.get("/rowsBox9Crmlist", async (req, res) => {
  const rowsBox9Crmdata = await rowsBox9CrmModel.find();
  res.send(rowsBox9Crmdata);
});

module.exports = router;