import React, { useEffect, useState, useContext } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../style/calendar/Calendar.scss";
import Footer from "../../components/Footer";
import dayjs from "dayjs";
import CalendarSidebar from "../../components/calendar/CalendarSidebar";
import MonthView from "../../components/calendar/MonthView";
import { monthContext } from "../../App";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

export default function Calendar() {
  let url = process.env.REACT_APP_baseURL;
  let navigate = useNavigate();

  const {
    monthIndex,
    openDrawer,
    toggleDrawer,
    smallCalendarSelectedDay,
    selectedEvent,
    setSelectedEvent,
  } = useContext(monthContext);

  const [currentMonthData, setCurrentMonthData] = useState([]);
  // const [valueStartDate, setValueStartDate] = useState(dayjs("2025-01-10"));
  // const [valueEndDate, setValueEndDate] = useState(dayjs("2025-01-10"));
  // const [eventDetails, setEventDetails] = useState({
  //   title: "",
  //   calendar: "Business",
  //   startDate: smallCalendarSelectedDay,
  //   endDate: smallCalendarSelectedDay,
  //   eventURL: "",
  //   guests: [],
  //   description: "",
  // });

  const [title, setTitle] = useState("");
  const [calendar, setCalendar] = useState("Business");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [eventURL, setEventURL] = useState("");
  const [guests, setGuests] = useState([]);
  const [description, setDescription] = useState("");

  const [showWarning, setShowWarning] = useState(false);

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

  // const eventDetailsChangeHandle = (e) => {
  //   setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  // };

  const addValidateHandle = () => {
    if (title.length === 0) {
      setShowWarning(true);
      return false;
    } else {
      return true;
    }
  };

  const resetEventHandle = () => {
    setTitle("");
    setCalendar("Business");
    setStartDate(smallCalendarSelectedDay);
    setEndDate(smallCalendarSelectedDay);
    setEventURL("");
    setGuests([]);
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      calendar,
      startDate: startDate.toDate(),
      endDate: endDate.toDate(),
      eventURL,
      guests,
      description,
    };

    if (selectedEvent) {
      if (addValidateHandle()) {
        const result = await axios.post(
          url + `/calendar/update/${selectedEvent._id}`,
          { calendarEvent }
        );
        if (result.data === "success") {
          toggleDrawer(false);
        }
      }
    } else {
      if (addValidateHandle()) {
        const result = await axios.post(url + `/calendar/add`, {
          calendarEvent,
        });
        if (result.data === "success") {
          toggleDrawer(false);
        }
      }
    }
  };

  const deleteHandle = async () => {
    const result = await axios.post(url + `/calendar/delete/${selectedEvent._id}`);
    if (result.data === "success") {
      toggleDrawer(false);
    }
  };

  useEffect(() => {
    setCurrentMonthData(getMonth());
  }, []);

  useEffect(() => {
    setCurrentMonthData(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    setStartDate(smallCalendarSelectedDay);
    setEndDate(smallCalendarSelectedDay);
  }, [smallCalendarSelectedDay]);

  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title);
      setCalendar(selectedEvent.calendar);
      setStartDate(dayjs(selectedEvent.startDate));
      setEndDate(dayjs(selectedEvent.endDate));
      setEventURL(selectedEvent.eventURL);
      setGuests(selectedEvent.guests);
      setDescription(selectedEvent.description);
    } else {
      setTitle("");
      setCalendar("Business");
      setStartDate(null);
      setEndDate(null);
      setEventURL("");
      setGuests([]);
      setDescription("");
    }
  }, [selectedEvent]);

  const calendars = [
    {
      value: "Personal",
      label: "Personal",
    },
    {
      value: "Business",
      label: "Business",
    },
    {
      value: "Family",
      label: "Family",
    },
    {
      value: "Holiday",
      label: "Holiday",
    },
    {
      value: "ETC",
      label: "ETC",
    },
  ];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = ["Bruce", "Clark", "John", "Diana", "Barry"];

  function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  const theme = useTheme();

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
      <Drawer
        open={openDrawer}
        onClose={() => {
          toggleDrawer(false);
          setSelectedEvent(null);
        }}
        anchor="right"
      >
        <form className="event-wrapper" style={{ width: "400px" }}>
          <div className="event-header">
            {selectedEvent ? (
              <>
                <h5>Update Event</h5>{" "}
                <div className="event-header-right">
                  <button>
                    <DeleteOutlineIcon onClick={() => deleteHandle()} />
                  </button>
                  <button onClick={() => toggleDrawer(false)}>
                    <CloseIcon />
                  </button>
                </div>
              </>
            ) : (
              <>
                <h5>Add Event</h5>{" "}
                <div className="event-header-right">
                  <button onClick={() => toggleDrawer(false)}>
                    <CloseIcon />
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="event-body">
            <form action="">
              {showWarning ? (
                <TextField
                  error
                  id="outlined-error-title"
                  label="Title"
                  className="input-field title-input"
                  helperText="This field is required"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <TextField
                  id="outlined-title"
                  label="Title"
                  variant="outlined"
                  className="input-field title-input"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              )}
              <TextField
                id="outlined-select-calendar"
                select
                label="Calendar"
                defaultValue="Business"
                // helperText="Please select your currency"
                className="input-field"
                name="calendar"
                value={calendar}
                onChange={(e) => setCalendar(e.target.value)}
              >
                {calendars.map((calendar) => (
                  <MenuItem key={calendar.value} value={calendar.value}>
                    {calendar.label}
                  </MenuItem>
                ))}
              </TextField>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  className="input-field"
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  className="input-field"
                />
              </LocalizationProvider>
              <TextField
                id="outlined-title"
                label="Event URL"
                variant="outlined"
                className="input-field"
                name="eventURL"
                value={eventURL}
                onChange={(e) => setEventURL(e.target.value)}
              />
              <FormControl>
                <InputLabel id="demo-multiple-name-label">Guests</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  name="guests"
                  className="input-field"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, guests, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Textarea
                placeholder="Description"
                minRows={4}
                className="input-field"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="buttons-wrapper">
                <Button
                  variant="contained"
                  className="btn-add"
                  onClick={(e) => handleSubmit(e)}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  className="btn-reset"
                  onClick={() => {
                    resetEventHandle();
                  }}
                >
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </form>
      </Drawer>
    </>
  );
}
