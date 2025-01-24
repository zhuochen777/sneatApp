import React, { useContext, useEffect, useState } from "react";
import "../../style/calendar/Day.scss";
import dayjs from "dayjs";
import { monthContext } from "../../App";
// import axios from "axios";

export default function Day({ day }) {
  // let url = process.env.REACT_APP_baseURL;
  const {
    monthIndex,
    toggleDrawer,
    setSmallCalendarSelectedDay,
    setSelectedEvent,
    allSavedEvents
  } = useContext(monthContext);

  const month = monthIndex + 1;

  const [dayEvents, setDayEvents] = useState([]);
  
  const selectEventHandle = (e, event) => {
    e.stopPropagation();
    setSelectedEvent(event);
    toggleDrawer(true);
  };

  useEffect(() => {
    const eventsOfTheDay = allSavedEvents.filter(
      (event) =>
        Date.parse(dayjs(event.startDate).format("MM-DD-YY")) <=
          Date.parse(day.format("MM-DD-YY")) &&
        Date.parse(day.format("MM-DD-YY")) <=
          Date.parse(dayjs(event.endDate).format("MM-DD-YY"))
    );

    setDayEvents(eventsOfTheDay);
  }, [day, allSavedEvents]);


  return (
    <div
      className={`day-box ${
        day.format("MM-DD-YY") === dayjs().format("MM-DD-YY") ? "today" : ""
      }`}
      onClick={() => {
        setSmallCalendarSelectedDay(day)
        toggleDrawer(true)
      }}
    >
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
      <div className="day-box-content">
        {dayEvents.map((event, index) => (
          <div
            key={index}
            className={`${event.calendar}-event event-name`}
            onClick={(e) => selectEventHandle(e, event)}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}
