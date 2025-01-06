import React, { PureComponent } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../style/Crm.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
} from "recharts";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Footer from "../../components/Footer";

const dataBox1 = [
  {
    name: "",
    "This Month": 20,
    "Last Month": 20,
  },
  {
    name: "Jan",
    "This Month": 32,
    "Last Month": 54,
  },
  {
    name: "Feb",
    "This Month": 22,
    "Last Month": 20,
  },
  {
    name: "Mar",
    "This Month": 65,
    "Last Month": 38,
  },
  {
    name: "Apr",
    "This Month": 40,
    "Last Month": 22,
  },
  {
    name: "May",
    "This Month": 46,
    "Last Month": 28,
  },
  {
    name: "Jun",
    "This Month": 34,
    "Last Month": 16,
  },
  {
    name: "Jul",
    "This Month": 70,
    "Last Month": 19,
  },
  {
    name: "",
    "This Month": 75,
    "Last Month": 11,
  },
];

const dataBox2 = [
  {
    name: "Jan",
    "PRODUCT A": 75,
    "PRODUCT B": 25,
  },
  {
    name: "Feb",
    "PRODUCT A": 50,
    "PRODUCT B": 29,
  },
  {
    name: "Mar",
    "PRODUCT A": 55,
    "PRODUCT B": 32,
  },
  {
    name: "Apr",
    "PRODUCT A": 60,
    "PRODUCT B": 35,
  },
  {
    name: "May",
    "PRODUCT A": 48,
    "PRODUCT B": 34,
  },
  {
    name: "Jun",
    "PRODUCT A": 82,
    "PRODUCT B": 18,
  },
  {
    name: "Jul",
    "PRODUCT A": 59,
    "PRODUCT B": 30,
  },
];

const dataBox31 = [
  {
    "Series-1": 280,
  },
  {
    "Series-1": 280,
  },
  {
    "Series-1": 240,
  },
  {
    "Series-1": 240,
  },
  {
    "Series-1": 200,
  },
  {
    "Series-1": 200,
  },
  {
    "Series-1": 260,
  },
  {
    "Series-1": 260,
  },
  {
    "Series-1": 310,
  },
];

const dataBox33 = [
  { name: "Fashion", value: 30 },
  { name: "Electronic", value: 20 },
  { name: "Sports", value: 30 },
  { name: "Decors", value: 20 },
];

const dataBox5 = [
  {
    name: "Mo",
    "Series-1": 40,
  },
  {
    name: "Tu",
    "Series-1": 96,
  },
  {
    name: "We",
    "Series-1": 60,
  },
  {
    name: "Th",
    "Series-1": 45,
  },
  {
    name: "Fr",
    "Series-1": 90,
  },
  {
    name: "Sa",
    "Series-1": 50,
  },
  {
    name: "Su",
    "Series-1": 75,
  },
];

