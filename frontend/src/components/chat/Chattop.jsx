import React, { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import ContactDetail from "./ContactDetail";
import { Drawer } from "@mui/material";

export default function Chattop({ receiverId }) {
  let url = process.env.REACT_APP_baseURL;
  const [receiver, setReceiver] = useState({});
  const [open,setOpen] = useState(false)

  const getReceiver = async () => {
    const result = await axios.get(url + `/users/${receiverId}`);
    setReceiver(result.data);
  };

  const toggleDrawer=(flag)=>{
    setOpen(flag)
  }

  useEffect(() => {
    getReceiver();
  }, [receiverId]);

  return (
    <>
      <div className="chattop">
        <div className="left" onClick={()=>toggleDrawer(true)}>
          <div className="avatar-wrapper">
            <img src={receiver.img} alt="" />
            <div className="status-wrapper">
              <div
                className="status"
                style={
                  receiver.status === "online"
                    ? { backgroundColor: "green" }
                    : receiver.status === "busy"
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "gray" }
                }
              ></div>
            </div>
          </div>
          <div className="intro-wrapper">
            <p className="sender">{receiver.name}</p>
            <p className="position">{receiver.position}</p>
          </div>
        </div>
        <div className="right">
          <CallIcon className="icon" />
          <VideoChatIcon className="icon" />
          <SearchIcon className="icon" />
          <MoreVertIcon className="icon" />
        </div>
      </div>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="right">
        <div style={{ width: "370px" }}>
          <ContactDetail toggleDrawer={toggleDrawer} receiver={receiver}/>
        </div>
      </Drawer>
    </>
  );
}
