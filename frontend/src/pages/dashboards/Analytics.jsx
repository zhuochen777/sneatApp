// import React from "react";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../style/Analytics.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WalletIcon from "@mui/icons-material/Wallet";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgressbar } from "react-circular-progressbar";
import { Line as Linerc } from "rc-progress";
import "react-circular-progressbar/dist/styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar, Cell, ReferenceLine } from "recharts";
import { PieChart, Pie, Sector } from "recharts";
import { create } from "@mui/material/styles/createTransitions";
import Footer from "../../components/Footer";
import axios from "axios";
import zIndex from "@mui/material/styles/zIndex";

// const dataBox21 = [
//   {
//     name: "Jan",
//     pv: 24,
//   },
//   {
//     name: "Feb",
//     pv: 13,
//   },
//   {
//     name: "Mar",
//     pv: 98,
//   },
//   {
//     name: "Apr",
//     pv: 39,
//   },
//   {
//     name: "May",
//     pv: 48,
//   },
//   {
//     name: "Jun",
//     pv: 38,
//   },
//   {
//     name: "Jul",
//     pv: 43,
//   },
// ];

// const dataBox3 = [
//   {
//     name: "Jan",
//     2023: 18,
//     2022: -13,
//   },
//   {
//     name: "Feb",
//     2023: 7,
//     2022: -18,
//   },
//   {
//     name: "Mar",
//     2023: 15,
//     2022: -9,
//   },
//   {
//     name: "Apr",
//     2023: 29,
//     2022: -14,
//   },
//   {
//     name: "May",
//     2023: 18,
//     2022: -5,
//   },
//   {
//     name: "Jun",
//     2023: 12,
//     2022: -17,
//   },
//   {
//     name: "Jul",
//     2023: 9,
//     2022: -15,
//   },
// ];

// const dataBox42 = [
//   {
//     name: "M",
//     uv: 40,
//   },
//   {
//     name: "T",
//     uv: 30,
//   },
//   {
//     name: "W",
//     uv: 20,
//   },
//   {
//     name: "T",
//     uv: 27,
//   },
//   {
//     name: "F",
//     uv: 18,
//   },
//   {
//     name: "S",
//     uv: 23,
//   },
//   {
//     name: "S",
//     uv: 34,
//   },
// ];

// const dataBox5 = [
//   { name: "Decor", value:  40},
//   { name: "Fashion", value: 45 },
//   { name: "Electronic", value: 80 },
//   { name: "Sports", value: 20 },
// ];

