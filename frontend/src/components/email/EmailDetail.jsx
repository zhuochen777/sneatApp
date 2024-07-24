import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MailLockIcon from "@mui/icons-material/MailLock";
import InboxIcon from "@mui/icons-material/Inbox";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../../style/email/EmailDetail.scss";

export default function EmailDetail({
  toggleDrawer,
  email,
  getEmailData,
  type,
  labeltype,
}) {
  let url = process.env.REACT_APP_baseURL;

  const labelItems = [
    { id: 1, name: "personal" },
    { id: 2, name: "company" },
    { id: 3, name: "private" },
    { id: 4, name: "important" },
  ];

  const [showThirdOption, setShowThirdOption] = useState(false);
  const [showFourthOption, setShowFourthOption] = useState(false);

  const closeDrawerHandle = () => {
    toggleDrawer(false);
  };

  const moveToTrash = async () => {
    const result = await axios.post(url + "/emails/trash", [email._id]);
    if (result.data === "success") {
      toggleDrawer(false);
      getEmailData();
    }
  };

  const moveToSpam = async () => {
    const result = await axios.post(url + "/emails/spam", [email._id]);
    if (result.data === "success") {
      toggleDrawer(false);
      getEmailData();
    }
  };

  //no change on data
  const moveToInbox = async () => {
    toggleDrawer(false);
    getEmailData();
  };

  const markAsRead = async () => {
    const result = await axios.post(url + "/emails/read", [email._id]);
    if (result.data === "success") {
      toggleDrawer(false);
      getEmailData();
    }
  };

  const toggleStar = async () => {
    const result = await axios.post(url + "/emails/starred", {
      id: email._id,
      starred: !email.starred,
    });
    if (result.data === "success") {
      toggleDrawer(true);
      getEmailData();
    }
  };

  const changeLabel = async (label) => {
    const result = await axios.post(url + "/emails/changeLabel", {
      label,
      emails: [email._id],
    });
    if (result.data === "success") {
      toggleDrawer(false);
      getEmailData();
    }
  };

  //when click elsewhere, dropdown list disappear
  let thirdOptionRef = useRef();
  let fourthOptionRef = useRef();

  const handleThirdClickOutside = (e) => {
    if (!thirdOptionRef.current?.contains(e.target)) {
      setShowThirdOption(false);
    }
  };
  const handleFourthClickOutside = (e) => {
    if (!fourthOptionRef.current?.contains(e.target)) {
      setShowFourthOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleThirdClickOutside);
    document.addEventListener("click", handleFourthClickOutside);

    return () => {
      document.removeEventListener("click", handleThirdClickOutside);
      document.removeEventListener("click", handleFourthClickOutside);
    };
  }, []);

  return (
    <div className="emailDetail">
      <div className="header">
        <div className="left">
          <button>
            <CloseIcon onClick={() => closeDrawerHandle()} />
          </button>
          <div className="subject-label">
            <p>{email.subject}</p>
            <div className="labels">
              {email.labels?.map((label) => (
                <div
                  className="label"
                  style={
                    label === "company"
                      ? {
                          color: "rgb(105, 108, 255)",
                          backgroundColor: "rgba(105, 108, 255, 0.16)",
                        }
                      : label === "private"
                      ? {
                          color: "rgb(255, 62, 29)",
                          backgroundColor: "rgba(255, 62, 29, 0.16)",
                        }
                      : label === "important"
                      ? {
                          color: "rgb(255, 171, 0)",
                          backgroundColor: "rgba(255, 171, 0, 0.16)",
                        }
                      : {
                          color: "rgb(113, 221, 55)",
                          backgroundColor: "rgba(113, 221, 55, 0.16)",
                        }
                  }
                >
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          <button>
            <KeyboardArrowLeftIcon />
          </button>
          <button>
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </div>
      <div className="actions">
        <div className="actions-content">
          <div className="left" style={{ position: "relative" }}>
            {email.trash === true || (
              <button onClick={() => moveToTrash()}>
                <DeleteIcon />
              </button>
            )}

            <button
              onClick={() => {
                markAsRead();
              }}
            >
              <EmailIcon />
            </button>
            <div ref={thirdOptionRef}>
              <button onClick={() => setShowThirdOption((prev) => !prev)}>
                <FolderIcon className="icon" />
              </button>
              {showThirdOption && (
                <ul className="thirdOption">
                  {type === "trash" ? (
                    <li onClick={() => moveToSpam()}>
                      <MailLockIcon />
                      <span>Spam</span>
                    </li>
                  ) : labeltype ? (
                    <li onClick={() => moveToInbox()}>
                      <InboxIcon />
                      <span>Inbox</span>
                    </li>
                  ) : (
                    <li onClick={() => moveToTrash()}>
                      <DeleteIcon />
                      <span>Trash</span>
                    </li>
                  )}
                </ul>
              )}
            </div>
            <div ref={fourthOptionRef}>
              <button onClick={() => setShowFourthOption((prev) => !prev)}>
                <LabelImportantIcon className="icon" />
              </button>
              {showFourthOption && (
                <ul className="fourthOption">
                  {labelItems.map((label) => (
                    <li key={label.id} onClick={() => changeLabel(label.name)}>
                      <div
                        className={
                          label.name === "private"
                            ? "circle private"
                            : label.name === "personal"
                            ? "circle personal"
                            : label.name === "important"
                            ? "circle important"
                            : "circle company"
                        }
                      ></div>
                      {label.name === "private" ? (
                        <span>Private</span>
                      ) : label.name === "personal" ? (
                        <span>Personal</span>
                      ) : label.name === "company" ? (
                        <span>Company</span>
                      ) : (
                        <span>Important</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="right">
            <button onClick={() => toggleStar()}>
              <StarOutlineIcon
                style={email.starred ? { color: "orange" } : { color: "grey" }}
              />
            </button>
            <button>
              <MoreVertIcon />
            </button>
          </div>
        </div>
      </div>
      <main>
        <div className="email-info">
          <div className="top">
            <div className="left">
              <div className="avatar">
                <img src={email.img} alt="" />
              </div>
              <div className="sender-detail">
                <p className="sender">{email.sender}</p>
                <p className="from">{email.from}</p>
              </div>
            </div>
            <div className="right">
              <div className="time">
                <span>
                  {new Date(email.createdAt).getDay() === 0 ? (
                    <span>Sun</span>
                  ) : new Date(email.createdAt).getDay() === 1 ? (
                    <span>Mon</span>
                  ) : new Date(email.createdAt).getDay() === 2 ? (
                    <span>Tue</span>
                  ) : new Date(email.createdAt).getDay() === 3 ? (
                    <span>Wed</span>
                  ) : new Date(email.createdAt).getDay() === 4 ? (
                    <span>Thu</span>
                  ) : new Date(email.createdAt).getDay() === 5 ? (
                    <span>Fri</span>
                  ) : (
                    <span>Sat</span>
                  )}
                </span>
                &nbsp;
                <span>
                  {new Date(email.createdAt).toLocaleString("default", {
                    month: "long",
                  })}
                </span>
                &nbsp;
                <span>{new Date(email.createdAt).getDate()}</span>&nbsp;
                <span>{new Date(email.createdAt).getFullYear()}</span>&nbsp;
                <span>
                  {new Date(email.createdAt).toLocaleString("default", {
                    timeStyle: "short",
                  })}
                </span>
              </div>
              <button>
                <MoreVertIcon />
              </button>
            </div>
          </div>
          <hr />
          <div className="main">{email.body}</div>
        </div>
        <div className="bottom">
          <div className="bottom-wrapper">
            <p>
              Click here to <span>Reply</span> or <span>Forward</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
