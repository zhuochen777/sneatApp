import React, { useEffect, useState, useRef, useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import { themeContext } from "../App.js";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar() {
  let userInfoDropdownRef = useRef();
  let themeModeDropdownRef = useRef();
  let navigate = useNavigate();
  const [userInfoOpen, setUserInfoOpen] = useState(false);
  const [themeModeOpen, setthemeModeOpen] = useState(false);
  const { theme, toggleTheme } = useContext(themeContext);

  const userInfoOpenHandle = () => {
    setUserInfoOpen(!userInfoOpen);
  };
  const themeModeOpenHandle = () => {
    setthemeModeOpen(!themeModeOpen);
  };

  const logoutHandle = () => {
    localStorage.clear();
    navigate("/");
  };

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
  useEffect(() => {
    let themeModeHandle = (e) => {
      if (!themeModeDropdownRef.current.contains(e.target))
        setthemeModeOpen(false);
    };

    document.addEventListener("mousedown", themeModeHandle);

    return () => {
      document.removeEventListener("mousedown", themeModeHandle);
    };
  });

  return (
    <div className={`navbar ${theme}`}>
      <div className="wrapper">
        <div className="search">
          <SearchIcon className={`icon ${theme}`} />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="items">
          <button className={`item ${theme}`}>
            <TranslateIcon className={`nav-icon ${theme}`} />
          </button>
          <div>
            <button
              className={`item ${theme}`}
              onClick={() => themeModeOpenHandle()}
            >
              {theme === "light" ? (
                <LightModeIcon className={`nav-icon ${theme}`} />
              ) : (
                <DarkModeIcon className={`nav-icon ${theme}`} />
              )}
            </button>
            {theme === "light" && (
              <div
                className={
                  themeModeOpen
                    ? "themeMode-options active"
                    : "themeMode-options inactive"
                }
                ref={themeModeDropdownRef}
              >
                <ul>
                  <li
                    onClick={() => {
                      toggleTheme("light");
                      themeModeOpenHandle();
                    }}
                  >
                    <LightModeIcon className={`nav-icon ${theme}`} />
                    <p>Light</p>
                  </li>
                  <li
                    onClick={() => {
                      toggleTheme("dark");
                      themeModeOpenHandle();
                    }}
                  >
                    <DarkModeIcon className={`nav-icon ${theme}`} />
                    <p>Dark</p>
                  </li>
                </ul>
              </div>
            )}
            {theme === "dark" && (
              <div
                className={
                  themeModeOpen
                    ? "themeMode-options active dark"
                    : "themeMode-options inactive dark"
                }
                ref={themeModeDropdownRef}
              >
                <ul>
                  <li
                    className={`theme-option ${theme}`}
                    onClick={() => {
                      toggleTheme("light");
                      themeModeOpenHandle();
                    }}
                  >
                    <LightModeIcon className="nav-icon" />
                    <p>Light</p>
                  </li>
                  <li
                    className={`theme-option ${theme}`}
                    onClick={() => {
                      toggleTheme("dark");
                      themeModeOpenHandle();
                    }}
                  >
                    <DarkModeIcon className="nav-icon" />
                    <p>Dark</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className={`item ${theme}`}>
            <AppsIcon className={`nav-icon ${theme}`} />
          </button>
          <button className={`item ${theme}`} style={{ position: "relative" }}>
            <NotificationsIcon className={`nav-icon ${theme}`} />
            <div
              className="notifi-counter"
              style={{ position: "absolute", top: "10px", right: "10px" }}
            ></div>
          </button>
          <div
            className={`item ${theme}`}
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => userInfoOpenHandle()}
          >
            <img
              src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png"
              alt="avatar-img"
              className="avatar"
            />
            <div
              className={`status ${theme}`}
              style={{ position: "absolute", bottom: "5px", right: "5px" }}
            >
              <div className="status-inner"></div>
            </div>
          </div>
          {theme === "light" && (
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
                    <h6>
                      {JSON.parse(localStorage.getItem("chat-app-user")).name}
                    </h6>
                    <p>
                      {JSON.parse(localStorage.getItem("chat-app-user")).email}
                    </p>
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
                <li
                  onClick={() => {
                    logoutHandle();
                  }}
                >
                  <LogoutIcon />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
          {theme === "dark" && (
            <div
              className={
                userInfoOpen
                  ? "user-options active dark"
                  : "user-options inactive dark"
              }
              ref={userInfoDropdownRef}
            >
              <ul>
                <div className={`options-top ${theme}`}>
                  <div className="profile-pic">
                    <Avatar
                      alt="John Doe"
                      src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png"
                    />
                  </div>
                  <div className="profile-info">
                    <h6>
                      {JSON.parse(localStorage.getItem("chat-app-user")).name}
                    </h6>
                    <p>
                      {JSON.parse(localStorage.getItem("chat-app-user")).email}
                    </p>
                  </div>
                </div>
                <hr />
                <li className="user-option-item">
                  <PersonIcon className={`icon ${theme}`} />
                  <p>My Profile</p>
                </li>
                <li className="user-option-item">
                  <SettingsIcon className={`icon ${theme}`} />
                  <p>Settings</p>
                </li>
                <li className="user-option-item">
                  <AttachMoneyIcon className={`icon ${theme}`} />
                  <p>Pricing</p>
                </li>
                <li className="user-option-item">
                  <HelpIcon className={`icon ${theme}`} />
                  <p>FAQ</p>
                </li>
                <hr />
                <li
                  className="user-option-item"
                  onClick={() => {
                    logoutHandle();
                  }}
                >
                  <LogoutIcon className={`icon ${theme}`} />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
