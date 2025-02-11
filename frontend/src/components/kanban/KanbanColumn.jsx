import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../../style/kanban/KanbanColumn.scss";
import Task from "./Task";
import AddIcon from "@mui/icons-material/Add";
import { useSortable, SortableContext } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function KanbanColumn(props) {
  const { column, columns, setColumns, currentColumnId, setCurrentColumnId } =
    props;
  const tasks = column.tasks;
  const { attributes, setNodeRef, listeners, transform, transition } =
    useSortable({ id: column.id, data: { type: "column" } });
  const style = { transition, transform: CSS.Translate.toString(transform) };

  const [taskName, setTaskName] = useState("");
  const [showAddTaskSec, setShowAddTaskSec] = useState(false);
  const [showTaskWarning, setShowTaskWarning] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleAddTask = () => {
    if (taskName === "") {
      setShowTaskWarning(true);
      return;
    }

    const id = `task-${uuidv4()}`;
    const column = columns.find((column) => column.id === currentColumnId);
    if (!column) return;
    column.tasks.push({
      id,
      content: taskName,
      img: null,
      labels: [],
      assignees: [],
      attachmentNum: 0,
      chatNum: 0,
    });
    setColumns([...columns]);
    setTaskName("");
    setShowAddTaskSec(false);
    setShowTaskWarning(false);
  };

  return (
    <div
      className="column-wrapper"
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      {showOptions && (
        <div className="edit-delete-wrapper">
          <ul className="list">
            <li
              className="edit"
              onClick={() => {
                setShowOptions(false);
                setEditMode(true);
              }}
            >
              <EditIcon />
              <span>Edit</span>
            </li>
            <li className="delete">
              <DeleteOutlineIcon />
              <span>Delete</span>
            </li>
          </ul>
        </div>
      )}
      {editMode ? (
        <div className="column-header">
          <input type="text" value={column.title} className="header-input" />
          <div className="header-right">
            <OpenWithIcon className="move-icon" />
            <button
              className="more-icon-wrapper"
              onClick={() => setShowOptions((value) => !value)}
            >
              <MoreVertIcon className="more-icon" />
            </button>
          </div>
        </div>
      ) : (
        <div className="column-header">
          <h5>{column.title}</h5>
          <div className="header-right">
            <OpenWithIcon className="move-icon" />
            <button
              className="more-icon-wrapper"
              onClick={() => setShowOptions((value) => !value)}
            >
              <MoreVertIcon className="more-icon" />
            </button>
          </div>
        </div>
      )}
      <div className="tasks">
        <SortableContext items={tasks.map((task) => task.id)}>
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </SortableContext>
      </div>
      <div className="column-bottom">
        <p
          className="bottom-content"
          onClick={() => {
            setShowAddTaskSec((value) => !value);
            setCurrentColumnId(column.id);
          }}
        >
          <AddIcon className="add-icon" />
          <span className="add-text">Add New Item</span>
        </p>
        {showAddTaskSec && (
          <div className="new-wrapper">
            <div className="new-top" style={{ marginBottom: "16px" }}>
              <input
                type="text"
                placeholder={"Add Content"}
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className={showTaskWarning ? "input error" : "input"}
              />
              {showTaskWarning && (
                <p
                  className="error-text"
                  style={{ color: "red", fontSize: "13px" }}
                >
                  Content is required
                </p>
              )}
            </div>
            <div className="button-wrapper">
              <Button
                variant="contained"
                className="add-btn"
                onClick={() => handleAddTask()}
              >
                Add
              </Button>
              <Button
                variant="contained"
                className="cancel-btn"
                onClick={() => setShowAddTaskSec(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
