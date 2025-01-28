import React, { useState, useContext, useEffect } from "react";
import "../../style/calendar/CalendarSidebar.scss";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SmallCalendar from "./SmallCalendar";
import { monthContext } from "../../App";

export default function CalendarSidebar() {
  const {
    toggleDrawer,
    selectedFilters,
    setSelectedFilters,
    filtersAllChecked,
    allSavedEvents,
    selectAllFilters,
    setFiltersAllChecked,
  } = useContext(monthContext);

  const selecteFilterHandle = (e) => {
    const filter = String(e.target.value);

    if (selectedFilters.includes(filter)) {
      setSelectedFilters((prev) => prev.filter((item) => item !== filter));
      setFiltersAllChecked(false);
    } else {
      setSelectedFilters((prev) => [...prev, filter]);
    }
  };

  return (
    <>
      <div className="calendar-left">
        <div className="sidebar-top">
          <div className="btn-wrapper">
            <button onClick={() => toggleDrawer(true)}>
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
              control={
                <Checkbox
                  className={`viewAll ${
                    filtersAllChecked || selectedFilters.length === 5
                      ? "selected"
                      : ""
                  }`}
                  checked={filtersAllChecked || selectedFilters.length === 5}
                  defaultChecked
                  disabled={allSavedEvents.length === 0}
                  onChange={(e) => {
                    selectAllFilters(e);
                  }}
                />
              }
              label="View All"
            />
            <FormControlLabel
              control={
                <Checkbox
                  className={`personal ${
                    selectedFilters.includes("Personal") ? "selected" : ""
                  }`}
                  value="Personal"
                  onChange={(e) => selecteFilterHandle(e)}
                  checked={selectedFilters.includes("Personal")}
                />
              }
              label="Personal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  className={`business ${
                    selectedFilters.includes("Business") ? "selected" : ""
                  }`}
                  value="Business"
                  onChange={(e) => selecteFilterHandle(e)}
                  checked={selectedFilters.includes("Business")}
                />
              }
              label="Business"
            />
            <FormControlLabel
              control={
                <Checkbox
                  className={`family ${
                    selectedFilters.includes("Family") ? "selected" : ""
                  }`}
                  value="Family"
                  onChange={(e) => selecteFilterHandle(e)}
                  checked={selectedFilters.includes("Family")}
                />
              }
              label="Family"
            />
            <FormControlLabel
              control={
                <Checkbox
                  className={`holiday ${
                    selectedFilters.includes("Holiday") ? "selected" : ""
                  }`}
                  value="Holiday"
                  onChange={(e) => selecteFilterHandle(e)}
                  checked={selectedFilters.includes("Holiday")}
                />
              }
              label="Holiday"
            />
            <FormControlLabel
              control={
                <Checkbox
                  className={`etc ${
                    selectedFilters.includes("ETC") ? "selected" : ""
                  }`}
                  value="ETC"
                  onChange={(e) => selecteFilterHandle(e)}
                  checked={selectedFilters.includes("ETC")}
                />
              }
              label="ETC"
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
}
