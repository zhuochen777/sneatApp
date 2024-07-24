const express = require("express");
const userchatModel = require("../../models/chat/userchatModel");
const chatModel = require("../../models/chat/chatModel");
const userModel = require("../../models/chat/userModel");

const router = express.Router();

//get current user's userchats(conversations)
router.get("/userchats/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userchat = await userchatModel.findOne({ userId: id });
    const items = userchat.chats;

    //for each chat, push receiver info
    const promises = items.map(async (item) => {
      const user = await userModel.findOne({ _id: item.receiverId });
      return { ...item, user };
    });

    const chatData = await Promise.all(promises);

    res.status(200).send(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
  } catch (e) {
    res.status(500).send(e);
  }
});

//1. current user and receiver are created in user table in database manually
//2. add a new receiver for current user -  create two new userchat records, 
//   one for each of current user and receiver in db
//   i.e. userId: current user/receiver id, chats is []
//3. then execute below code in postman

//add chats in userchat between current user and receiver user
router.post("/userchats/:id/:receiverId", async (req, res) => {
  try {
    const id = req.params.id;
    const receiverId = req.params.receiverId;

    // for receiver
    const newChat = await chatModel.create({ messages: [] });

    // const newMessage1 = {
    //   chatId: newChat._id,
    //   receiverId: id,
    //   lastMessage: "",
    //   updatedAt: Date.now(),
    // };

    const userChat1 = await userchatModel.findOne({ userId: receiverId });
    userChat1.chats.push({
      chatId: newChat._id,
      receiverId: id,
      lastMessage: "",
      updatedAt: Date.now(),
    });
    userChat1.save();

    //for current user
    const userChat2 = await userchatModel.findOne({ userId: id });
    userChat2.chats.push({
      chatId: newChat._id,
      receiverId: receiverId,
      lastMessage: "",
      updatedAt: Date.now(),
    });

    userChat2.save();

    console.log("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
