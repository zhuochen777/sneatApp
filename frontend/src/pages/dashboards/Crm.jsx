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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
                    <span>+42.6%</span>
                    <span>Than last year</span>
                  </div>
                  <div className="btn-group">
                    <button>2022</button>
                    <button><KeyboardArrowDownIcon/></button>
                  </div>
                </div>
                <div className="card-body"></div>
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
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/laptop-secondary.png"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            $8,567{" "}
                            <div className="num up">
                              <ArrowUpwardIcon />
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
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/computer.png"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            $2,415k{" "}
                            <div className="num down">
                              <ArrowDownwardIcon />
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
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/watch.png"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            $865k{" "}
                            <div className="num up">
                              <ArrowUpwardIcon />
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
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/watch.png"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            $745k{" "}
                            <div className="num down">
                              <ArrowDownwardIcon />
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
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/watch.png"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            $45k{" "}
                            <div className="num up">
                              <ArrowUpwardIcon />
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
                          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/watch.png"
                          alt=""
                        />
                      </div>
                      <div className="country-desc">
                        <div className="country-desc-left">
                          <h6>
                            $12k{" "}
                            <div className="num up">
                              <ArrowUpwardIcon />
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
                <div className="chart"></div>
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
        </div>
      </div>
    </div>
  );
}
