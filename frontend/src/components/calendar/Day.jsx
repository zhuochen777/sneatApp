import React, { useContext, useEffect, useState } from "react";
import "../../style/calendar/Day.scss";
import dayjs from "dayjs";
import { monthContext } from "../../App";
// import axios from "axios";
// import ClearIcon from "@mui/icons-material/Clear";

export default function Day({ day, setShowMore,getDayEvents }) {
  // let url = process.env.REACT_APP_baseURL;
  const {
    monthIndex,
    toggleDrawer,
    setSmallCalendarSelectedDay,
    setSelectedEvent,
    allSavedEvents,
    filteredEvents,
    setFilteredEvents,
    setShowMoreSelectedDay
  } = useContext(monthContext);

  const month = monthIndex + 1;

  const [dayEvents, setDayEvents] = useState([]);
  // const [showMore, setShowMore] = useState(false);

  const selectEventHandle = (e, event) => {
    e.stopPropagation();
    setSelectedEvent(event);
    toggleDrawer(true);
  };

  const showMoreHandle = (e) => {
    e.stopPropagation();
    setShowMore(true);
    setShowMoreSelectedDay(day)
    getDayEvents(dayEvents)
  };

  useEffect(() => {
    const eventsOfTheDay = filteredEvents.filter(
      (event) =>
        Date.parse(dayjs(event.startDate).format("MM-DD-YY")) <=
          Date.parse(day.format("MM-DD-YY")) &&
        Date.parse(day.format("MM-DD-YY")) <=
          Date.parse(dayjs(event.endDate).format("MM-DD-YY"))
    );

    const compare = (a, b) => {
      if (a.startDate < b.startDate) {
        return -1;
      }

      if (a.startDate > b.startDate) {
        return 1;
      }

      return 0;
    };

    eventsOfTheDay.sort(compare);
    setDayEvents(eventsOfTheDay);
  }, [day, filteredEvents]);



  return (
    <div
      className={`day-box ${
        day.format("MM-DD-YY") === dayjs().format("MM-DD-YY") ? "today" : ""
      }`}
      onClick={() => {
        setSmallCalendarSelectedDay(day);
        toggleDrawer(true);
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
        {dayEvents.length <= 2
          ? dayEvents.map((event, index) => (
              <div
                key={index}
                className={`${event.calendar}-event event-name`}
                onClick={(e) => selectEventHandle(e, event)}
              >
                <span>
                  {dayjs(event.startDate).format("h:mm A")} {event.title}
                </span>
              </div>
            ))
          : dayEvents.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className={`${event.calendar}-event event-name`}
                onClick={(e) => selectEventHandle(e, event)}
              >
                <span>
                  {dayjs(event.startDate).format("h:mm A")} {event.title}
                </span>
              </div>
            ))}
        {dayEvents.length > 2 && (
          <div
            className="
        more-text"
            onClick={(e) => showMoreHandle(e)}
          >
            +{dayEvents.length - 2} more
          </div>
        )}
      </div>
    </div>
  );
}
