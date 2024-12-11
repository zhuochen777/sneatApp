import React, { useEffect, useContext } from "react";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MouseIcon from "@mui/icons-material/Mouse";
import ComputerIcon from "@mui/icons-material/Computer";
import TvIcon from "@mui/icons-material/Tv";
import WalletIcon from "@mui/icons-material/Wallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Rectangle } from "recharts";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Cell, ReferenceLine } from "recharts";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import { Line as Linerc } from "rc-progress";
import "../../style/Ecommerce.scss";
import Footer from "../../components/Footer";
import axios from "axios";
import { themeContext } from "../../App.js";

// const dataBox21Eco = [
//   {
//     name: "Mo",
//     uv: 40,
//   },
//   {
//     name: "Tu",
//     uv: 30,
//   },
//   {
//     name: "We",
//     uv: 15,
//   },
//   {
//     name: "Th",
//     uv: 27,
//   },
//   {
//     name: "Fr",
//     uv: 18,
//   },
//   {
//     name: "Sa",
//     uv: 23,
//   },
//   {
//     name: "Su",
//     uv: 34,
//   },
// ];

// const dataBox22Eco = [
//   {
//     name: "Mo",
//     pv: 24,
//   },
//   {
//     name: "Tu",
//     pv: 13,
//   },
//   {
//     name: "We",
//     pv: 98,
//   },
//   {
//     name: "Th",
//     pv: 39,
//   },
//   {
//     name: "Fr",
//     pv: 48,
//   },
//   {
//     name: "Sa",
//     pv: 38,
//   },
//   {
//     name: "Su",
//     pv: 43,
//   },
// ];

// const dataBox32Eco = [
//   {
//     name: "Jan",
//     uv: 40,
//     pv: 24,
//   },
//   {
//     name: "Apr",
//     uv: 30,
//     pv: 13,
//   },
//   {
//     name: "Jul",
//     uv: 20,
//     pv: 58,
//   },
//   {
//     name: "Oct",
//     uv: 27,
//     pv: 39,
//   },
// ];

// const dataBox41Eco = [
//   {
//     name: "Jan",
//     pv: 3350,
//   },
//   {
//     name: "Feb",
//     pv: 3350,
//   },
//   {
//     name: "Mar",
//     pv: 4800,
//   },
//   {
//     name: "Apr",
//     pv: 4800,
//   },
//   {
//     name: "May",
//     pv: 2950,
//   },
//   {
//     name: "Jun",
//     pv: 2950,
//   },
//   {
//     name: "Jul",
//     pv: 1800,
//   },
//   {
//     name: "Aug",
//     pv: 1800,
//   },
//   {
//     name: "Sep",
//     pv: 3750,
//   },
//   {
//     name: "Oct",
//     pv: 3750,
//   },
//   {
//     name: "Nov",
//     pv: 5700,
//   },
//   {
//     name: "Dec",
//     pv: 5700,
//   },
// ];

// const dataBox5Eco = [
//   {
//     month: "Jan",
//     Income: 120,
//     Earning: 110,
//     fullMark: 150,
//   },
//   {
//     month: "Feb",
//     Income: 98,
//     Earning: 130,
//     fullMark: 150,
//   },
//   {
//     month: "Mar",
//     Income: 86,
//     Earning: 130,
//     fullMark: 150,
//   },
//   {
//     month: "Apr",
//     Income: 99,
//     Earning: 100,
//     fullMark: 150,
//   },
//   {
//     month: "May",
//     Income: 85,
//     Earning: 90,
//     fullMark: 150,
//   },
//   {
//     month: "Jun",
//     Income: 65,
//     Earning: 85,
//     fullMark: 150,
//   },
// ];

// const dataBox6Eco = [
//   {
//     pv: 13,
//   },
//   {
//     pv: 98,
//   },
//   {
//     pv: 39,
//   },
//   {
//     pv: 48,
//   },
// ];

