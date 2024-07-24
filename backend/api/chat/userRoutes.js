const express = require("express");
const userModel = require("../../models/chat/userModel");

const router = express.Router();

//get a user
router.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const currentUser = await userModel.findOne({ _id: id });
    res.status(200).send(currentUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

//update a user's status
router.post("/users/status/:id", async (req, res) => {
  try {
    const id = req.params.id
    const status = req.body.status;
    await userModel.updateOne({ _id: id },{$set:{status:status}});
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
