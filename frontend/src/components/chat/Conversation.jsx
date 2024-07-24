import React, { useEffect, useState } from "react";

export default function Conversation({ chat }) {
  const [date, setDate] = useState("");

  const getDateHandle = () => {
    const date = new Date(chat.updatedAt);
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let hh = date.getHours();
    let mi = date.getMinutes();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (hh < 10) {
      hh = "0" + hh;
    }
    if (mi < 10) {
      mi = "0" + mi;
    }

    setDate(mm + "/" + dd+" "+hh+":"+mi);
  };

  useEffect(() => {
    getDateHandle();
  }, []);

  return (
    <div className="conversation">
      <div className="conversationImg-wrapper">
        <div className="conversationImg">
          <img src={chat.user.img} alt="" />
          <div className="status-wrapper">
            <div className="status" style={
                        chat.user.status === "online"
                          ? { backgroundColor: "green" }
                          : chat.user.status === "busy"
                          ? { backgroundColor: "red" }
                          : { backgroundColor: "gray" }
                      }></div>
          </div>
        </div>
      </div>
      <div className="conversationName">
        <span className="sender">{chat.user.name}</span>
        <div>
          {chat.lastMessage === "" ? (
            <p>{chat.user.about}</p>
          ) : (
            <p>{chat.lastMessage}</p>
          )}
        </div>
      </div>
      <div className="updateDate">{date}</div>
    </div>
  );
}
