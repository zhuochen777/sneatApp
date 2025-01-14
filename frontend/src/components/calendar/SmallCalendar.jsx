import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import "../../style/calendar/SmallCalendar.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { monthContext } from "../../App";

export default function SmallCalendar() {
  const {
    monthIndex,
    setSmallCalendarMonthIndex,
    smallCalendarSelectedDay,
    setSmallCalendarSelectedDay,
  } = useContext(monthContext);
  //control local state of the small calendar
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonthData, setCurrentMonthData] = useState([]);
  const month = currentMonthIndex + 1;

  const handlePrevMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };
  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
      return Array(7)
        .fill(null)
        .map(() => {
          currentMonthCount++;
          return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
  };

  useEffect(() => {
    setCurrentMonthData(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  return (
    <div className="small-calendar">
      <header className="small-calendar-top">
        <button className="left-icon" onClick={() => handlePrevMonth()}>
          <KeyboardArrowLeftIcon />
        </button>
        <p>
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <button className="right-icon" onClick={() => handleNextMonth()}>
          <KeyboardArrowRightIcon />
        </button>
      </header>
      <table
        style={{ borderCollapse: "collapse", width: "100%", height: "100%" }}
        className="small-calendar-table"
      >
        <thead
          style={{
            height: "40px",
          }}
        >
          <tr className="col-header">
            <th className="dayofWeek">
              <div>Su</div>
            </th>
            <th className="dayofWeek">
              <div>Mo</div>
            </th>
            <th className="dayofWeek">
              <div>Tu</div>
            </th>
            <th className="dayofWeek">
              <div>We</div>
            </th>
            <th className="dayofWeek">
              <div>Th</div>
            </th>
            <th className="dayofWeek">
              <div>Fr</div>
            </th>
            <th className="dayofWeek">
              <div>Sa</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentMonthData.map((row, i) => {
            return (
              <tr key={i} className="month-row">
                {row.map((day, index) => {
                  return (
                    <td
                      className={`${
                        day.format("MM-DD-YY") === dayjs().format("MM-DD-YY")
                          ? "today"
                          : smallCalendarSelectedDay &&
                            day.format("MM-DD-YY") ===
                              smallCalendarSelectedDay.format("MM-DD-YY")
                          ? "selectedDay"
                          : ""
                      } each-day`}
                      key={index}
                      onClick={() => {
                        setSmallCalendarMonthIndex(currentMonthIndex);
                        setSmallCalendarSelectedDay(day);
                      }}
                    >
                      <span
                        className={`
            ${
              month == day.format("MM") ? "currentMonth" : "notCurrentMonth"
            } day`}
                      >
                        {day.format("D")}
                      </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
