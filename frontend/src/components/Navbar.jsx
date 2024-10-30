import React, { useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../style/Navbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import {useNavigate} from "react-router-dom"

export default function Navbar() {
  let userInfoDropdownRef = useRef();
  let navigate = useNavigate()
  const [userInfoOpen, setUserInfoOpen] = useState(false);

  const userInfoOpenHandle = () => {
    setUserInfoOpen(!userInfoOpen);
  };

  const logoutHandle=()=>{
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    let userInfoHandle = (e) => {
      if (!userInfoDropdownRef.current.contains(e.target))
        setUserInfoOpen(false);
    };

    document.addEventListener("mousedown", userInfoHandle);

    return () => {
      document.removeEventListener("mousedown", userInfoHandle);
    };
  });

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="items">
          <button className="item">
            <TranslateIcon className="nav-icon" />
          </button>
          <button className="item">
            <DarkModeIcon className="nav-icon" />
          </button>
          <button className="item">
            <AppsIcon className="nav-icon" />
          </button>
          <button className="item" style={{ position: "relative" }}>
            <NotificationsIcon className="nav-icon" />
            <div
              className="notifi-counter"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            ></div>
          </button>
          <div
            className="item"
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => userInfoOpenHandle()}
          >
            <img
              src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png"
              alt="avatar-img"
              className="avatar"
            />
            <div
              className="status"
              style={{ position: "absolute", bottom: "5px", right: "5px" }}
            >
              <div className="status-inner"></div>
            </div>
          </div>
          <div
            className={
              userInfoOpen ? "user-options active" : "user-options inactive"
            }
            ref={userInfoDropdownRef}
          >
            <ul>
              <div className="options-top">
                <div className="profile-pic">
                  <Avatar
                    alt="John Doe"
                    src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png"
                  />
                </div>
                <div className="profile-info">
                  <h6>John Doe</h6>
                  <p>admin@sneat.com</p>
                </div>
              </div>
              <hr />
              <li>
                <PersonIcon />
                <p>My Profile</p>
              </li>
              <li>
                <SettingsIcon />
                <p>Settings</p>
              </li>
              <li>
                <AttachMoneyIcon />
                <p>Pricing</p>
              </li>
              <li>
                <HelpIcon />
                <p>FAQ</p>
              </li>
              <hr />
              <li onClick={()=>{logoutHandle()}}>
                <LogoutIcon />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
