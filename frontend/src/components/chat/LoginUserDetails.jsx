import React, { useEffect, useState } from "react";
import "../../style/chat/LoginUserDetails.scss";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import axios from "axios";

export default function ContactDetail({ toggleDrawer, currentUserId ,currentUserStatus }) {
  let url = process.env.REACT_APP_baseURL;
  const [currentUser, setCurrentUser] = useState({});
  const [value, setValue] = useState(currentUserStatus);

  const getCurrentUser = async()=>{
    const result = await axios.get(url + `/users/${currentUserId}`);
    setCurrentUser(result.data)
  }

  const handleChange = async (event) => {
    setValue(event.target.value);
  };

  const updateUserStatus = async () => {
    await axios.post(url + `/users/status/${currentUserId}`, {
      status: value,
    });
  };

  const saveHandle = () => {
    updateUserStatus();
  };

  useEffect(()=>{
    getCurrentUser()
  }, [currentUser])


  return (
    <div className="contactDetail">
      <div className="close">
        <CloseIcon onClick={() => toggleDrawer(false)} />
      </div>
      <div className="top">
        <span className="avatar">
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
        </span>
        <div className="name-wrapper">
          <p className="name">{currentUser.name}</p>
          <p className="title">{currentUser.position}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="about">
          <p className="title">about</p>
          <textarea
            name="userAbout"
            id=""
            style={{
              width: "95%",
              height: "100px",
              fontSize: "16px",
              color: "rgba(50, 71, 92, 0.87)",
            }}
            defaultValue={currentUser.about}
          >
          </textarea>
        </div>
        <div className="personal">
          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              className="statusSetting"
            >
              status
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              className="statusSetting-detail"
            >
              <FormControlLabel
                value="online"
                control={<Radio />}
                label="Online"
              />
              <FormControlLabel value="busy" control={<Radio />} label="Busy" />
              <FormControlLabel
                value="offline"
                control={<Radio />}
                label="Offline"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="options">
          <div className="title">settings</div>
          <div className="options-detail">
            <p className="row switch">
              <div>
                <LabelImportantIcon className="icon" />
                <span>Two-step Verification</span>
              </div>
              <Switch defaultChecked />
            </p>
            <p className="row switch">
              <div>
                <PhoneIcon className="icon" />
                <span>Notification</span>
              </div>
              <Switch defaultChecked />
            </p>
            <p className="row">
              <InsertPhotoIcon className="icon" />
              <span>Invite Friends</span>
            </p>
            <p className="row">
              <DeleteIcon className="icon" />
              <span>Delete Account</span>
            </p>
          </div>
        </div>
        <Button variant="contained" style={{marginRight:"10px"}} onClick={saveHandle}>Save</Button>
        <Button variant="contained">Logout</Button>
      </div>
    </div>
  );
}
