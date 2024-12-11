import { Checkbox, Drawer } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import DraftsIcon from "@mui/icons-material/Drafts";
import ReportIcon from "@mui/icons-material/Report";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import React, { useEffect, useState, useContext } from "react";
import EmailDetail from "./EmailDetail";
import axios from "axios";
import { themeContext } from "../../App.js";

export default function EmailItem({
  selectedEmails,
  setSelectedEmails,
  type,
  email,
  getEmailData,
  labeltype,
}) {
  let url = process.env.REACT_APP_baseURL;
  const [showOptions, setShowOptions] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [time, setTime] = useState("");
  const { theme, toggleTheme } = useContext(themeContext);

  const toggleDrawer = (flag) => {
    setOpenDrawer(flag);
  };

  const toggleStar = async (id) => {
    const result = await axios.post(url + "/emails/starred", {
      id: id,
      starred: !email.starred,
    });
    if (result.data === "success") {
      getEmailData();
    }
  };

  const selectEmail = (id) => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails((prev) => prev.filter((id) => id != id));
    } else {
      setSelectedEmails((prev) => [...prev, id]);
    }
  };

  const moveToTrash = async (e) => {
    e.stopPropagation();
    const result = await axios.post(url + "/emails/trash", [email._id]);
    if (result.data === "success") {
      getEmailData();
    }
  };

  const toggleRead = async (e) => {
    e.stopPropagation();
    const result = await axios.post(url + "/emails/readOne", {
      id: email._id,
      read: !email.read,
    });
    if (result.data === "success") {
      getEmailData();
    }
  };

  const moveToSpam = async (e) => {
    e.stopPropagation();
    const result = await axios.post(url + "/emails/spam", [email._id]);
    if (result.data === "success") {
      getEmailData();
    }
  };

  const getTimeHandle = () => {
    const createdTime = new Date(email.createdAt);
    let hh = createdTime.getHours();
    let mm = createdTime.getMinutes();

    if (hh < 10) {
      hh = "0" + hh;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    setTime(hh + ":" + mm);
  };

  useEffect(() => {
    getTimeHandle();
  }, []);

  return (
    <>
      <div
        className="email-item"
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        style={
          email.read && theme === "light"
            ? { backgroundColor: "white" }
            : !email.read && theme === "light"
            ? { backgroundColor: "#F2F2F2" }
            : email.read && theme === "dark"
            ? { backgroundColor: "#404261" }
            : { backgroundColor: "rgba(230, 230, 241,0.2)" }
        }
      >
        <div className="item-left">
          <Checkbox
            size="small"
            checked={selectedEmails.includes(email._id)}
            onChange={() => selectEmail(email._id)}
          />
          <button onClick={() => toggleStar(email._id)}>
            <StarOutlineIcon
              className="star-icon"
              style={
                email.starred === true ? { color: "orange" } : { color: "gray" }
              }
            />
          </button>
        </div>
        <div className="main-part" onClick={() => toggleDrawer(true)}>
          <div className="item-middle">
            <img src={email.img} alt="" />
            <p className="sender">{email.sender}</p>
            <p className="subject">{email.subject}</p>
          </div>
          <div className="item-right">
            {showOptions ? (
              <div className="more-options">
                {type === "trash" || (
                  <button>
                    <DeleteIcon
                      className="more-icon"
                      onClick={(e) => moveToTrash(e)}
                    />
                  </button>
                )}

                <button onClick={(e) => toggleRead(e)}>
                  {email.read ? (
                    <DraftsIcon className="more-icon" />
                  ) : (
                    <MarkunreadIcon className="more-icon" />
                  )}
                </button>
                <button onClick={(e) => moveToSpam(e)}>
                  <ReportIcon className="more-icon" />
                </button>
              </div>
            ) : (
              <div className="lable-time">
                <div className="labels">
                  {email.labels?.map((label, index) => (
                    <div
                      className="label"
                      key={index}
                      style={
                        label === "personal"
                          ? {
                              backgroundColor: "green",
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              marginRight: "12px",
                            }
                          : label === "company"
                          ? {
                              backgroundColor: "purple",
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              marginRight: "12px",
                            }
                          : label === "important"
                          ? {
                              backgroundColor: "orange",
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              marginRight: "12px",
                            }
                          : {
                              backgroundColor: "red",
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              marginRight: "12px",
                            }
                      }
                    ></div>
                  ))}
                </div>
                <div className="time">{time}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Drawer
        open={openDrawer}
        anchor="right"
        onClose={() => toggleDrawer(false)}
      >
        <div style={{ width: "800px" }}>
          <EmailDetail
            toggleDrawer={toggleDrawer}
            email={email}
            getEmailData={getEmailData}
            type={type}
            labeltype={labeltype}
          />
        </div>
      </Drawer>
    </>
  );
}
