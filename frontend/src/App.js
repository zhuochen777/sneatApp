import { Navigate, useRoutes } from "react-router-dom";
// import routers from "./router";
import { Routes, Route } from "react-router-dom";
import Analytics from "./pages/dashboards/Analytics";
import Ecommerce from "./pages/dashboards/Ecommerce";
import Email from "./pages/apps/Email";
import Chat from "./pages/apps/Chat";
import Emails from "./components/email/Emails";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Register from "./pages/auth/Register";
import { useEffect, useState } from "react";
import { createContext } from "react";
import "./App.scss";
import Crm from "./pages/dashboards/Crm";
import Calendar from "./pages/apps/Calendar";
import dayjs from "dayjs";
import axios from "axios";
import Kanban from "./pages/apps/Kanban";

export const themeContext = createContext(null);
export const monthContext = createContext(null);

function App() {
  let url = process.env.REACT_APP_baseURL;
  const [theme, setTheme] = useState("light");

  //for month change in Calendar module
  //useState in calendar module

  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonthIndex, setSmallCalendarMonthIndex] = useState(null);
  const [smallCalendarSelectedDay, setSmallCalendarSelectedDay] = useState(
    dayjs()
  );
  const [openDrawer, setOpenDrawer] = useState(false);
  const [allSavedEvents, setAllSavedEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filtersAllChecked, setFiltersAllChecked] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showMoreSelectedDay, setShowMoreSelectedDay] = useState(null)

  const toggleTheme = (themeMode) => {
    setTheme(themeMode);
  };

  //functions in Calendar module
  const toggleDrawer = (flag) => {
    setOpenDrawer(flag);
    if (!flag) {
      setSelectedEvent(null);
    }
  };

  const getAllSavedEvents = async () => {
    const result = await axios.get(url + `/calendar/all`);
    setAllSavedEvents(result.data);
  };

  const selectAllFilters = (e) => {
    setFiltersAllChecked(e.target.checked);

    if (e.target.checked) {
      setFilteredEvents(allSavedEvents);
      setSelectedFilters(["Personal", "Business", "Family", "Holiday", "ETC"]);
    } else {
      setFilteredEvents([]);
      setSelectedFilters([]);
    }
  };

  useEffect(() => {
    if (setSmallCalendarMonthIndex !== null) {
      setMonthIndex(smallCalendarMonthIndex);
    }
  }, [smallCalendarMonthIndex]);

  useEffect(() => {
    getAllSavedEvents();
    setFilteredEvents(allSavedEvents);

    if (filtersAllChecked) {
      setFilteredEvents(allSavedEvents);
    } else {
      setFilteredEvents(
        allSavedEvents.filter((event) =>
          selectedFilters.includes(event.calendar)
        )
      );
    }
  }, [allSavedEvents, filtersAllChecked, selectedFilters]);

  useEffect(() => {
    setSelectedFilters(["Personal", "Business", "Family", "Holiday", "ETC"]);
  }, []);

  return (
    <monthContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonthIndex,
        setSmallCalendarMonthIndex,
        smallCalendarSelectedDay,
        setSmallCalendarSelectedDay,
        openDrawer,
        setOpenDrawer,
        toggleDrawer,
        selectedEvent,
        setSelectedEvent,
        allSavedEvents,
        selectedFilters,
        setSelectedFilters,
        filtersAllChecked,
        setFiltersAllChecked,
        selectAllFilters,
        filteredEvents,
        showMoreSelectedDay, setShowMoreSelectedDay
      }}
    >
      <themeContext.Provider value={{ theme, toggleTheme }}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboards/analytics" element={<Analytics />} />
            <Route path="dashboards/ecommerce" element={<Ecommerce />} />
            <Route path="dashboards/crm" element={<Crm />} />
            <Route path="apps/email" element={<Email />}>
              <Route index element={<Navigate to="inbox" />} />
              <Route path=":type" element={<Emails />} />
              <Route path="label/:labeltype" element={<Emails />} />
            </Route>
            <Route path="apps/chat" element={<Chat />} />
            <Route path="apps/calendar" element={<Calendar />} />
            <Route path="apps/kanban" element={<Kanban />} />
          </Routes>
        </div>
      </themeContext.Provider>
    </monthContext.Provider>
  );
}

export default App;
