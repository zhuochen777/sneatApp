import React from "react";
import "../../style/calendar/Day.scss";
import dayjs from "dayjs";

export default function Day({ day }) {
  const month = dayjs().month() + 1;
  console.log("month", month);
  console.log("MM", parseInt(day.format("MM")));

  return (
    <div className={`day-box ${day.format("MM-DD-YY")===dayjs().format("MM-DD-YY")?"today":""}`}>
      <header className="day-box-top">
        <p
          className={`
            ${
              month == day.format("MM") ? "currentMonth" : "notCurrentMonth"
            } day`}
        >
          {parseInt(day.format("DD"))}
        </p>
      </header>
    </div>
  );
}