const dataBox6 = [
  {
    id: "8k",
    data: [
      {
        x: "Jan",
        y: 575,
      },
      {
        x: "Feb",
        y: 350,
      },
      {
        x: "Mar",
        y: 220,
      },
      {
        x: "Apr",
        y: 290,
      },
      {
        x: "May",
        y: 650,
      },
      {
        x: "Jun",
        y: 260,
      },
      {
        x: "Jul",
        y: 275,
      },
      {
        x: "Aug",
        y: 815,
      },
    ],
  },
  {
    id: "7k",
    data: [
      {
        x: "Jan",
        y: 575,
      },
      {
        x: "Feb",
        y: 1305,
      },
      {
        x: "Mar",
        y: 1220,
      },
      {
        x: "Apr",
        y: 1290,
      },
      {
        x: "May",
        y: 1250,
      },
      {
        x: "Jun",
        y: 1260,
      },
      {
        x: "Jul",
        y: 3200,
      },
      {
        x: "Aug",
        y: 815,
      },
    ],
  },
  {
    id: "6k",
    data: [
      {
        x: "Jan",
        y: 320,
      },
      {
        x: "Feb",
        y: 220,
      },
      {
        x: "Mar",
        y: 520,
      },
      {
        x: "Apr",
        y: 505,
      },
      {
        x: "May",
        y: 514,
      },
      {
        x: "Jun",
        y: 472,
      },
      {
        x: "Jul",
        y: 371,
      },
      {
        x: "Aug",
        y: 258,
      },
    ],
  },
  {
    id: "5k",
    data: [
      {
        x: "Jan",
        y: 492,
      },
      {
        x: "Feb",
        y: 468,
      },
      {
        x: "Mar",
        y: 1760,
      },
      {
        x: "Apr",
        y: 895,
      },
      {
        x: "May",
        y: 397,
      },
      {
        x: "Jun",
        y: 761,
      },
      {
        x: "Jul",
        y: 49,
      },
      {
        x: "Aug",
        y: 292,
      },
    ],
  },
  {
    id: "4k",
    data: [
      {
        x: "Jan",
        y: 443,
      },
      {
        x: "Feb",
        y: 812,
      },
      {
        x: "Mar",
        y: 985,
      },
      {
        x: "Apr",
        y: 1320,
      },
      {
        x: "May",
        y: 376,
      },
      {
        x: "Jun",
        y: 217,
      },
      {
        x: "Jul",
        y: 948,
      },
      {
        x: "Aug",
        y: 368,
      },
    ],
  },
  {
    id: "3k",
    data: [
      {
        x: "Jan",
        y: 1440,
      },
      {
        x: "Feb",
        y: 878,
      },
      {
        x: "Mar",
        y: 857,
      },
      {
        x: "Apr",
        y: 768,
      },
      {
        x: "May",
        y: 929,
      },
      {
        x: "Jun",
        y: 1420,
      },
      {
        x: "Jul",
        y: 896,
      },
      {
        x: "Aug",
        y: 558,
      },
    ],
  },
  {
    id: "2k",
    data: [
      {
        x: "Jan",
        y: 15,
      },
      {
        x: "Feb",
        y: 172,
      },
      {
        x: "Mar",
        y: 821,
      },
      {
        x: "Apr",
        y: 998,
      },
      {
        x: "May",
        y: 892,
      },
      {
        x: "Jun",
        y: 1670,
      },
      {
        x: "Jul",
        y: 300,
      },
      {
        x: "Aug",
        y: 548,
      },
    ],
  },
  {
    id: "1k",
    data: [
      {
        x: "Jan",
        y: 783,
      },
      {
        x: "Feb",
        y: 1860,
      },
      {
        x: "Mar",
        y: 67,
      },
      {
        x: "Apr",
        y: 222,
      },
      {
        x: "May",
        y: 980,
      },
      {
        x: "Jun",
        y: 395,
      },
      {
        x: "Jul",
        y: 335,
      },
      {
        x: "Aug",
        y: 483,
      },
    ],
  },
];

function createDataBox9(name, avatar, title, project, task, progress, color) {
  return { name, avatar, title, project, task, progress, color };
}

const rowsBox9 = [
  createDataBox9(
    "Nathan Wagner",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/17.png",
    "iOS Developer",
    "ZIPCAR",
    "87/135",
    70,
    "purple"
  ),
  createDataBox9(
    "Emma Bowen",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/8.png",
    "UI/UX Designer",
    "BITBANK",
    "320/440",
    90,
    "red"
  ),
  createDataBox9(
    "Adrian McGuire",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/11.png",
    "PHP Developer",
    "PAYERS",
    "50/82",
    75,
    "orange"
  ),
  createDataBox9(
    "Alma Gonzalez",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/2.png",
    "Product Manager",
    "BRANDI",
    "98/260",
    70,
    "lightblue"
  ),
  createDataBox9(
    "Allen Kristian",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/11.png",
    "Frontend Developer",
    "CRYPTER",
    "690/760",
    60,
    "lightblue"
  ),
];

