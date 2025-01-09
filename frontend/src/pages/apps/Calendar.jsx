import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../style/calendar/Calendar.scss";
import Footer from "../../components/Footer";
import dayjs from "dayjs";
import CalendarSidebar from "../../components/calendar/CalendarSidebar";
import MonthView from "../../components/calendar/MonthView";

export default function Calendar() {
  const [currentMonthData, setCurrentMonthData] = useState([]);

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
    setCurrentMonthData(getMonth());
  }, []);

  return (
    <>
      <div className="calendar">
        <Sidebar />
        <div className="container">
          <Navbar />
          <div
            className="calendar-boxes"
            style={{ marginTop: "100px", marginBottom: "24px" }}
          >
            <div className="calendar-content">
              <CalendarSidebar />
              <MonthView currentMonthData={currentMonthData} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
