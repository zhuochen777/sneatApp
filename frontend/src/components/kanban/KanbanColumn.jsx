import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../style/kanban/KanbanColumn.scss";
import Task from "./Task";

export default function KanbanColumn() {
  return (
    <div className="column-wrapper">
      <div className="column-header">
        <h5>In Progress</h5>
        <button className="more-icon-wrapper">
          <MoreVertIcon className="more-icon" />
        </button>
      </div>
      <div className="tasks">
        <Task />
        <Task />
      </div>
    </div>
  );
}
