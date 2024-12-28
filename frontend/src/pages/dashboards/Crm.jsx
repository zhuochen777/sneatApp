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
