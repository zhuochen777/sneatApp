import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CachedIcon from "@mui/icons-material/Cached";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import FolderIcon from "@mui/icons-material/Folder";
import LabelIcon from "@mui/icons-material/Label";
import ErrorIcon from "@mui/icons-material/Error";
import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  Typography,
  Box,
  styled,
  Checkbox,
  Button,
  Drawer,
} from "@mui/material";
import EmailDetail from "./EmailDetail";
import FormControlLabel from "@mui/material/FormControlLabel";
import EmailItem from "./EmailItem";
import MailLockIcon from "@mui/icons-material/MailLock";
import InboxIcon from "@mui/icons-material/Inbox";
import CircularProgress from "@mui/joy/CircularProgress";



export default function Emails() {
  let url = process.env.REACT_APP_baseURL;
  const { type, labeltype } = useParams();
  const [emails, setEmails] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [allchecked, setAllChecked] = useState(false);
  const [showThirdOption, setShowThirdOption] = useState(false);
  const [showFourthOption, setShowFourthOption] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputVal, setInputVal] = useState("")
  const labelItems = [
    { id: 1, name: "personal" },
    { id: 2, name: "company"},
    { id: 3, name: "private" },
    { id: 4, name: "important" },
  ];

  const getEmailsByType = async () => {
    const result = await axios.get(url + `/emails/${type}`);
    let emails = result.data;
    if (type === "starred") {
      emails = emails.filter((email) => email.trash != true);
    }   
    setEmails(emails);
  };

  const getEmailsByLabelType = async () => {
    const result = await axios.get(url + `/emails/label/${labeltype}`);
    let emails = result.data
    setEmails(emails);
  };

  const selectAllEmails = (e) => {
    setAllChecked(e.target.checked);

    if (e.target.checked) {
      const filteredEmails = emails.filter(email=>email.sender.toLowerCase().includes(inputVal.toLowerCase()))
      const selectedEmails = filteredEmails.map((email) => email._id);
      setSelectedEmails(selectedEmails);
    } else {
      setSelectedEmails([]);
    }
  };

  const moveEmailsToTrash = async () => {
    const result = await axios.post(url + "/emails/trash", selectedEmails);
    if (result.data === "success") {
      setSelectedEmails([]);
      setAllChecked(false);
      getEmailData();
      setShowThirdOption(false);
    }
  };

  const moveEmailsToSpam = async () => {
    const result = await axios.post(url + "/emails/spam", selectedEmails);
    if (result.data === "success") {
      setSelectedEmails([]);
      setAllChecked(false);
      getEmailData();
      setShowThirdOption(false);
    }
  };

  //moveEmailsToInbox will not trigger any change because its for emails with labels and in inbox (no need to change type to inbox any more)
  const moveEmailsToInbox = async () => {
    setSelectedEmails([]);
    setAllChecked(false);
    getEmailData();
    setShowThirdOption(false);
  };

  const markAsRead = async () => {
    const result = await axios.post(url + "/emails/read", selectedEmails);
    if (result.data === "success") {
      setSelectedEmails([]);
      setAllChecked(false);
      getEmailData();
    }
  };

  const changeLabel = async (label) => {
    const result = await axios.post(url + "/emails/changeLabel", {
      label,
      emails: selectedEmails,
    });
    if (result.data === "success") {
      setSelectedEmails([]);
      setAllChecked(false);
      getEmailData();
    }
  };

  const reloadHandle = async () => {
    setIsLoading(true);
    if (type) {
      try {
        const result = await axios.get(url + `/emails/${type}`);
        setEmails(result.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    if (labeltype) {
      try {
        const result = await axios.get(url + `/emails/label/${labeltype}`);
        setEmails(result.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getEmailData = () => {
    setSelectedEmails([]);
    setAllChecked(false);
    if (type) {
      getEmailsByType();
    }
    if (labeltype) {
      getEmailsByLabelType();
    }
  };

  useEffect(() => {
    getEmailData();
  }, [type, labeltype]);

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

  const filteredEmails = emails.filter(email=>email.sender.toLowerCase().includes(inputVal.toLowerCase()))

  return (
    <>
      <div className="email-search">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input type="text" placeholder="Search mail" val={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
      </div>
      <div className="selectAll">
        <div className="select">
          <Checkbox
            size="small"
            checked={allchecked || selectedEmails.length != 0}
            disabled={emails.length === 0}
            onChange={(e) => selectAllEmails(e)}
          />
          {allchecked || selectedEmails.length != 0 ? (
            <div className="left-options">
              {type === "trash" || (
                <button onClick={() => moveEmailsToTrash()}>
                  <DeleteIcon className="icon" />
                </button>
              )}

              <button
                onClick={() => {
                  markAsRead();
                }}
              >
                <MarkunreadIcon className="icon" />
              </button>
              <div ref={thirdOptionRef}>
                <button onClick={() => setShowThirdOption((prev) => !prev)}>
                  <FolderIcon className="icon" />
                </button>
                {showThirdOption && (
                  <ul className="thirdOption">
                    {type === "trash" ? (
                      <li onClick={() => moveEmailsToSpam()}>
                        <MailLockIcon />
                        <span>Spam</span>
                      </li>
                    ) : labeltype ? (
                      <li>
                        <InboxIcon onClick={() => moveEmailsToInbox()} />
                        <span>Inbox</span>
                      </li>
                    ) : (
                      <li onClick={() => moveEmailsToTrash()}>
                        <DeleteIcon />
                        <span>Trash</span>
                      </li>
                    )}
                  </ul>
                )}
              </div>
              <div ref={fourthOptionRef}>
                <button onClick={() => setShowFourthOption((prev) => !prev)}>
                  <LabelIcon className="icon" />
                </button>
                {showFourthOption && (
                  <ul className="fourthOption">
                    {labelItems.map((label) => (
                      <li key={label.id} onClick={()=>changeLabel(label.name)}>
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
          ) : (
            <></>
          )}
        </div>
        <div className="right-options">
          <button onClick={() => reloadHandle()}>
            <CachedIcon className="icon" />
          </button>
          <button>
            <MoreVertIcon className="icon" />
          </button>
        </div>
      </div>
      <div className="email-part">
        {isLoading ? (
          <div className="loading">
            <CircularProgress variant="soft" color="neutral" />
          </div>
        ) : (
          <></>
        )}

        {emails.length === 0 ? (
          <div className="noEmail">
            <p>
              <ErrorIcon className="icon" />
              <span className="noEmailText">No Mails Found</span>
            </p>
          </div>
        ) : (
          <div className="all-emails">
            {filteredEmails.map((email) => (
              <EmailItem
                key={email._id}
                email={email}
                selectedEmails={selectedEmails}
                setSelectedEmails={setSelectedEmails}
                type={type}
                labeltype={labeltype}
                getEmailData={getEmailData}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
