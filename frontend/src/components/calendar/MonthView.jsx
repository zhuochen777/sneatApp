import React, { useContext, useEffect, useState,useRef } from "react";
import Day from "./Day";
import "../../style/calendar/MonthView.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { monthContext } from "../../App";
import dayjs from "dayjs";
import ClearIcon from "@mui/icons-material/Clear";

export default function MonthView({ currentMonthData }) {
  // console.log(currentMonthData);
  let showMoreInfo = useRef();
  const {
    monthIndex,
    setMonthIndex,
    showMoreSelectedDay,
    toggleDrawer,
    setSelectedEvent,
  } = useContext(monthContext);
  const [showMore, setShowMore] = useState(false);
  const [dayEvents, setDayEvents] = useState([]);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const getDayEvents = (dayEvents) => {
    setDayEvents(dayEvents);
  };

  const selectEventHandle = (e, event) => {
    e.stopPropagation();
    setSelectedEvent(event);
    toggleDrawer(true);
  };

  useEffect(() => {
    let showMoreInfoHandle = (e) => {
      if (!showMoreInfo.current?.contains(e.target))
        setShowMore(false);
    };

    document.addEventListener("mousedown", showMoreInfoHandle);

    return () => {
      document.removeEventListener("mousedown", showMoreInfoHandle);
    };
  });

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
                      <Day
                        day={day}
                        key={index}
                        setShowMore={setShowMore}
                        getDayEvents={getDayEvents}
                      />
                      {showMore && day === showMoreSelectedDay && (
                        <div className="show-more" ref={showMoreInfo}>
                          <div className="show-more-header">
                            <span className="text">
                              {day.format("MMMM D, YYYY")}
                            </span>
                            <span className="icon-wrapper">
                              <ClearIcon
                                className="clear-icon"
                                onClick={() => setShowMore(false)}
                              />
                            </span>
                          </div>
                          <div className="show-more-body">
                            {dayEvents.map((event, index) => (
                              <div
                                key={index}
                                className={`${event.calendar}-event event-name`}
                                onClick={(e) => selectEventHandle(e, event)}
                              >
                                <span>
                                  {dayjs(event.startDate).format("h:mm A")}{" "}
                                  {event.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
