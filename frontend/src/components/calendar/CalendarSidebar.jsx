import React, { useState } from "react";
import "../../style/calendar/CalendarSidebar.scss";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SmallCalendar from "./SmallCalendar";
import Drawer from '@mui/material/Drawer';

export default function CalendarSidebar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (flag) => {
    setOpenDrawer(flag);
  };
  return (
    <>
      <div className="calendar-left">
        <div className="sidebar-top">
          <div className="btn-wrapper">
            <button onClick={()=>{toggleDrawer(true)}}>
              <span className="add-icon">
                <AddIcon />
              </span>
              <span className="add-text">Add Event</span>
            </button>
          </div>
        </div>
        <div className="sidebar-middle">
          <SmallCalendar />
        </div>
        <div className="sidebar-bottom">
          <h5>Event Filters</h5>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked className="viewAll" />}
              label="View All"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked className="personal" />}
              label="Personal"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked className="business" />}
              label="Business"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked className="family" />}
              label="Family"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked className="holiday" />}
              label="Holiday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked className="etc" />}
              label="ETC"
            />
          </FormGroup>
        </div>
      </div>
      <Drawer open={openDrawer} onClose={()=>toggleDrawer(false)} anchor="right">
        <div className="event-wrapper" style={{width:"400px"}}>

        </div>
      </Drawer>
    </>
  );
}
