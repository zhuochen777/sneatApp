import React, { useContext, useEffect, useState } from "react";
import "../../style/calendar/Day.scss";
import dayjs from "dayjs";
import { monthContext } from "../../App";
import axios from "axios";

export default function Day({ day }) {
  let url = process.env.REACT_APP_baseURL;
  const { monthIndex, setOpenDrawer, setSmallCalendarSelectedDay } =
    useContext(monthContext);

  const month = monthIndex + 1;
  // console.log("month", month);
  // console.log("MM", parseInt(day.format("MM")));
  const [allSavedEvents, setAllSavedEvents] = useState([]);
  const [dayEvents, setDayEvents] = useState([])

  const getAllSavedEvents = async () => {
    const result = await axios.get(url + `/calendar/all`);
    setAllSavedEvents(result.data);
  };

  useEffect(() => {
    const eventsOfTheDay = allSavedEvents.filter(
      (event) =>
        dayjs(event.startDay).format("MM-DD-YY") >=
          day.format("MM-DD-YY") &&
        dayjs(event.endDate).format("MM-DD-YY") <= day.format("MM-DD-YY")
    );
    setDayEvents(eventsOfTheDay)
  }, [day, allSavedEvents]);

  useEffect(() => {
    getAllSavedEvents();
  }, []);

  return (
    <div
      className={`day-box ${
        day.format("MM-DD-YY") === dayjs().format("MM-DD-YY") ? "today" : ""
      }`}
      onClick={() => {
        setOpenDrawer(true);
        setSmallCalendarSelectedDay(day);
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
        {dayEvents.map((event, index)=><div>
          {event.title}
        </div>)}
      </div>
    </div>
  );
}
