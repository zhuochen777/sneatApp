import React, { useEffect,useState } from "react";
import axios from "axios"
import {format} from "timeago.js"

export default function Message({own, message,currentUser,receiverId}) {
  let url = process.env.REACT_APP_baseURL;
  const [receiver, setReceiver] = useState({})

  const getReceiver = async()=>{
    const result = await axios.get(url + `/users/${receiverId}`);
    setReceiver(result.data);
  }

  useEffect(()=>{
    getReceiver()
  },[])

  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className={own ? "messageTop own" : "messageTop"}>
          {own ? (
            <img className="messageImg" src={currentUser.img} alt="" />
          ) : (
            <img className="messageImg" src={receiver.img} alt="" />
          )}

          <p className={own ? "messageText own" : "messageText"}>
            {message.text}
          </p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
      </div>
    </>
  );
}
