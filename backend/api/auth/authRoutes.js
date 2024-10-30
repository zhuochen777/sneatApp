const express = require("express");
const router = express.Router();
const userModel = require("../../models/chat/userModel");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await userModel.findOne({ name: username });
    const emailCheck = await userModel.findOne({ email });
    if (usernameCheck) {
      return res.json({ message: "Username already used", status: false });
    }
    if (emailCheck) {
      return res.json({ message: "Email already used", status: false });
    }

    const user = await userModel.create({
      name: username,
      email,
      password,
    });

    return res.json({ status: true, user });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        message: "Email or Password is invalid",
        status: false,
      });
    }

    if (user.password != password) {
      return res.json({
        message: "Email or Password is invalid",
        status: false,
      });
    }

    return res.json({ status: true, user });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
