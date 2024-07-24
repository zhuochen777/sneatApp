const express = require("express");
const chatModel = require("../../models/chat/chatModel");
const userchatModel = require("../../models/chat/userchatModel");

const router = express.Router();

//get a chat record by chat id
router.get("/chats/:chatId", async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const result = await chatModel.findOne({ _id: chatId });

    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

//post a chat, for the friend user, send a chat by postman
router.post("/chats/:chatId/add/:senderId/:receiverId", async (req, res) => {
  try {
    const senderId = req.params.senderId;
    const receiverId = req.params.receiverId;
    const chatId = req.params.chatId;
    const text = req.body.text;
    const chat = await chatModel.findOne({ _id: chatId });

    const newMessage = { senderId, text, createdAt: Date.now() };
    chat.messages.push(newMessage);
    chat.save();

    var ObjectId = require("mongodb").ObjectId;
    var o_chatId = new ObjectId(chatId);

    //对话双方的userchat里的chats都更新
    await userchatModel.updateOne(
      { userId: senderId, "chats.chatId": o_chatId },
      { $set: { "chats.$.lastMessage": text, "chats.$.updatedAt": Date.now() } }
    );

    await userchatModel.updateOne(
      { userId: receiverId, "chats.chatId": o_chatId },
      { $set: { "chats.$.lastMessage": text, "chats.$.updatedAt": Date.now() } }
    );

    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
