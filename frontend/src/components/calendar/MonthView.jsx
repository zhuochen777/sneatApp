import React, { useContext } from "react";
import Day from "./Day";
import "../../style/calendar/MonthView.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { monthContext } from "../../App";
import dayjs from "dayjs";

export default function MonthView({ currentMonthData }) {
  // console.log(currentMonthData);
  const { monthIndex, setMonthIndex } = useContext(monthContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  return (
    <div className="calendar-right">
      <div className="calendar-right-top">
        <div className="toolbar-left">
          <button className="btn-left" onClick={() => handlePrevMonth()}>
            <KeyboardArrowLeftIcon />
          </button>
          <button className="btn-right">
            <KeyboardArrowRightIcon onClick={() => handleNextMonth()} />
          </button>
          <h2>
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </h2>
        </div>
        <div className="toolbar-right">
          {/* 
          week, day, list view not implemented
          <button className="month btn selected">Month</button>
          <button className="week btn">Week</button>
          <button className="day btn">Day</button> */}
        </div>
      </div>
      <div className="calendar-right-bottom">
        <table>
          <thead>
            <tr className="col-header">
              <th className="dayofWeek">
                <div>Sun</div>
              </th>
              <th className="dayofWeek">
                <div>Mon</div>
              </th>
              <th className="dayofWeek">
                <div>Tue</div>
              </th>
              <th className="dayofWeek">
                <div>Wed</div>
              </th>
              <th className="dayofWeek">
                <div>Thu</div>
              </th>
              <th className="dayofWeek">
                <div>Fri</div>
              </th>
              <th className="dayofWeek">
                <div>Sat</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentMonthData.map((row, idx) => (
              <tr key={idx} className="month-row">
                {row.map((day, index) => {
                  return (
                    <td className="each-day">
                      <Day day={day} key={index} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