// const dataBox73Eco = [
//   {
//     name: "A",
//     uv: 40,
//     pv: -24,
//   },
//   {
//     name: "B",
//     uv: 30,
//     pv: -13,
//   },
//   {
//     name: "C",
//     uv: 20,
//     pv: -68,
//   },
//   {
//     name: "D",
//     uv: 57,
//     pv: -39,
//   },
//   {
//     name: "E",
//     uv: 18,
//     pv: -48,
//   },
//   {
//     name: "F",
//     uv: 23,
//     pv: -38,
//   },
//   {
//     name: "G",
//     uv: 34,
//     pv: -43,
//   },
//   {
//     name: "H",
//     uv: 34,
//     pv: -23,
//   },
//   {
//     name: "I",
//     uv: 24,
//     pv: -43,
//   },
//   {
//     name: "J",
//     uv: 30,
//     pv: -13,
//   },
// ];

// function createData(product, category, payment, orderStatus) {
//   return { product, category, payment, orderStatus };
// }

// const rowsBox8Eco = [
//   createData(
//     [
//       "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/oneplus-7pro-light.png",
//       "OnePlus 7Pro",
//       "OnePlus",
//     ],
//     "Smart Phone",
//     [120, 499, "Partially Paid"],
//     "CONFIRMED"
//   ),
//   createData(
//     [
//       "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/apple-magic-mouse-light.png",
//       "Magic Mouse",
//       "Apple",
//     ],
//     "Mouse",
//     [149, 149, "Fully Paid"],
//     "COMPLETED"
//   ),
//   createData(
//     [
//       "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/apple-iMac-pro-light.png",
//       "iMac Pro",
//       "Apple",
//     ],
//     "Computer",
//     [0, 899, "Unpaid"],
//     "CANCELLED"
//   ),
//   createData(
//     [
//       "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/samsung-note-10-light.png",
//       "Note 10",
//       "Samsung",
//     ],
//     "Smart Phone",
//     [169, 169, "Fully Paid"],
//     "COMPLETED"
//   ),
//   createData(
//     [
//       "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/apple-iPhone-11-pro-light.png",
//       "iPhone 11 Pro",
//       "Apple",
//     ],
//     "Smart Phone",
//     [399, 399, "Fully Paid"],
//     "COMPLETED"
//   ),
//   createData(
//     [
//       "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/mi-led-tv-4x-light.png",
//       "Mi Led TV 4X",
//       "Xiaomi",
//     ],
//     "Smart TV",
//     [349, 2599, "Partially Paid"],
//     "CONFIRMED"
//   ),
//   createData(
//     [
//       "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/cards/logitech-mx-light.png",
//       "Logitech MX",
//       "Logitech",
//     ],
//     "Mouse",
//     [89, 89, "Fully Paid"],
//     "COMPLETED"
//   ),
// ];

// const dataBox9Eco = [
//   {
//     name: "Jan",
//     pv: 14,
//   },
//   {
//     name: "Feb",
//     pv: 33,
//   },
//   {
//     name: "Mar",
//     pv: 25,
//   },
//   {
//     name: "Apr",
//     pv: 48,
//   },
//   {
//     name: "May",
//     pv: 32,
//   },
//   {
//     name: "Jun",
//     pv: 60,
//   },
// ];

