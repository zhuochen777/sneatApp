import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../style/kanban/KanbanColumn.scss";
import Task from "./Task";
import AddIcon from "@mui/icons-material/Add";
import {
  useSortable,
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function KanbanColumn(props) {
  const { column } = props;
  const tasks = column.tasks;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: column.id });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div
      className="column-wrapper"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="column-header">
        <h5 style={{ cursor: "grab" }}>{column.title}</h5>
        <button className="more-icon-wrapper">
          <MoreVertIcon className="more-icon" />
        </button>
      </div>
      <div className="tasks">
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <Task task={task} />
              </React.Fragment>
            );
          })}
      </div>
      <div className="column-bottom">
        <p className="bottom-content">
          <AddIcon className="add-icon" />
          <span className="add-text">Add New Item</span>
        </p>
      </div>
    </div>
  );
}
