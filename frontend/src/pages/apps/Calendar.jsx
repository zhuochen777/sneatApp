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

export default function Calendar() {
  let url = process.env.REACT_APP_baseURL;

  const { monthIndex, openDrawer, toggleDrawer, smallCalendarSelectedDay } =
    useContext(monthContext);
  const [currentMonthData, setCurrentMonthData] = useState([]);
  // const [valueStartDate, setValueStartDate] = useState(dayjs("2025-01-10"));
  // const [valueEndDate, setValueEndDate] = useState(dayjs("2025-01-10"));
  const [eventDetails, setEventDetails] = useState({
    title: "",
    calendar: "Business",
    startDate: smallCalendarSelectedDay,
    endDate: smallCalendarSelectedDay,
    eventURL: "",
    guests: [],
    description: "",
  });

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
    if (eventDetails.title.length === 0) {
      setShowWarning(true);
      return false;
    } else {
      return true;
    }
  };

  const addEventHandle = async () => {
    if (addValidateHandle()) {
      const result = await axios.post(url + `/calendar/add`, {
        ...eventDetails,
        startDate: eventDetails.startDate.toDate(),
        endDate: eventDetails.endDate.toDate(),
      });

      if (result.data === "success") {
        toggleDrawer(false);
      }
    }
  };

  const resetEventHandle = () => {
    setEventDetails({
      ...eventDetails,
      title: "",
      calendar: "Business",
      startDate: smallCalendarSelectedDay,
      endDate: smallCalendarSelectedDay,
      eventURL: "",
      guests: [],
      description: "",
    });
  };

  const closeEventDrawer=()=>{
    toggleDrawer(false)
    resetEventHandle()
  }

  useEffect(() => {
    setCurrentMonthData(getMonth());
  }, []);

  useEffect(() => {
    setCurrentMonthData(getMonth(monthIndex));
  }, [monthIndex]);


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
        onClose={() => toggleDrawer(false)}
        anchor="right"
      >
        <div className="event-wrapper" style={{ width: "400px" }}>
          <div className="event-header">
            <h5>Add Event</h5>
            <button onClick={() => closeEventDrawer()}>
              <CloseIcon />
            </button>
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
                  value={eventDetails.title}
                  onChange={(e) =>
                    setEventDetails({ ...eventDetails, title: e.target.value })
                  }
                />
              ) : (
                <TextField
                  id="outlined-title"
                  label="Title"
                  variant="outlined"
                  className="input-field title-input"
                  name="title"
                  required
                  value={eventDetails.title}
                  onChange={(e) =>
                    setEventDetails({ ...eventDetails, title: e.target.value })
                  }
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
                value={eventDetails.calendar}
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, calendar: e.target.value })
                }
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
                  value={eventDetails.startDate}
                  onChange={(newValue) =>
                    setEventDetails({ ...eventDetails, startDate: newValue })
                  }
                  className="input-field"
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="End Date"
                  value={eventDetails.endDate}
                  onChange={(newValue) =>
                    setEventDetails({ ...eventDetails, endDate: newValue })
                  }
                  className="input-field"
                />
              </LocalizationProvider>
              <TextField
                id="outlined-title"
                label="Event URL"
                variant="outlined"
                className="input-field"
                name="eventURL"
                value={eventDetails.eventURL}
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, eventURL: e.target.value })
                }
              />
              <FormControl>
                <InputLabel id="demo-multiple-name-label">Guests</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={eventDetails.guests}
                  name="guests"
                  className="input-field"
                  onChange={(e) =>
                    setEventDetails({ ...eventDetails, guests: e.target.value })
                  }
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, eventDetails.guests, theme)}
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
                value={eventDetails.description}
                onChange={(e) =>
                  setEventDetails({
                    ...eventDetails,
                    description: e.target.value,
                  })
                }
              />
              <div className="buttons-wrapper">
                <Button
                  variant="contained"
                  className="btn-add"
                  onClick={() => addEventHandle()}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  className="btn-reset"
                  onClick={(e) => {
                    resetEventHandle();
                  }}
                >
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Drawer>
    </>
  );
}
