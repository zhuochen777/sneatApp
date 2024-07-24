import React from "react";
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

export default function Sidebar() {
  const [dbOpen, setDbOpen] = useState(true);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [feOpen, setFeOpen] = useState(false);
  const [chartsOpen, setChartsOpen] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <a className="logo">
          <Link
            to="/dashboards/analytics"
            style={{ textDecoration: "none", color: "rgba(50, 71, 92, 0.87)" }}
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
                className="dashboard-title"
                onClick={() => {
                  setDbOpen(!dbOpen);
                }}
              >
                <HomeIcon className="icon" />
                Dashboard
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
                <ChevronRightIcon
                  className={
                    dbOpen ? "toggle-btn open icon" : "toggle-btn icon"
                  }
                />
              </div>
              <div
                className={
                  dbOpen ? "dashboard-content open" : "dashboard-content"
                }
              >
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <li>
                    <a href="/dashboards/analytics">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      <Link to="/dashboards/analytics">Analytics</Link>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      CRM
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      <Link to="/dashboards/ecommerce">eCommerce</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <p className="title">
            <hr />
            <span>APPS & PAGES</span>
          </p>
          <li className="email nav-option">
            <a href="">
              <div>
                <EmailIcon className="icon" />
                <Link to="/apps/email">Email</Link>
              </div>
            </a>
          </li>
          <li className="chat nav-option">
            <a href="">
              <div>
                <ChatBubbleIcon className="icon" />
                <Link to="/apps/chat">Chat</Link>
              </div>
            </a>
          </li>
          <li className="calendar nav-option">
            <a href="">
              <div>
                <CalendarMonthIcon className="icon" />
                <span>Calendar</span>
              </div>
            </a>
          </li>

          <li>
            <div className="invoice-item">
              <div
                className="invoice-title"
                onClick={() => {
                  setInvoiceOpen(!invoiceOpen);
                }}
              >
                <div className="icon-name">
                  <ReceiptIcon className="icon" />
                  Invoice
                </div>
                <ChevronRightIcon
                  className={
                    invoiceOpen ? "toggle-btn open icon" : "toggle-btn icon"
                  }
                />
              </div>
              <div
                className={
                  invoiceOpen ? "invoice-content open" : "invoice-content"
                }
              >
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      List
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      Preview
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      Edit
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      Add
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="user-item">
              <div
                className="user-title"
                onClick={() => {
                  setUserOpen(!userOpen);
                }}
              >
                <div className="icon-name">
                  <PersonIcon className="icon" />
                  User
                </div>
                <ChevronRightIcon
                  className={
                    userOpen ? "toggle-btn open icon" : "toggle-btn icon"
                  }
                />
              </div>
              <div className={userOpen ? "user-content open" : "user-content"}>
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      List
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      View
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <p className="title">
            <hr />
            <span>USER INTERFACE</span>
          </p>
          <li className="typography nav-option">
            <a href="">
              <div>
                <TitleIcon className="icon" />
                <span>Typography</span>
              </div>
            </a>
          </li>
          <li className="icons nav-option">
            <a href="">
              <div>
                <InsertEmoticonIcon className="icon" />
                <span>Icons</span>
              </div>
            </a>
          </li>
          <p className="title">
            <hr />
            <span>FORMS & TABLES</span>
          </p>
          <li>
            <div className="formelements-item">
              <div
                className="formelements-title"
                onClick={() => {
                  setFeOpen(!feOpen);
                }}
              >
                <div className="icon-name">
                  <FilePresentIcon className="icon" />
                  Form Elements
                </div>
                <ChevronRightIcon
                  className={
                    feOpen ? "toggle-btn open icon" : "toggle-btn icon"
                  }
                />
              </div>
              <div
                className={
                  feOpen ? "formelements-content open" : "formelements-content"
                }
              >
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      Text Field
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      Select
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      Checkbox
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <CircleIcon className="circle-icon icon" />
                      </span>
                      Radio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="formlayouts nav-option">
            <a href="">
              <div>
                <FilePresentIcon className="icon" />
                <span>Form Layouts</span>
              </div>
            </a>
          </li>
          <p className="title">
            <hr />
            <span>CHARTS & MISC</span>
          </p>
          <li>
            <div className="charts-item">
              <div
                className="charts-title"
                onClick={() => {
                  setChartsOpen(!chartsOpen);
                }}
              >
                <div className="icon-name">
                  <AssessmentIcon className="icon" />
                  Charts
                </div>
                <ChevronRightIcon
                  className={
                    chartsOpen ? "toggle-btn open icon" : "toggle-btn icon"
                  }
                />
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
          <li className="accesscontrol nav-option">
            <a href="">
              <div>
                <SecurityIcon className="icon" />
                <span>Access Control</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
