import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleIcon from "@mui/icons-material/Circle";
import EmailIcon from "@mui/icons-material/Email";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import TitleIcon from "@mui/icons-material/Title";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SecurityIcon from "@mui/icons-material/Security";
import { useState } from "react";
import "../style/Sidebar.scss";
import { themeContext } from "../App.js";

export default function Sidebar() {
  const [dbOpen, setDbOpen] = useState(true);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [feOpen, setFeOpen] = useState(false);
  const [chartsOpen, setChartsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useContext(themeContext);
  // const [selected, setSelected] = useState(0);

  const handleMouseInDrawerOpen = () => {
    setSidebarOpen(true);
  };
  const handleMouseInDrawerClose = () => {
    setSidebarOpen(false);
  };

  // const selectHandle = (id) => {
  //   setSelected(id);
  // };

  // useEffect(() => {
  //   localStorage.setItem("selected", JSON.stringify(selected));
  // }, [selected]);


  return (
    <div
      className={`sidebar ${theme}`}
      onMouseEnter={() => handleMouseInDrawerOpen()}
      onMouseLeave={() => handleMouseInDrawerClose()}
    >
      <div className={sidebarOpen ? "top" : "top-collapse"}>
        <a className="logo">
          <Link
            to="/dashboards/analytics"
            style={{ textDecoration: "none", color: "#696cff" }}
          >
            <h5>sneat</h5>
          </Link>
        </a>
      </div>
      <div className="main">
        <ul className="sidebar-ul">
          <li>
            <div className="dashboard-item">
              <div
                className={`dashboard-title ${theme}`}
                onClick={() => {
                  setDbOpen(!dbOpen);
                }}
              >
                <HomeIcon className={`icon ${theme}`} />
                {sidebarOpen && (
                  <div className="listItem">
                    <span className={`listRow ${theme}`}>Dashboard</span>
                    <span
                      style={{
                        fontSize: "13px",
                        backgroundColor: "red",
                        padding: "0 6px",
                        borderRadius: "16px",
                        color: "white",
                      }}
                    >
                      New
                    </span>
                    {theme === "light" && (
                      <ChevronRightIcon
                        className={
                          dbOpen ? "toggle-btn open icon" : "toggle-btn icon"
                        }
                      />
                    )}
                    {theme === "dark" && (
                      <ChevronRightIcon
                        className={
                          dbOpen
                            ? "toggle-btn open icon dark"
                            : "toggle-btn icon dark"
                        }
                      />
                    )}
                  </div>
                )}
              </div>
              <div
                className={
                  dbOpen ? "dashboard-content open" : "dashboard-content"
                }
              >
                {sidebarOpen && (
                  <ul
                    style={{ listStyle: "none", margin: "0", padding: "0" }}
                    className="sublistItem-list"
                  >
                    <li
                      className={`sublistItem-item ${theme}`}
                      // onClick={() => selectHandle(1)}
                    >
                      <a
                        href="/dashboards/analytics"
                        className={`listRow ${theme}`}
                      >
                        <span>
                          <CircleIcon className="circle-icon icon" />
                        </span>
                        <Link
                          to="/dashboards/analytics"
                          className={`listRow ${theme}`}
                        >
                          Analytics
                        </Link>
                      </a>
                    </li>
                    <li
                      className={`sublistItem-item ${theme}`}
                      // onClick={() => selectHandle(2)}
                    >
                      <a href="" className={`listRow ${theme}`}>
                        <span>
                          <CircleIcon className="circle-icon icon" />
                        </span>
                        <Link
                          to="/dashboards/crm"
                          className={`listRow ${theme}`}
                        >
                          CRM
                        </Link>
                      </a>
                    </li>
                    <li
                      className={`sublistItem-item ${theme}`}
                    >
                      <a href="" className={`listRow ${theme}`}>
                        <span>
                          <CircleIcon className="circle-icon icon" />
                        </span>
                        <Link
                          to="/dashboards/ecommerce"
                          className={`listRow ${theme}`}
                        >
                          eCommerce
                        </Link>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </li>

          {theme === "light" && (
            <p className={sidebarOpen ? "title" : "title-collapse"}>
              <hr
                className={
                  sidebarOpen ? "divider-line" : "divider-line-collapse"
                }
              />
              {sidebarOpen && <span>APPS & PAGES</span>}
            </p>
          )}
          {theme === "dark" && (
            <p className={sidebarOpen ? "title dark" : "title-collapse dark"}>
              <hr
                className={
                  sidebarOpen
                    ? "divider-line dark"
                    : "divider-line-collapse dark"
                }
              />
              {sidebarOpen && <span>APPS & PAGES</span>}
            </p>
          )}

          <li
            className={`email nav-option ${theme}`}
          >
            <a href="/apps/email">
              <div>
                <EmailIcon className={`icon ${theme}`} />
                <Link to="/apps/email" className="listItem">
                  {sidebarOpen && (
                    <span className={`listRow ${theme}`}>Email</span>
                  )}
                </Link>
              </div>
            </a>
          </li>
          <li
            className={`chat nav-option ${theme}`}
            // onClick={() => selectHandle(5)}
          >
            <a href="">
              <div>
                <ChatBubbleIcon className={`icon ${theme}`} />
                <Link to="/apps/chat" className="listItem">
                  {sidebarOpen && (
                    <span className={`listRow ${theme}`}>Chat</span>
                  )}
                </Link>
              </div>
            </a>
          </li>
          <li
            className={`calendar nav-option ${theme}`}
            // onClick={() => selectHandle(6)}
          >
            <a href="">
              <div>
                <CalendarMonthIcon className={`icon ${theme}`} />
                {sidebarOpen && (
                  <span className={`listRow ${theme}`}>Calendar</span>
                )}
              </div>
            </a>
          </li>

          <li>
            <div className="invoice-item">
              <div
                className={`invoice-title ${theme}`}
                onClick={() => {
                  setInvoiceOpen(!invoiceOpen);
                }}
              >
                <div className="icon-name">
                  <ReceiptIcon className="icon" />
                </div>
                {sidebarOpen && (
                  <div className="title-name-text">
                    <span className={`listRow ${theme}`}>Invoice</span>
                    <ChevronRightIcon
                      className={
                        invoiceOpen ? "toggle-btn open icon" : "toggle-btn icon"
                      }
                    />
                  </div>
                )}
              </div>
              <div
                className={
                  invoiceOpen ? "invoice-content open" : "invoice-content"
                }
              >
                {sidebarOpen && (
                  <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                    <li>
                      <a href="">
                        <span className={`listRow ${theme}`}>
                          <CircleIcon className="circle-icon icon" />
                        </span>
                        <span className={`listRow ${theme}`}>List</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className={`listRow ${theme}`}>
                          <CircleIcon className="circle-icon icon" />
                        </span>
                        <span className={`listRow ${theme}`}>Preview</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className={`listRow ${theme}`}>
                          <CircleIcon className="circle-icon icon" />
                        </span>
                        <span className={`listRow ${theme}`}>Edit</span>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </li>
          <li>
            <div className="user-item">
              <div
                className={`user-title ${theme}`}
                onClick={() => {
                  setUserOpen(!userOpen);
                }}
              >
                <div className="icon-name">
                  <PersonIcon className="icon" />
                </div>
                {sidebarOpen && (
                  <div className="title-name-text">
                    <span className={`listRow ${theme}`}>User</span>
                    <ChevronRightIcon
                      className={
                        userOpen ? "toggle-btn open icon" : "toggle-btn icon"
                      }
                    />
                  </div>
                )}
              </div>
              <div className={userOpen ? "user-content open" : "user-content"}>
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <li>
                    <a href="">
                      <span className={`listRow ${theme}`}>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      <span className={`listRow ${theme}`}>List</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className={`listRow ${theme}`}>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      <span className={`listRow ${theme}`}>View</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {theme === "light" && (
            <p className={sidebarOpen ? "title" : "title-collapse"}>
              <hr
                className={
                  sidebarOpen ? "divider-line" : "divider-line-collapse"
                }
              />
              {sidebarOpen && <span>USER INTERFACE</span>}
            </p>
          )}
          {theme === "dark" && (
            <p className={sidebarOpen ? "title dark" : "title-collapse dark"}>
              <hr
                className={
                  sidebarOpen
                    ? "divider-line dark"
                    : "divider-line-collapse dark"
                }
              />
              {sidebarOpen && <span>USER INTERFACE</span>}
            </p>
          )}
          <li className={`typography nav-option ${theme}`}>
            <a href="">
              <div>
                <TitleIcon className={`icon ${theme}`} />
                {sidebarOpen && (
                  <span className={`listRow ${theme}`}>Typography</span>
                )}
              </div>
            </a>
          </li>
          <li className={`icons nav-option ${theme}`}>
            <a href="">
              <div>
                <InsertEmoticonIcon className={`icon ${theme}`} />
                {sidebarOpen && (
                  <span className={`listRow ${theme}`}>Icons</span>
                )}
              </div>
            </a>
          </li>
          {theme === "light" && (
            <p className={sidebarOpen ? "title" : "title-collapse"}>
              <hr
                className={
                  sidebarOpen ? "divider-line" : "divider-line-collapse"
                }
              />
              {sidebarOpen && <span>FORMS & TABLES</span>}
            </p>
          )}
          {theme === "dark" && (
            <p className={sidebarOpen ? "title dark" : "title-collapse dark"}>
              <hr
                className={
                  sidebarOpen
                    ? "divider-line dark"
                    : "divider-line-collapse dark"
                }
              />
              {sidebarOpen && <span>FORMS & TABLES</span>}
            </p>
          )}
          <li>
            <div className="formelements-item">
              <div
                className={`formelements-title ${theme}`}
                onClick={() => {
                  setFeOpen(!feOpen);
                }}
              >
                <div className="formelements-name">
                  <FilePresentIcon className="icon" />
                </div>
                {sidebarOpen && (
                  <div className="formelements-name-text">
                    <span className={`listRow ${theme}`}>Form Elements</span>
                    <ChevronRightIcon
                      className={
                        feOpen ? "toggle-btn open icon" : "toggle-btn icon"
                      }
                    />
                  </div>
                )}
              </div>
              <div
                className={
                  feOpen ? "formelements-content open" : "formelements-content"
                }
              >
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <li>
                    <a href="">
                      <span className={`listRow ${theme}`}>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      <span className={`listRow ${theme}`}>Text</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className={`listRow ${theme}`}>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      <span className={`listRow ${theme}`}>Select</span>
                    </a>
                  </li>
                  {/* <li>
                    <a href="">
                      <span className={`listRow ${theme}`}>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      <span className={`listRow ${theme}`}>Checkbox</span>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="">
                      <span className={`listRow ${theme}`}>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      <span className={`listRow ${theme}`}>Radio</span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </li>
          <li className={`formlayouts nav-option ${theme}`}>
            <a href="">
              <div>
                <FilePresentIcon className={`icon ${theme}`} />
                {sidebarOpen && (
                  <span className={`listRow ${theme}`}>Form Layouts</span>
                )}
              </div>
            </a>
          </li>
          {/* {theme === "light" && (
            <p className={sidebarOpen ? "title" : "title-collapse"}>
              <hr
                className={
                  sidebarOpen ? "divider-line" : "divider-line-collapse"
                }
              />
              {sidebarOpen && <span>CHARTS & MAPS</span>}
            </p>
          )}
          {theme === "dark" && (
            <p className={sidebarOpen ? "title dark" : "title-collapse dark"}>
              <hr
                className={
                  sidebarOpen
                    ? "divider-line dark"
                    : "divider-line-collapse dark"
                }
              />
              {sidebarOpen && <span>CHARTS & MAPS</span>}
            </p>
          )}
          <li>
            <div className="charts-item">
              <div
                className={`charts-title ${theme}`}
                onClick={() => {
                  setChartsOpen(!chartsOpen);
                }}
              >
                <div className="charts-name">
                  <AssessmentIcon className="icon" />
                </div>
                {sidebarOpen && (
                  <div className="charts-name-text">
                    <span className={`listRow ${theme}`}>Charts</span>
                    <ChevronRightIcon
                      className={
                        chartsOpen ? "toggle-btn open icon" : "toggle-btn icon"
                      }
                    />
                  </div>
                )}
              </div>
              <div
                className={
                  chartsOpen ? "charts-content open" : "charts-content"
                }
              >
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      Apex
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      Recharts
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      ChartJS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className={`accesscontrol nav-option ${theme}`}>
            <a href="">
              <div>
                <SecurityIcon className={`icon ${theme}`} />
                {sidebarOpen && (
                  <span className={`listRow ${theme}`}>Access Control</span>
                )}
              </div>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
