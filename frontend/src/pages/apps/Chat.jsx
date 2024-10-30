import React, { useEffect, useState, useContext, useRef } from "react";
import "../../style/chat/Chat.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchIcon from "@mui/icons-material/Search";
import Conversation from "../../components/chat/Conversation";
import Chattop from "../../components/chat/Chattop";
import Message from "../../components/chat/Message";
import MicIcon from "@mui/icons-material/Mic";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Button } from "@mui/material";
import { Drawer } from "@mui/material";
import LoginUserDetails from "../../components/chat/LoginUserDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//tables in database

// 1. user table
// {id, img, name,status, position,about,email,phone,avai}

// 2. userChats  table
// {id, userId, chats[{chatId, receiverId,lastMessage,updatedAt}]} 对话双方共用同一个chatId
// chats default []

// 3. chats table
// {id,messages[{senderId,text,createdAt}],createdAt} 对话时同一个chat id创建新的messages里面的元素
// messages default []

export default function Chat() {
  //create current user and other receivers in database manually
  // let currentUserId = "668caed44d8961612aeace6e";
  // after setting process.env., need to restart IDE

  // let currentUserId = process.env.REACT_APP_currentUserId;
  let url = process.env.REACT_APP_baseURL;

  const [currentUserId, setCurrentUserId] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [chats, setChats] = useState([]); //chats array in userchats
  const [selectedChatId, setSelectedChatId] = useState("");
  const [currentChat, setCurrentChat] = useState({}); //find a record in chats
  const [messages, setMessages] = useState([]);
  const [receiverId, setReceiverId] = useState("");
  const [value, setValue] = useState("");
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const getCurrentUserId = async () => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    } else {
      let user = await JSON.parse(localStorage.getItem("chat-app-user"));
      setCurrentUserId(user._id);
    }
  };

  const getCurrentUser = async () => {
    const result = await axios.get(url + `/users/${currentUserId}`);
    setCurrentUser(result.data);
  };

  const getChats = async () => {
    const result = await axios.get(url + `/userchats/${currentUserId}`);
    setChats(result.data);
  };

  const selectedChatHandle = async (chatId) => {
    setSelectedChatId(chatId);
    const chat = chats.find((chat) => chat.chatId === chatId);
    setReceiverId(chat.receiverId);
    const result = await axios.get(url + `/chats/${chatId}`);
    setCurrentChat(result.data);
    setMessages(currentChat.messages);
  };

  const inputValueHandle = (e) => {
    setValue(e.target.value);
  };

  const submitHandle = async () => {
    if (value === "") return;
    const result = await axios.post(
      url + `/chats/${selectedChatId}/add/${currentUserId}/${receiverId}`,
      { text: value }
    );
    if (result.data === "success") {
      getChats();
    }
    setValue("");
    const result2 = await axios.get(url + `/chats/${selectedChatId}`);
    setCurrentChat(result2.data);
    setMessages(currentChat.messages);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const searchHandle = (e) => {
    setInputText(e.target.value);
  };

  const toggleDrawer = (flag) => {
    setOpen(flag);
  };

  useEffect(() => {
    if (currentUserId) {
      getCurrentUser();
      getChats();
    }
  }, [currentUserId, currentUser]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    getCurrentUserId();
  }, []);

  const filteredChats = chats.filter((c) =>
    c.user.name.toLowerCase().includes(inputText.toLowerCase())
  );
  const currentUserStatus = currentUser.status;

  return (
    <>
      <div className="chat">
        <Sidebar />
        <div className="container">
          <Navbar />
          <div
            className="chat-wrapper"
            style={{ marginTop: "100px", marginBottom: "24px" }}
          >
            <div className="chatMenu">
              <div className="chatMenuWrapper">
                <div className="top">
                  <div className="avatar" onClick={() => toggleDrawer(true)}>
                    <img src={currentUser.img} alt="" />
                    <div className="status-wrapper">
                      <div
                        className="status"
                        style={
                          currentUser.status === "online"
                            ? { backgroundColor: "green" }
                            : currentUser.status === "busy"
                            ? { backgroundColor: "red" }
                            : { backgroundColor: "gray" }
                        }
                      ></div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="input-inner">
                      <SearchIcon className="search-icon" />
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder="Search for contact..."
                          style={{ fontSize: "16px" }}
                          onChange={(e) => searchHandle(e)}
                          value={inputText}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <h6>Chats</h6>
                  {filteredChats.map((chat) => (
                    <div
                      className={
                        chat.chatId === selectedChatId
                          ? "conversationWrapper selected"
                          : "conversationWrapper"
                      }
                      key={chat.chatId}
                      onClick={() => selectedChatHandle(chat.chatId)}
                    >
                      <Conversation chat={chat} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="chatBox">
              {selectedChatId ? (
                <div className="chatBoxWrapper">
                  <div className="chatBoxTop">
                    <Chattop receiverId={receiverId} />
                  </div>
                  <div className="chatBoxMiddle">
                    {currentChat?.messages?.map((message) => (
                      <Message
                        own={message.senderId === currentUserId}
                        key={message?.createdAt}
                        message={message}
                        currentUser={currentUser}
                        receiverId={receiverId}
                      />
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                  <div className="chatBoxBottom">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        className="chatMessageInput"
                        placeholder="Type your message here..."
                        onChange={(e) => inputValueHandle(e)}
                        value={value}
                      />
                      <MicIcon className="input-icon" />
                      <AttachmentIcon className="input-icon attach" />
                      <Button
                        variant="contained"
                        className="input-btn"
                        onClick={submitHandle}
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="noChatWrapper">
                  <div className="chatIconWrapper">
                    <div className="outer">
                      <ChatBubbleOutlineIcon className="chatBubbleIcon" />
                    </div>
                  </div>
                  <div className="startConversation">
                    <p>Start Conversation</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="left">
        <div style={{ width: "370px" }}>
          <LoginUserDetails
            toggleDrawer={toggleDrawer}
            currentUserId={currentUserId}
            currentUserStatus={currentUserStatus}
          />
        </div>
      </Drawer>
    </>
  );
}