function createDataBox10(name, avatar, email, amount, status, paidBy) {
  return { name, avatar, email, amount, status, paidBy };
}

const rowsBox10 = [
  createDataBox10(
    "Henry Barnes",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/7.png",
    "jok@puc.co.uk",
    495.65,
    "Paid",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/payments/master-light.png"
  ),
  createDataBox10(
    "Hallie Warner",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/20.png",
    "hellie@war.co.uk",
    93.81,
    "Pending",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/payments/master-light.png"
  ),
  createDataBox10(
    "Gerald Flowers",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/9.png",
    "initus@odemi.com",
    934.35,
    "Pending",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/payments/paypal_logo-light.png"
  ),
  createDataBox10(
    "John Davidson",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/14.png",
    "jtum@upkesja.gov",
    794.97,
    "Paid",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/payments/master-light.png"
  ),
  createDataBox10(
    "Jayden Harris",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/17.png",
    "wipare@tin.com",
    19.49,
    "Paid",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/payments/master-light.png"
  ),
  createDataBox10(
    "Rena Ferguson",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/8.png",
    "nur@kaomor.edu",
    636.27,
    "Failed",
    "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/payments/paypal_logo-light.png"
  ),
];

export default function Crm() {
  return (
    <div className="crm">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="crm-boxes" style={{ marginTop: "100px" }}>
          <div className="row1">
            <div className="box1">
              <div className="card-header">
                <h5>Customer Ratings</h5>
                <div className="action">
                  <button>
                    <MoreVertIcon />
                  </button>
                </div>
              </div>
              <div className="card-desc">
                <div className="score">
                  <h2>4.0</h2>
                  <div className="ratings">
                    <StarIcon className="rating-star" />
                    <StarIcon className="rating-star" />
                    <StarIcon className="rating-star" />
                    <StarIcon className="rating-star" />
                    <StarIcon className="rating-star" />
                  </div>
                </div>
                <div className="points">
                  <span className="point-number">+5.0</span>
                  <span className="point-desc">Points from last month</span>
                </div>
              </div>
              <div className="customerRatingsChart">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={dataBox1}
                    margin={{
                      top: 5,
                      right: 5,
                      left: 5,
                      bottom: 5,
                    }}
                  >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line
                      type="monotone"
                      dataKey="This Month"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Last Month"
                      stroke="#82ca9d"
                      strokeDasharray="3 4 5 2"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="box2">
              <div className="card-header">
                <div className="card-title">
                  <h5>Overview & Sales Activity</h5>
                  <p>Check out each column for more details</p>
                </div>
                <div className="card-dropdown">
                  <button>
                    <MoreVertIcon />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    // width={500}
                    // height={300}
                    data={dataBox2}
                    margin={{
                      top: 20,
                      right: 20,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar
                      dataKey="PRODUCT A"
                      stackId="a"
                      fill="#8884d8"
                      barSize={20}
                    />
                    <Bar
                      dataKey="PRODUCT B"
                      stackId="a"
                      fill="#82ca9d"
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="box3">
              <div className="topBoxes">
                <div className="box31">
                  <div className="card-header">
                    <span>Sessions</span>
                    <h4>2,845</h4>
                  </div>
                  <div className="card-chart">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        // width={500}
                        // height={400}
                        data={dataBox31}
                        margin={{
                          top: 0,
                          right: 0,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        {/* <XAxis dataKey="name" /> */}
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="Series-1"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="box32">
                  <div className="card-header">
                    <div className="card-img">
                      <img
                        src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/cube-secondary.png"
                        alt=""
                      />
                    </div>
                    <div className="card-dropdown">
                      <button>
                        <MoreVertIcon />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>Order</p>
                    <h4>$1,286</h4>
                    <div className="bottom">
                      <ArrowDownwardIcon />
                      <span>-13.24%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box33">
                <div className="box33-content">
                  <div className="card-left">
                    <div className="card-title">
                      <h5>Generated Leads</h5>
                      <p>Monthly Report</p>
                    </div>
                    <div className="card-data">
                      <h4>4,230</h4>
                      <p>
                        {" "}
                        <ArrowUpwardIcon />
                        +12.8%
                      </p>
                    </div>
                  </div>
                  <div className="card-right">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart width={400} height={400}>
                        <Pie
                          dataKey="value"
                          isAnimationActive={false}
                          data={dataBox33}
                          cx="50%"
                          cy="50%"
                          outerRadius={40}
                          fill="#8884d8"
                          label
                        />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="box4">
              <div className="box4-content">
                <div className="box4-left">
                  <div className="card-header">
                    <h5>
                      Top Products by <span className="sales">Sales</span>
                    </h5>
                    <div className="card-dropdown">
                      <button>
                        <MoreVertIcon />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/oneplus.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>Oneplus Nord</h6>
                            <small>Oneplus</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>$98,348</span>
                          </div>
                        </div>
                      </li>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/watch-primary.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>Smart Band 4</h6>
                            <small>Xiaomi</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>$15,459</span>
                          </div>
                        </div>
                      </li>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/surface.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>Surface Pro X</h6>
                            <small>Microsoft</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>$4,589</span>
                          </div>
                        </div>
                      </li>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/iphone.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>iphone 13</h6>
                            <small>Apple</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>$84,345</span>
                          </div>
                        </div>
                      </li>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/earphone.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>Bluetooth Earphone</h6>
                            <small>Beats</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>$10,374</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box4-right">
                  <div className="card-header">
                    <h5>
                      Top Products by <span className="sales">Volume</span>
                    </h5>
                    <div className="card-dropdown">
                      <button>
                        <MoreVertIcon />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/laptop-secondary.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>ENVY Laptop</h6>
                            <small>HP</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>124k</span>
                            <div className="num up">+12.4%</div>
                          </div>
                        </div>
                      </li>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/computer.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>Apple</h6>
                            <small>iMac Pro</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>74.9k</span>
                            <div className="num down">-8.5%</div>
                          </div>
                        </div>
                      </li>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/watch.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>Smart Watch</h6>
                            <small>Fitbit</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>4.4k</span>
                            <div className="num up">+62.6%</div>
                          </div>
                        </div>
                      </li>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/oneplus-success.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>Oneplus RT</h6>
                            <small>Oneplus</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>12.3k</span>
                            <div className="num up">+16.7%</div>
                          </div>
                        </div>
                      </li>
                      <li className="sales-item">
                        <div className="avatar">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/pixel.png"
                            alt=""
                          />
                        </div>
                        <div className="sales-desc">
                          <div className="sales-desc-left">
                            <h6>Pixel 4a</h6>
                            <small>Google</small>
                          </div>
                          <div className="sales-desc-right">
                            <span>834k</span>
                            <div className="num down">-12.9%</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="box5">
              <div className="box5-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h5>Earning Reports</h5>
                    <span>Weekly Earnings Overview</span>
                  </div>
                  <div className="card-dropdown">
                    <button>
                      <MoreVertIcon />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <ul>
                    <li className="earning-item">
                      <div className="avatar">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/laptop-secondary.png"
                          alt=""
                        />
                      </div>
                      <div className="earning-desc">
                        <div className="earning-desc-left">
                          <h6>Net Profit</h6>
                          <small>12.4k Sales</small>
                        </div>
                        <div className="earning-desc-right">
                          <span>$1,619</span>
                          <div className="num">
                            <ArrowUpwardIcon className="up" />
                            18.6%
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="earning-item">
                      <div className="avatar">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/computer.png"
                          alt=""
                        />
                      </div>
                      <div className="earning-desc">
                        <div className="earning-desc-left">
                          <h6>Total Income</h6>
                          <small>Sales, Affiliation</small>
                        </div>
                        <div className="earning-desc-right">
                          <span>$3,571</span>
                          <div className="num">
                            <ArrowUpwardIcon className="up" />
                            39.6%
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="earning-item">
                      <div className="avatar">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/watch.png"
                          alt=""
                        />
                      </div>
                      <div className="earning-desc">
                        <div className="earning-desc-left">
                          <h6>Total Expenses</h6>
                          <small>ADVT, Marketing</small>
                        </div>
                        <div className="earning-desc-right">
                          <span>$430</span>
                          <div className="num">
                            <ArrowUpwardIcon className="up" />
                            52.8%
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="chart">
                    <ResponsiveContainer>
                      <BarChart
                        // width={500}
                        // height={300}
                        data={dataBox5}
                        // margin={{
                        //   top: 5,
                        //   right: 30,
                        //   left: 20,
                        //   bottom: 5,
                        // }}
                        barSize={20}
                      >
                        <XAxis
                          dataKey="name"
                          scale="point"
                          padding={{ left: 10, right: 10 }}
                        />
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Bar
                          dataKey="Series-1"
                          fill="#8884d8"
                          background={{ fill: "#eee" }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="box6">
              <div className="box6-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h5>Sales Analytics</h5>
                    <span className="num">+42.6%</span>
                    <span className="last-year">Than last year</span>
                  </div>
                  <div className="btn-group">
                    <button className="btn-one">2022</button>
                    <button className="btn-two">
                      <KeyboardArrowDownIcon className="icon" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart">
                    <ResponsiveHeatMap
                      data={dataBox6}
                      margin={{ top: 0, right: 50, bottom: 60, left: 60 }}
                      valueFormat=">-.2s"
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -90,
                        legend: "",
                        legendOffset: 46,
                        truncateTickAt: 0,
                      }}
                      // axisRight={{
                      //   tickSize: 5,
                      //   tickPadding: 5,
                      //   tickRotation: 0,
                      //   legend: "country",
                      //   legendPosition: "middle",
                      //   legendOffset: 70,
                      //   truncateTickAt: 0,
                      // }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        // legend: "country",
                        legendPosition: "middle",
                        legendOffset: -72,
                        truncateTickAt: 0,
                      }}
                      colors={{
                        type: "diverging",
                        scheme: "red_yellow_blue",
                        divergeAt: 0.5,
                        minValue: 0,
                        maxValue: 2000,
                      }}
                      emptyColor="#555555"
                      // legends={[
                      //   {
                      //     anchor: "bottom",
                      //     translateX: 0,
                      //     translateY: 30,
                      //     length: 400,
                      //     thickness: 8,
                      //     direction: "row",
                      //     tickPosition: "after",
                      //     tickSize: 3,
                      //     tickSpacing: 4,
                      //     tickOverlap: false,
                      //     tickFormat: ">-.2s",
                      //     title: "Value →",
                      //     titleAlign: "start",
                      //     titleOffset: 4,
                      //   },
                      // ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="box7">
              <div className="box7-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h5>Sales by Countries</h5>
                    <span>Monthly Sales Overview</span>
                  </div>
                  <div className="card-dropdown">
                    <button>
                      <MoreVertIcon />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <ul>
                    <li className="country-item">
                      <div className="avatar">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/fonts/flags/1x1/us.svg"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            <span className="dollar">$8,567</span>
                            <div className="num up">
                              <KeyboardArrowUpIcon className="icon" />
                              25.8%
                            </div>
                          </h6>
                          <small>United States of America</small>
                        </div>
                        <div className="earning-desc-right">
                          <span>884k</span>
                        </div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="avatar">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/fonts/flags/1x1/br.svg"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            <span className="dollar">$2,415k</span>
                            <div className="num down">
                              <KeyboardArrowDownIcon className="icon" />
                              6.2%
                            </div>
                          </h6>
                          <small>Brazil</small>
                        </div>
                        <div className="country-desc-right">
                          <span>645k</span>
                        </div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="avatar">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/fonts/flags/1x1/in.svg"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            <span className="dollar">$865k</span>
                            <div className="num up">
                              <KeyboardArrowUpIcon />
                              12.4%
                            </div>
                          </h6>
                          <small>India</small>
                        </div>
                        <div className="country-desc-right">
                          <span>148k</span>
                        </div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="avatar">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/fonts/flags/1x1/au.svg"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            <span className="dollar">$745k</span>
                            <div className="num down">
                              <KeyboardArrowDownIcon className="icon" />
                              11.9%
                            </div>
                          </h6>
                          <small>Australia</small>
                        </div>
                        <div className="country-desc-right">
                          <span>86k</span>
                        </div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="avatar">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/fonts/flags/1x1/fr.svg"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            <span className="dollar">$45k</span>
                            <div className="num up">
                              <KeyboardArrowUpIcon className="icon" />
                              16.2%
                            </div>
                          </h6>
                          <small>France</small>
                        </div>
                        <div className="country-desc-right">
                          <span>42k</span>
                        </div>
                      </div>
                    </li>
                    <li className="country-item">
                      <div className="avatar">
                        <img
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/vendor/fonts/flags/1x1/cn.svg"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            <span className="dollar">$12k</span>
                            <div className="num up">
                              <KeyboardArrowUpIcon className="icon" />
                              14.8%
                            </div>
                          </h6>
                          <small>China</small>
                        </div>
                        <div className="country-desc-right">
                          <span>18k</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box8">
              <div className="box8-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h5>Sales Stats</h5>
                  </div>
                  <div className="card-dropdown">
                    <button>
                      <MoreVertIcon />
                    </button>
                  </div>
                </div>
                <div className="circularBar">
                  <CircularProgressbar value={75} text="75% Sales" />
                </div>
                <div className="card-body">
                  <div className="card-body-left">
                    <span className="dot"></span>
                    Conversion Ratio
                  </div>
                  <div className="card-body-right">
                    <span className="dot"></span>
                    Total requirements
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row4">
            <div className="box9">
              <div className="box9-content">
                <div className="card-header">
                  <div className="card-header-left">
                    <h5>Team Members</h5>
                  </div>
                  <div className="card-dropdown">
                    <button>
                      <MoreVertIcon />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>NAME</TableCell>
                          <TableCell align="left">PROJECT</TableCell>
                          <TableCell align="left">TASK</TableCell>
                          <TableCell align="left">PROGRESS</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowsBox9.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              <div className="name-wrapper">
                                <div className="avatar">
                                  <img src={row.avatar} alt="" />
                                </div>
                                <div className="name-details">
                                  <div className="name-team">{row.name}</div>
                                  <div className="name-title">{row.title}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell align="left">
                              <div className={`${row.color} project-name`}>
                                {row.project}
                              </div>
                            </TableCell>
                            <TableCell align="left">{row.task}</TableCell>
                            <TableCell align="center">
                              {" "}
                              <CircularProgressbar
                                value={row.progress}
                                className={row.color}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
            <div className="box10">
              <div className="box10-content">
                <div className="chart">
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>CUSTOMER</TableCell>
                          <TableCell align="left">AMOUNT</TableCell>
                          <TableCell align="left">STATUS</TableCell>
                          <TableCell align="center">PAID BY</TableCell>
                          <TableCell align="center">ACTIONS</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowsBox10.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              <div className="customer-wrapper">
                                <div className="customer-avatar">
                                  <img src={row.avatar} alt="" />
                                </div>
                                <div className="customer-details">
                                  <div className="customer-team">
                                    {row.name}
                                  </div>
                                  <div className="customer-email">
                                    {row.email}
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell align="left">${row.amount}</TableCell>
                            <TableCell align="left">
                              <div className={`${row.status} status`}>{row.status}</div>
                            </TableCell>
                            <TableCell align="center">
                              <div>
                                <img src={row.paidBy} alt="" />
                              </div>
                            </TableCell>
                            <TableCell align="center">
                              <div className="action">
                                <button>
                                  <MoreVertIcon />
                                </button>
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
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
