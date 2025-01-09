import React from "react";
import Day from "./Day";
import "../../style/calendar/MonthView.scss";

export default function MonthView({ currentMonthData }) {
  // console.log(currentMonthData);

  return (
    <div className="calendar-right">
      {currentMonthData.map((row, i) => {
        return (
          <div key={i} className="month-row">
            {row.map((day, index) => {
              return <Day day={day} key={index} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