export default function Ecommerce() {
  let url = process.env.REACT_APP_baseURL;
  const [dataBox21Eco, setDataBox21Eco] = useState([]);
  const [dataBox22Eco, setDataBox22Eco] = useState([]);
  const [dataBox32Eco, setDataBox32Eco] = useState([]);
  const [dataBox41Eco, setDataBox41Eco] = useState([]);
  const [dataBox5Eco, setDataBox5Eco] = useState([]);
  const [dataBox6Eco, setDataBox6Eco] = useState([]);
  const [dataBox73Eco, setDataBox73Eco] = useState([]);
  const [rowsBox8Eco, setRowsBox8Eco] = useState([]);
  const [dataBox9Eco, setDataBox9Eco] = useState([]);
  const { theme, toggleTheme } = useContext(themeContext);

  const getBox21DataEco = async () => {
    const { data } = await axios.get(url + "/box21Ecolist");
    setDataBox21Eco(data);
  };
  const getBox22DataEco = async () => {
    const { data } = await axios.get(url + "/box22Ecolist");
    setDataBox22Eco(data);
  };
  const getBox32DataEco = async () => {
    const { data } = await axios.get(url + "/box32Ecolist");
    setDataBox32Eco(data);
  };
  const getBox41DataEco = async () => {
    const { data } = await axios.get(url + "/box41Ecolist");
    setDataBox41Eco(data);
  };
  const getBox5DataEco = async () => {
    const { data } = await axios.get(url + "/box5Ecolist");
    setDataBox5Eco(data);
  };
  const getBox6DataEco = async () => {
    const { data } = await axios.get(url + "/box6Ecolist");
    setDataBox6Eco(data);
  };
  const getBox73DataEco = async () => {
    const { data } = await axios.get(url + "/box73Ecolist");
    setDataBox73Eco(data);
  };
  const getBox8RowsEco = async () => {
    const { data } = await axios.get(url + "/box8Ecolist");
    setRowsBox8Eco(data);
  };

  const getBox9DataEco = async () => {
    const { data } = await axios.get(url + "/box9Ecolist");
    setDataBox9Eco(data);
  };

  useEffect(() => {
    getBox21DataEco();
    getBox22DataEco();
    getBox32DataEco();
    getBox41DataEco();
    getBox5DataEco();
    getBox6DataEco();
    getBox73DataEco();
    getBox8RowsEco();
    getBox9DataEco();
  }, []);

  return (
    <div className="ecommerce">
      <Sidebar />
      <div className={`container ${theme}`}>
        <Navbar />
        <div
          className="ecommerce-boxes"
          style={{ marginTop: "100px", marginBottom: "24px" }}
        >
          <div className="row1">
            <div className="box1-wrapper">
              <div className="box1">
                <p className="cong">Congratulations Katie! 🎉</p>
                <p className="best">Best seller of the month</p>
                <h5>$48.9k</h5>
                <p className="target">78% of target 🚀</p>
                <button>View Sales</button>
                <img
                  src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/prize-light.png"
                  alt="trophy"
                />
              </div>
            </div>
            <div className="box2-wrapper">
              <div className="box2">
                <div className="box21">
                  <div className="top">
                    <h6>New Visitors</h6>
                    <p>Last Week</p>
                  </div>
                  <div className="bottom">
                    <div className="data">
                      <h4 className="percent1">23%</h4>
                      <div className="percent2">
                        <ArrowDownwardIcon className="icon" />
                        <p className="percent down">8.75%</p>
                      </div>
                    </div>
                    <div className="chart">
                      <ResponsiveContainer width="100%" aspect="100%">
                        <BarChart data={dataBox21Eco}>
                          <XAxis
                            dataKey="name"
                            tick={{ fill: "rgba(50, 71, 92, 0.6)" }}
                          />
                          <Bar
                            dataKey="uv"
                            fill="rgba(105, 108, 255, 0.85)"
                            barSize={12}
                            radius={[6, 6, 6, 6]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="box22">
                  <div className="top">
                    <h6>Activity</h6>
                    <p>Last Week</p>
                  </div>
                  <div className="bottom">
                    <div className="data">
                      <h4 className="percent1">82%</h4>
                      <div className="percent2">
                        <ArrowUpwardIcon className="icon" />
                        <p className="percent up">19.6%</p>
                      </div>
                    </div>
                    <div className="chart">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={dataBox22Eco}>
                          <XAxis
                            dataKey="name"
                            interval="preserveStartEnd"
                            tick={{ fill: "rgba(50, 71, 92, 0.6)" }}
                          />
                          <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#8fdf82"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="box3-wrapper">
              <div className="box3">
                <div className="box3Top">
                  <div className="box31">
                    <div style={{ padding: "20px 20px 16px" }}>
                      <div className="top">
                        <div>
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/wallet-info.png"
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
                          <p className="percent up">28.14%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box32">
                    <div className="top">
                      <p>Profit</p>
                      <h5>624k</h5>
                    </div>
                    <div className="chart">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dataBox32Eco}>
                          <XAxis dataKey="name" />
                          <Bar
                            dataKey="pv"
                            fill="rgb(113, 221, 55)"
                            barSize={6}
                            radius={[6, 6, 6, 6]}
                          />
                          <Bar
                            dataKey="uv"
                            fill="rgba(113, 221, 55, 0.2)"
                            barSize={6}
                            radius={[6, 6, 6, 6]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="box3Bottom">
                  <div className="box33">
                    <p className="expenses">Expenses</p>
                    <div className="chart">
                      <SemiCircleProgress
                        percentage={72}
                        size={{
                          width: 138,
                          height: 75,
                        }}
                        strokeWidth={10}
                        strokeColor="rgb(105, 108, 255)"
                        hasBackground={true}
                        bgStrokeColor="rgba(50, 71, 92, 0.14)"
                      />
                    </div>
                    <p className="more">$2k Expenses more</p>
                    <p className="month">than last month</p>
                  </div>
                  <div className="box34">
                    <div style={{ padding: "20px 20px 16px" }}>
                      <div className="top">
                        <div>
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/cc-primary.png"
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
                          <p className="percent up">28.14%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box4-wrapper">
              <div className="box4">
                <div className="box41">
                  <div className="top">
                    <div className="income">Total Income</div>
                    <div className="overview">Yearly report overview</div>
                  </div>
                  <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={dataBox41Eco}
                        margin={{
                          top: 20,
                          right: 20,
                          left: 20,
                          bottom: 20,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="name"
                          tick={{ fill: "rgba(50, 71, 92, 0.6)" }}
                        />
                        <YAxis tick={{ fill: "rgba(50, 71, 92, 0.6)" }} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="rgba(105, 108, 255, 0.85)"
                          dot={false}
                          strokeWidth={3}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="box42">
                  <div className="top">
                    <div className="detail">
                      <div className="title">Report</div>
                      <div className="ave">Monthly Avg. $45.578k</div>
                    </div>
                    <div className="icon">
                      <MoreVertIcon />
                    </div>
                  </div>
                  <div className="bottom">
                    <div className={`report-item ${theme}`}>
                      <div className="left">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/svg/icons/paypal-icon.svg"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <div className="detail">
                          <p className="title">Income</p>
                          <p className="dollar">$42,854</p>
                        </div>
                        <p className="change pos percent up">+2.7k</p>
                      </div>
                    </div>
                    <div className={`report-item ${theme}`}>
                      <div className="left">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/svg/icons/credit-card-icon.svg"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <div className="detail">
                          <p className="title">Expense</p>
                          <p className="dollar">$38,658</p>
                        </div>
                        <p className="change neg percent down">-1.15k</p>
                      </div>
                    </div>
                    <div className={`report-item ${theme}`}>
                      <div className="left">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/svg/icons/wallet-icon.svg"
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <div className="detail">
                          <p className="title">Profit</p>
                          <p className="dollar">$18,220</p>
                        </div>
                        <p className="change pos percent up">+1.34k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="box5-wrapper">
              <div className="box5">
                <div className="top">
                  <div className="performance">Performance</div>
                  <button>
                    <MoreVertIcon />
                  </button>
                </div>
                <div className="bottom">
                  <div className="earning">
                    <div className="left earning-detail">
                      <p>
                        <span className="title">Earning:</span>
                        <span className="amount">$846.17</span>
                      </p>
                    </div>
                    <div className="right earning-detail">
                      <p>
                        <span className="title">Sales:</span>
                        <span className="amount">25.7M</span>
                      </p>
                    </div>
                  </div>
                  <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={dataBox5Eco}
                      >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="month" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar
                          name="Income"
                          dataKey="Income"
                          stroke="rgb(105, 108, 255)"
                          fill="rgb(105, 108, 255)"
                          fillOpacity={0.8}
                        />
                        <Radar
                          name="Earning"
                          dataKey="Earning"
                          stroke="rgb(3, 195, 236)"
                          fill="rgb(3, 195, 236)"
                          fillOpacity={0.8}
                        />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="boxes-wrapper">
              <div className="box6-wrapper">
                <div className="box6">
                  <div className="header">
                    <div className="header-content">
                      <p className="title">Conversion Rate</p>
                      <p className="compare">Compared To Last Month</p>
                    </div>
                    <button>
                      <MoreVertIcon />
                    </button>
                  </div>
                  <div className="content">
                    <div className="data">
                      <div className="left">
                        <h4>8.72%</h4>
                        <div className="increase">
                          <ArrowUpwardIcon
                            style={{ height: "22px", width: "22px" }}
                          />
                          <p className="percent up">4.8%</p>
                        </div>
                      </div>
                      <div className="right">
                        <div className="chart">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dataBox6Eco}>
                              <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="rgba(105, 108, 255, 0.85)"
                                strokeWidth={2}
                                dot={false}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                    <div className="conversion-item">
                      <div className="info">
                        <p className="title">Impressions</p>
                        <p className="desc">12.4k Visits</p>
                      </div>
                      <div className="change">
                        <ArrowUpwardIcon className="icon pos" />
                        <p className="percent up">12.8%</p>
                      </div>
                    </div>
                    <div className="conversion-item">
                      <div className="info">
                        <p className="title">Added To Cart</p>
                        <p className="desc">32 Product in cart</p>
                      </div>
                      <div className="change">
                        <ArrowDownwardIcon className="icon neg" />
                        <p className="percent down">-8.3%</p>
                      </div>
                    </div>
                    <div className="conversion-item">
                      <div className="info">
                        <p className="title">Checkout</p>
                        <p className="desc">21 Product checkout</p>
                      </div>
                      <div className="change">
                        <ArrowUpwardIcon className="icon pos" />
                        <p className="percent up">9.12%</p>
                      </div>
                    </div>
                    <div className="conversion-item conversion-last">
                      <div className="info">
                        <p className="title">Purchased</p>
                        <p className="desc">12 Orders</p>
                      </div>
                      <div className="change">
                        <ArrowUpwardIcon className="icon pos" />
                        <p className="percent up">2.24%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box7-wrapper">
                <div className="box7">
                  <div className="top-box">
                    <div className="box71">
                      <div style={{ padding: "20px 20px 16px" }}>
                        <div className="top">
                          <div>
                            <img
                              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/computer.png"
                              alt=""
                            />
                          </div>
                          <button>
                            <MoreVertIcon fontSize="small" />
                          </button>
                        </div>
                        <div className="bottom">
                          <p className="info">Revenue</p>
                          <h5>$42,389</h5>
                          <div>
                            <ArrowUpwardIcon
                              style={{
                                width: "16px",
                                height: "16px",
                                marginRight: "0.25rem",
                              }}
                            />
                            <p className="percent up">52.76%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box72">
                      <div style={{ padding: "14px 18px" }}>
                        <p className="sales">Sales</p>
                        <h5>482k</h5>
                        <div className="data">
                          <span>+34%</span>
                        </div>
                        <p className="target">Sales Target</p>
                        <div className="chart">
                          <div className="line-chart">
                            <Linerc
                              percent={78}
                              strokeWidth={5}
                              trailWidth={5}
                              strokeColor="rgb(3, 195, 236)"
                              trailColor="rgb(235, 238, 240)"
                              className="line-progress"
                            />
                          </div>
                          <p>78%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box73">
                    <div className="box73-inner">
                      <div className="left">
                        <h6>Expenses</h6>
                        <div className="detail">
                          <h5>$84.7k</h5>
                          <div className="change">
                            <ArrowDownwardIcon className="icon" />
                            <p className="percent down">8.2%</p>
                          </div>
                        </div>
                        <div className="month">
                          <span>July 2024</span>
                        </div>
                      </div>
                      <div className="right">
                        <div className="chart">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              data={dataBox73Eco}
                              stackOffset="sign"
                              margin={{
                                top: 5,
                                right: 0,
                                left: 20,
                                bottom: 5,
                              }}
                            >
                              <Bar
                                dataKey="pv"
                                stackId="stack"
                                fill="rgb(255, 171, 0)"
                                barSize={8}
                                radius={[6, 6, 6, 6]}
                              />
                              <Bar
                                dataKey="uv"
                                stackId="stack"
                                fill="rgba(105, 108, 255, 0.85)"
                                barSize={8}
                                radius={[6, 6, 6, 6]}
                              />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row4">
            <div className="box8-wrapper">
              <div className="box8">
                <div className="table-chart">
                  <TableContainer>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell className="cell1 cell">PRODUCT</TableCell>
                          <TableCell className="cell2 cell">CATEGORY</TableCell>
                          <TableCell className="cell3 cell">PAYMENT</TableCell>
                          <TableCell className="cell4 cell">
                            ORDER STATUS
                          </TableCell>
                          <TableCell className="cell5 cell">ACTIONS</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowsBox8Eco.map((row) => (
                          <TableRow key={row.product[1]}>
                            <TableCell component="th" scope="row">
                              <div className="product">
                                <img src={row.product[0]} alt="" />
                                <div className="detail">
                                  <div className="name">{row.product[1]}</div>
                                  <div className="brandName">
                                    {row.product[2]}
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="category">
                                <div className="icons">
                                  {row.category === "Smart Phone" ? (
                                    <div className="smartphone-wrapper icon-wrapper">
                                      <SmartphoneIcon
                                        style={{
                                          width: "16px",
                                          height: "16px",
                                        }}
                                      />
                                    </div>
                                  ) : row.category === "Mouse" ? (
                                    <div className="mouse-wrapper icon-wrapper">
                                      <MouseIcon
                                        style={{
                                          width: "16px",
                                          height: "16px",
                                        }}
                                      />
                                    </div>
                                  ) : row.category === "Computer" ? (
                                    <div className="computer-wrapper icon-wrapper">
                                      <ComputerIcon
                                        style={{
                                          width: "16px",
                                          height: "16px",
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    <div className="tv-wrapper icon-wrapper">
                                      <TvIcon
                                        style={{
                                          width: "16px",
                                          height: "16px",
                                        }}
                                      />
                                    </div>
                                  )}
                                </div>
                                <p>{row.category}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="payment">
                                {row.payment[2] === "Partially Paid" ? (
                                  <div className="partially">
                                    <div>
                                      <span className="first">
                                        ${row.payment[0]}
                                      </span>
                                      <span className="second">
                                        {" "}
                                        / ${row.payment[1]}
                                      </span>
                                    </div>
                                    <p>{row.payment[2]}</p>
                                  </div>
                                ) : row.payment[2] === "Fully Paid" ? (
                                  <div className="fully">
                                    <div>
                                      <span className="first">
                                        ${row.payment[0]}
                                      </span>
                                    </div>
                                    <p>{row.payment[2]}</p>
                                  </div>
                                ) : (
                                  <div className="unpaid">
                                    <div>
                                      <span className="first">
                                        ${row.payment[0]}
                                      </span>
                                      <span className="second">
                                        {" "}
                                        / ${row.payment[1]}
                                      </span>
                                    </div>
                                    <p>{row.payment[2]}</p>
                                  </div>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="orderStatus">
                                {row.orderStatus === "CONFIRMED" ? (
                                  <div className="status confirmed">
                                    <span>{row.orderStatus}</span>
                                  </div>
                                ) : row.orderStatus === "COMPLETED" ? (
                                  <div className="status completed">
                                    <span>{row.orderStatus}</span>
                                  </div>
                                ) : (
                                  <div className="status cancelled">
                                    <span>{row.orderStatus}</span>
                                  </div>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="actions">
                                <MoreVertIcon />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
            <div className="box9-wrapper">
              <div className="box9">
                <div className="top">
                  <div className="header">
                    <span className="totalBalance">Total Balance</span>
                  </div>
                  <div className="button">
                    <button>
                      <MoreVertIcon style={{ width: "22px", height: "22px" }} />
                    </button>
                  </div>
                </div>
                <div className="bottom">
                  <div className="balance">
                    <div className="wallet-wrapper">
                      <div className="wallet">
                        <div className="wallet-icon">
                          <WalletIcon />
                        </div>
                        <div className="details">
                          <h6>$2.54k</h6>
                          <p>Wallet</p>
                        </div>
                      </div>
                    </div>
                    <div className="paypal-wrapper">
                      <div className="paypal">
                        <div className="paypal-icon">
                          <AttachMoneyIcon />
                        </div>
                        <div className="details">
                          <h6>$4.21k</h6>
                          <p>Paypal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={dataBox9Eco}
                        margin={{ top: 30, bottom: 10 }}
                      >
                        <XAxis
                          dataKey="name"
                          interval="preserveStartEnd"
                          tick={{ fill: "rgba(50, 71, 92, 0.6)" }}
                        />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="rgb(255, 171, 0)"
                          strokeWidth={3}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <hr className="divider"
                    style={{
                      marginBottom: "24px",
                      borderColor: "rgba(50, 71, 92, 0.12)",
                      borderWidth: "0 0 thin",
                    }}
                  />
                  <div className="more-wrapper">
                    <div className="checkBadge">
                      <p className="sales">You have done 57.6% more sales.</p>
                      <p className="check">
                        Check your new badge in your profile.
                      </p>
                    </div>
                    <div className="rightArrow">
                      <ChevronRightIcon className="arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