const COLORS = [
  "rgb(3, 195, 236)",
  "rgb(113, 221, 55)",
  "rgb(105, 108, 255)",
  "rgb(133, 146, 163)",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// const dataBox61 = [
//   {
//     name: "Jan",
//     series1: 21,
//   },
//   {
//     name: "Feb",
//     series1: 30,
//   },
//   {
//     name: "Mar",
//     series1: 22,
//   },
//   {
//     name: "Apr",
//     series1: 42,
//   },
//   {
//     name: "May",
//     series1: 26,
//   },
//   {
//     name: "Jun",
//     series1: 35,
//   },
//   {
//     name: "Jul",
//     series1: 29,
//   },
// ];

// function createData(number, logoSrc, browser, visit, dataInPer, color) {
//   return { number, logoSrc, browser, visit, dataInPer, color };
// }

// const rowsBrowser = [
  // createData(
  //   1,
  //   "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/chrome.png",
  //   "Chrome",
  //   "8.92k",
  //   64.91,
  //   "rgb(113, 221, 55)"
  // ),
  // {
  //   number: 1,
  //   logoSrc: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/chrome.png",
  //   browser: "Chrome",
  //   visit: "8.92k",
  //   dataInPer: 64.91,
  //   color: "rgb(113, 221, 55)"
  // },
  // {
  //   number: 2,
  //   logoSrc: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/safari.png",
  //   browser: "Safari",
  //   visit: "1.29k",
  //   dataInPer: 19.03,
  //   color: "rgb(105, 108, 255)"
  // },
  // createData(
  //   2,
  //   "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/safari.png",
  //   "Safari",
  //   "1.29k",
  //   19.03,
  //   "rgb(105, 108, 255)"
  // ),
//   createData(
//     3,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/firefox.png",
//     "Firefox",
//     "328",
//     3.26,
//     "rgb(3, 195, 236)"
//   ),
//   createData(
//     4,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/edge.png",
//     "Edge",
//     "142",
//     3.99,
//     "rgb(255, 171, 0)"
//   ),
//   createData(
//     5,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/opera.png",
//     "Opera",
//     "88",
//     2.12,
//     "rgb(255, 62, 29)"
//   ),
//   createData(
//     6,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/brave.png",
//     "Brave",
//     "36",
//     1.06,
//     "rgb(3, 195, 236)"
//   ),
// ];
// const rowsOS = [
//   createData(
//     1,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/windows.png",
//     "Windows",
//     "475.26k",
//     61.5,
//     "rgb(113, 221, 55)"
//   ),
//   createData(
//     2,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/mac.png",
//     "Mac",
//     "89.12k",
//     15.67,
//     "rgb(105, 108, 255)"
//   ),
//   createData(
//     3,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/ubuntu.png",
//     "Ubuntu",
//     "38.68k",
//     5.82,
//     "rgb(3, 195, 236)"
//   ),
//   createData(
//     4,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/linux.png",
//     "Linux",
//     "30.27k",
//     5.03,
//     "rgb(255, 171, 0)"
//   ),
//   createData(
//     5,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/chrome.png",
//     "Chrome",
//     "8.34k",
//     3.25,
//     "rgb(255, 62, 29)"
//   ),
//   createData(
//     6,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/cent.png",
//     "Cent",
//     "2.25k",
//     1.76,
//     "rgb(3, 195, 236)"
//   ),
// ];

// const rowsCountry = [
//   createData(
//     1,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/usa.png",
//     "USA",
//     "87.24k",
//     38.12,
//     "rgb(113, 221, 55)"
//   ),
//   createData(
//     2,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/brazil.png",
//     "Brazil",
//     "42.69k",
//     28.23,
//     "rgb(105, 108, 255)"
//   ),
//   createData(
//     3,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/india.png",
//     "India",
//     "12.58k",
//     13.82,
//     "rgb(3, 195, 236)"
//   ),
//   createData(
//     4,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/australia.png",
//     "Australia",
//     "4.13k",
//     12.72,
//     "rgb(255, 171, 0)"
//   ),
//   createData(
//     5,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/china.png",
//     "China",
//     "2.21k",
//     7.11,
//     "rgb(255, 62, 29)"
//   ),
//   createData(
//     6,
//     "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/france.png",
//     "France",
//     "1.56k",
//     6.59,
//     "rgb(3, 195, 236)"
//   ),
// ];

export default function Analytics() {
  const [iepvalue, setIepValue] = useState("1");
  const handleChange = (event, newValue) => {
    setIepValue(newValue);
  };

  const [bocvalue, setBocValue] = useState("1");
  const bochandleChange = (event, newValue) => {
    setBocValue(newValue);
  };

  let url = process.env.REACT_APP_baseURL;
  const [dataBox21, setDataBox21] = useState([])
  const [dataBox3, setDataBox3] = useState([])
  const [dataBox42, setDataBox42] = useState([])
  const [dataBox5, setDataBox5] = useState([])
  const [dataBox61, setDataBox61] = useState([])
  const [rowsBrowser, setRowsBrowser] = useState([])
  const [rowsOS, setRowsOS] = useState([])
  const [rowsCountry, setRowsCountry] = useState([])
  const getBox21Data = async()=>{
    const {data} = await axios.get(url+"/box21list")
    setDataBox21(data)
  }
  const getBox3Data = async()=>{
    const {data} = await axios.get(url+"/box3list")
    setDataBox3(data)
  }
  const getBox42Data = async()=>{
    const {data} = await axios.get(url+"/box42list")
    setDataBox42(data)
  }
  const getBox5Data = async()=>{
    const {data} = await axios.get(url+"/box5list")
    setDataBox5(data)
  }
  const getBox61Data = async()=>{
    const {data} = await axios.get(url+"/box61list")
    setDataBox61(data)
  }
  const getRowsBrowserData = async()=>{
    const {data} = await axios.get(url+"/rowsBrowserlist")
    setRowsBrowser(data)
  }
  const getRowsOSData = async()=>{
    const {data} = await axios.get(url+"/rowsOSlist")
    setRowsOS(data)
  }
  const getRowsCountryData = async()=>{
    const {data} = await axios.get(url+"/rowsCountrylist")
    setRowsCountry(data)
  }
  useEffect(()=>{
    getBox21Data()
    getBox3Data()
    getBox42Data()
    getBox5Data()
    getBox61Data()
    getRowsBrowserData()
    getRowsOSData()
    getRowsCountryData()
  },[])

  return (
    <div className="analytics">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="analytics-boxes" style={{ marginTop: "100px" }}>
          <div className="row1">
            <div className="box1">
              <div className="left">
                <h5>Congratulations John! 🎉</h5>
                <p>You have done 72% more sales today.</p>
                <p className="check-badge">
                  Check your new badge in your profile.
                </p>
                <Button variant="outlined" className="badge-btn">
                  View Badges
                </Button>
              </div>
              <div className="right">
                <img
                  src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/illustration-john-light.png"
                  alt="john-img"
                />
              </div>
            </div>
            <div className="box2">
              <div className="box21">
                <div className="boxInfo">
                  <p>Order</p>
                  <h5>276k</h5>
                </div>
                <div className="chartInfo">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={dataBox21}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="rgb(113, 221, 55)"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="box22">
                <div style={{ padding: "20px 20px 16px" }}>
                  <div className="top">
                    <div>
                      <img
                        src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/stats-vertical-wallet.png"
                        alt=""
                      />
                    </div>
                    <button>
                      <MoreVertIcon fontSize="small" />
                    </button>
                  </div>
                  <div className="bottom">
                    <p className="info">Sales</p>
                    <h5>$4,679</h5>
                    <div>
                      <ArrowUpwardIcon
                        style={{
                          width: "16px",
                          height: "16px",
                          marginRight: "0.25rem",
                        }}
                      />
                      <p>28.14%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="box3">
              <div className="left">
                <div className="chartTitle">
                  <h6>Total Revenue</h6>
                </div>
                <div className="chartDetail">
                  <ResponsiveContainer>
                    <BarChart
                      data={dataBox3}
                      margin={{
                        top: 40,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <ReferenceLine y={0} stroke="#000" />
                      <Bar dataKey="2023" fill="rgba(105, 108, 255, 1)" />
                      <Bar dataKey="2022" fill="rgba(3, 195, 236, 1)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="right">
                <Button variant="outlined" className="btn">
                  2024
                  <KeyboardArrowDownIcon />
                </Button>
                <div className="circularBar">
                  <CircularProgressbar value={78} text="78% Growth" />
                </div>
                <p className="title">62% Company Growth</p>
                <div className="bottom">
                  <div className="money">
                    <div className="money-icon">
                      <AttachMoneyIcon />
                    </div>
                    <div>
                      <p className="year">2024</p>
                      <p className="growthAmount">$32.5k</p>
                    </div>
                  </div>
                  <div className="wallet">
                    <div className="wallet-icon">
                      <WalletIcon />
                    </div>
                    <div>
                      <p className="year">2024</p>
                      <p className="growthAmount">$32.5k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box4">
              <div className="topBoxes">
                <div className="box41">
                  <div style={{ padding: "20px 20px 16px" }}>
                    <div className="top">
                      <div>
                        <img
                          src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/stats-vertical-paypal.png"
                          alt=""
                        />
                      </div>
                      <button>
                        <MoreVertIcon fontSize="small" />
                      </button>
                    </div>
                    <div className="bottom">
                      <p className="info">Payments</p>
                      <h5>$2,468</h5>
                      <div>
                        <ArrowDownwardIcon
                          style={{
                            width: "16px",
                            height: "16px",
                            marginRight: "0.25rem",
                          }}
                        />
                        <p>14.82%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box42">
                  <div className="boxInfo">
                    <p>Revenue</p>
                    <h5>425k</h5>
                  </div>
                  <div className="chartInfo">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart width={150} height={40} data={dataBox42}>
                        <XAxis dataKey="name" />
                        <Bar dataKey="uv" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="box43">
                <div className="info">
                  <div className="info-top">
                    <h6>Profit Report</h6>
                    <div className="year">
                      <span>Year 2024</span>
                    </div>
                  </div>
                  <div className="info-bottom">
                    <div className="percent">
                      <ArrowUpwardIcon
                        style={{
                          color: "rgb(113, 221, 55)",
                          width: "22px",
                          height: "22px",
                        }}
                      />
                      <p>68.2%</p>
                    </div>
                    <h5>$84,686k</h5>
                  </div>
                </div>
                <div className="chartInfo">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={dataBox21}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="rgb(113, 221, 55)"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="box5">
              <div className="top">
                <div className="content">
                  <span className="statistics">Order Statistics</span>
                  <span className="sales">42.82k Total Sales</span>
                </div>
                <div className="action">
                  <button>
                    <MoreVertIcon />
                  </button>
                </div>
              </div>
              <div className="bottom">
                <div className="orders">
                  <div className="content">
                    <h4>8,258</h4>
                    <p>Total Orders</p>
                  </div>
                  <div
                    className="chartInfo"
                    style={{
                      height: "112px",
                      width: "112px",
                      fontSize: "12px",
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart width={400} height={400}>
                        <Pie
                          data={dataBox5}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={55}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {dataBox5.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="order-list">
                  <div className="order-item">
                    <div className="icon icon-elec">
                      <SettingsCellIcon className="icon-item" />
                    </div>
                    <div className="order-item-detail">
                      <div>
                        <p className="title">Electronic</p>
                        <p className="examples">Mobile, Earbuds, TV</p>
                      </div>
                      <p>82.5k</p>
                    </div>
                  </div>
                  <div className="order-item">
                    <div className="icon icon-fash">
                      <SettingsCellIcon className="icon-item" />
                    </div>
                    <div className="order-item-detail">
                      <div>
                        <p className="title">Fashion</p>
                        <p className="examples">Tshirt, Jeans, Shoes</p>
                      </div>
                      <p>23.8k</p>
                    </div>
                  </div>
                  <div className="order-item">
                    <div className="icon icon-deco">
                      <SettingsCellIcon className="icon-item" />
                    </div>
                    <div className="order-item-detail">
                      <div>
                        <p className="title">Decor</p>
                        <p className="examples">Finr Art, Dining</p>
                      </div>
                      <p>849</p>
                    </div>
                  </div>
                  <div className="order-item" style={{ marginBottom: "0px" }}>
                    <div className="icon icon-spor">
                      <SettingsCellIcon className="icon-item" />
                    </div>
                    <div className="order-item-detail">
                      <div>
                        <p className="title">Sports</p>
                        <p className="examples">Football, Cricket Kit</p>
                      </div>
                      <p>99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box6">
              <div className="iep-details">
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={iepvalue}>
                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        padding: "24px",
                      }}
                    >
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab label="INCOME" value="1" />
                        <Tab label="EXPENSES" value="2" />
                        <Tab label="PROFIT" value="3" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <div className="total-income">
                        <div className="img-wrapper">
                          <img
                            src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/wallet-with-bg.png"
                            alt="wallet-with-bg"
                          />
                        </div>
                        <div className="data-wrapper">
                          <p>Total Income</p>
                          <div className="data-details">
                            <h6>$459.1k</h6>
                            <div className="icon-wrapper">
                              <ArrowUpwardIcon />
                              <p>42.9%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="income-chart">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            width={500}
                            height={300}
                            data={dataBox61}
                            margin={{
                              top: 5,
                              right: 5,
                              left: 0,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="series1"
                              stroke="rgb(105, 108, 255)"
                              activeDot={{ r: 8 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="weekly-income">
                        <div className="chart">
                          <CircularProgressbar value={70} text="6.5k" />
                        </div>
                        <div className="data-detail">
                          <p className="title">Income this week</p>
                          <p className="data">$39k less than last week</p>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="2">
                      <div className="total-expenses">
                        <div className="img-wrapper">
                          <img
                            src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal.png"
                            alt="paypal"
                          />
                        </div>
                        <div className="data-wrapper">
                          <p>Total Expenses</p>
                          <div className="data-details">
                            <h6>$316.5k</h6>
                            <div className="icon-wrapper">
                              <ArrowUpwardIcon />
                              <p>27.8%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="expenses-chart">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            width={500}
                            height={300}
                            data={dataBox61}
                            margin={{
                              top: 5,
                              right: 5,
                              left: 0,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="series1"
                              stroke="rgb(105, 108, 255)"
                              activeDot={{ r: 8 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="weekly-expenses">
                        <div className="chart">
                          <CircularProgressbar value={75} text="7.2k" />
                        </div>
                        <div className="data-detail">
                          <p className="title">Expenses this week</p>
                          <p className="data">$16k less than last week</p>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="3">
                      <div className="total-profit">
                        <div className="img-wrapper">
                          <img
                            src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/chart.png"
                            alt="cards-chart"
                          />
                        </div>
                        <div className="data-wrapper">
                          <p>Total Profit</p>
                          <div className="data-details">
                            <h6>$147.9k</h6>
                            <div className="icon-wrapper">
                              <ArrowUpwardIcon />
                              <p>35.1%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profit-chart">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            width={500}
                            height={300}
                            data={dataBox61}
                            margin={{
                              top: 5,
                              right: 5,
                              left: 0,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="series1"
                              stroke="rgb(105, 108, 255)"
                              activeDot={{ r: 8 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="weekly-profit">
                        <div className="chart">
                          <CircularProgressbar value={50} text="4.2k" />
                        </div>
                        <div className="data-detail">
                          <p className="title">Profit this week</p>
                          <p className="data">$28k less than last week</p>
                        </div>
                      </div>
                    </TabPanel>
                  </TabContext>
                </Box>
              </div>
            </div>
            <div className="box7">
              <div className="top">
                <div>
                  <span className="title">Transactions</span>
                </div>
                <div className="more-icon">
                  <MoreVertIcon />
                </div>
              </div>
              <div className="bottom">
                <div className="transaction">
                  <div className="img-wrapper">
                    <img
                      src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/paypal.png"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <div className="title">
                      <p className="title-name">Paypal</p>
                      <p className="title-detail">Send money</p>
                    </div>
                    <div className="amount">
                      <p className="number">+82.6</p>
                      <p className="unit">USD</p>
                    </div>
                  </div>
                </div>
                <div className="transaction">
                  <div className="img-wrapper">
                    <img
                      src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/wallet.png"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <div className="title">
                      <p className="title-name">Wallet</p>
                      <p className="title-detail">Mac'D</p>
                    </div>
                    <div className="amount">
                      <p className="number">+270.69</p>
                      <p className="unit">USD</p>
                    </div>
                  </div>
                </div>
                <div className="transaction">
                  <div className="img-wrapper">
                    <img
                      src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/chart.png"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <div className="title">
                      <p className="title-name">Transfer</p>
                      <p className="title-detail">Refund</p>
                    </div>
                    <div className="amount">
                      <p className="number">+637.91</p>
                      <p className="unit">USD</p>
                    </div>
                  </div>
                </div>
                <div className="transaction">
                  <div className="img-wrapper">
                    <img
                      src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/credit-card.png"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <div className="title">
                      <p className="title-name">Credit Card</p>
                      <p className="title-detail">Ordered Food</p>
                    </div>
                    <div className="amount">
                      <p className="number">-838.71</p>
                      <p className="unit">USD</p>
                    </div>
                  </div>
                </div>
                <div className="transaction">
                  <div className="img-wrapper">
                    <img
                      src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/wallet.png"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <div className="title">
                      <p className="title-name">Wallet</p>
                      <p className="title-detail">Starbucks</p>
                    </div>
                    <div className="amount">
                      <p className="number">+203.33</p>
                      <p className="unit">USD</p>
                    </div>
                  </div>
                </div>
                <div className="transaction">
                  <div className="img-wrapper">
                    <img
                      src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/atm-card.png"
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <div className="title">
                      <p className="title-name">Mastercard</p>
                      <p className="title-detail">Ordered Food</p>
                    </div>
                    <div className="amount">
                      <p className="number">-92.45</p>
                      <p className="unit">USD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row4">
            <div className="box8">
              <div className="top">
                <div>
                  <span>Activity Timeline</span>
                </div>
                <div>
                  <MoreVertIcon className="more-icon" />
                </div>
              </div>
              <div className="bottom">
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="invoices">
                        <div className="title">
                          <p className="paid">12 Invoices have been paid</p>
                          <p className="min">12 min ago</p>
                        </div>
                        <p className="company">
                          Invoices have been paid to the company
                        </p>
                        <div className="invoices-detail">
                          <img
                            src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/icons/file-icons/pdf.png"
                            alt="invoice.pdf"
                          />
                          <p className="pdf">Invoices.pdf</p>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="meeting">
                        <div className="title">
                          <p className="clientMeeting">Client Meeting</p>
                          <p className="min">45 min ago</p>
                        </div>
                        <p className="with">
                          Project meeting with john @10:15am
                        </p>
                        <div className="meeting-detail">
                          <img
                            src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png"
                            alt="meeting.pdf"
                          />
                          <div className="client">
                            <p className="clientName">Steven Nash (Client)</p>
                            <p className="clientTitle">CEO of ThemeSelection</p>
                          </div>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="project">
                        <div className="title">
                          <p className="newProject">
                            Create a new project for client
                          </p>
                          <p className="day">2 days ago</p>
                        </div>
                        <p className="team">5 team members in a project</p>
                        <div className="members">
                          <div className="img-1">
                            <img
                              src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
                              alt=""
                            />
                          </div>
                          <div className="img-2">
                            <img
                              src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/12.png"
                              alt=""
                            />
                          </div>
                          <div className="img-3">
                            <img
                              src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
                              alt=""
                            />
                          </div>
                          <div className="img-4">
                            <img
                              src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/12.png"
                              alt=""
                            />
                          </div>
                          <div className="img-5">
                            <img
                              src="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/5.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
            <div className="box9">
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={bocvalue}>
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                      padding: "24px",
                    }}
                  >
                    <TabList
                      onChange={bochandleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="BROWSER" value="1" />
                      <Tab label="OPERATING SYSTEM" value="2" />
                      <Tab label="COUNTRY" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 450 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>NO.</TableCell>
                            <TableCell align="right">BROWSER</TableCell>
                            <TableCell align="right">VISITS</TableCell>
                            <TableCell align="right">
                              DATA IN PERCENTAGE
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rowsBrowser.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell component="th" scope="row">
                                {row.number}
                              </TableCell>
                              <TableCell style={{ width: "70px" }}>
                                <div className="name">
                                  <img src={row.logoSrc} alt="" />
                                  <div className="nameDetail">
                                    {row.browser}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell
                                style={{
                                  width: "40px",
                                  fontSize: "16px",
                                  fontWeight: 600,
                                }}
                              >
                                {row.visit}
                              </TableCell>
                              <TableCell>
                                <div className="percentage">
                                  <Linerc
                                    percent={row.dataInPer}
                                    strokeColor={row.color}
                                  />
                                  <div>{row.dataInPer}%</div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                  <TabPanel value="2">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 450 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>NO.</TableCell>
                            <TableCell align="right">SYSTEM</TableCell>
                            <TableCell align="right">VISITS</TableCell>
                            <TableCell align="right">
                              DATA IN PERCENTAGE
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rowsOS.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell component="th" scope="row">
                                {row.number}
                              </TableCell>
                              <TableCell style={{ width: "70px" }}>
                                <div className="name">
                                  <img src={row.logoSrc} alt="" />
                                  <div className="nameDetail">
                                    {row.os}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell
                                style={{
                                  width: "40px",
                                  fontSize: "16px",
                                  fontWeight: 600,
                                }}
                              >
                                {row.visit}
                              </TableCell>
                              <TableCell>
                                <div className="percentage">
                                  <Linerc
                                    percent={row.dataInPer}
                                    strokeColor={row.color}
                                  />
                                  <div>{row.dataInPer}%</div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                  <TabPanel value="3">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 450 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>NO.</TableCell>
                            <TableCell align="right">SYSTEM</TableCell>
                            <TableCell align="right">VISITS</TableCell>
                            <TableCell align="right">
                              DATA IN PERCENTAGE
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rowsCountry.map((row) => (
                            <TableRow key={row.number}>
                              <TableCell component="th" scope="row">
                                {row.number}
                              </TableCell>
                              <TableCell style={{ width: "70px" }}>
                                <div className="name">
                                  <img src={row.logoSrc} alt="" />
                                  <div className="nameDetail">
                                    {row.country}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell
                                style={{
                                  width: "40px",
                                  fontSize: "16px",
                                  fontWeight: 600,
                                }}
                              >
                                {row.visit}
                              </TableCell>
                              <TableCell>
                                <div className="percentage">
                                  <Linerc
                                    percent={row.dataInPer}
                                    strokeColor={row.color}
                                  />
                                  <div>{row.dataInPer}%</div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                </TabContext>
              </Box>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
