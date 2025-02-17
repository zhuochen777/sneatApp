import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../style/kanban/Kanban.scss";
import KanbanColumn from "../../components/kanban/KanbanColumn";
import AddIcon from "@mui/icons-material/Add";
// import { initData } from "../../actions/initData";

import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Textarea from "@mui/joy/Textarea";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

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

const labels = [
  "UX",
  "Code Review",
  "Dashboard",
  "Images",
  "App",
  "Charts & Map",
];

export const initData = [
  {
    id: "column-1",
    title: "In Progress 1",
    tasks: [
      {
        id: "task-1",
        content: "Research FQA page UX",
        dueDate: "12-30-2025",
        img: null,
        labels: ["UX"],
        assignees: [
          {
            name: "John Doe",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png",
          },
          {
            name: "Jane Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/2.png",
          },
          {
            name: "Robert Johnson",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/3.png",
          },
        ],
        attachmentNum: 4,
        chatNum: 12,
        comment: "",
      },
      {
        id: "task-2",
        content: "Review Javascript code",
        dueDate: "6-30-2025",
        img: null,
        labels: ["Code Review"],
        assignees: [
          {
            name: "Emily Davis",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/4.png",
          },
          {
            name: "Tom Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/5.png",
          },
        ],
        attachmentNum: 2,
        chatNum: 8,
        comment: "",
      },
    ],
  },
  {
    id: "column-2",
    title: "In Review 2",
    tasks: [
      {
        id: "task-3",
        content: "Review completed Apps",
        dueDate: "9-15-2025",
        img: null,
        labels: ["Dashboard"],
        assignees: [
          {
            name: "David Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/6.png",
          },
          {
            name: "Jane Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/2.png",
          },
        ],
        attachmentNum: 8,
        chatNum: 17,
        comment: "",
      },
      {
        id: "task-4",
        content: "Find new images for pages",
        dueDate: "10-20-2025",
        img: "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/apps/kanban/plant.png",
        labels: ["Images"],
        assignees: [
          {
            name: "David Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/6.png",
          },
          {
            name: "John Doe",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png",
          },
          {
            name: "Tom Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/5.png",
          },
          {
            name: "Emily Davis",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/4.png",
          },
        ],
        attachmentNum: 2,
        chatNum: 8,
        comment: "",
      },
    ],
  },
  {
    id: "column-3",
    title: "Done 3",
    tasks: [
      {
        id: "task-5",
        content: "Forms & tables section",
        dueDate: "10-11-2025",
        img: null,
        labels: ["App"],
        assignees: [
          {
            name: "Robert Johnson",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/3.png",
          },
          {
            name: "Jane Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/2.png",
          },
          {
            name: "John Doe",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png",
          },
        ],
        attachmentNum: 5,
        chatNum: 14,
        comment: "",
      },
      {
        id: "task-6",
        content: "Complete charts & maps",
        dueDate: "12-5-2025",
        img: null,
        labels: ["Charts & Maps"],
        assignees: [
          {
            name: "John Doe",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png",
          },
        ],
        attachmentNum: 6,
        chatNum: 21,
        comment: "",
      },
    ],
  },
];

export default function Kanban() {
  const [columns, setColumns] = useState(initData);
  const [activeId, setActiveId] = useState(null); //find selected task/column
  const [columnName, setColumnName] = useState("");
  const [showAddColumnSec, setShowAddColumnSec] = useState(false);
  const [showColumnWarning, setShowColumnWarning] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);
  const [openTaskDrawer, setOpenTaskDrawer] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [showTaskWarning, setShowTaskWarning] = useState(false);

  const handleAddColumn = () => {
    if (columnName === "") {
      setShowColumnWarning(true);
      return;
    }

    const id = `column-${columns.length + 1}`;
    setColumns([...columns, { id, title: columnName, tasks: [] }]);
    setShowColumnWarning(false);
    setShowAddColumnSec(false);
    setColumnName("");
  };

  const findValueOfItems = (id, type) => {
    if (type === "column") {
      return columns.find((column) => column.id === id);
    }
    if (type === "task") {
      return columns.find((column) =>
        column.tasks.find((task) => task.id === id)
      );
    }
  };

  //dnd handlers

  //sensors detect onClick event on draggable items
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 150, tolerance: 5 },
    })
    // useSensor(KeyboardSensor, {
    //   coordinateGetter: sortableKeyboardCoordinates,
    //   activationConstraint: {
    //     delay: 150,
    //     tolerance: 5,
    //   },
    // })
  );

  //dnd handlers continue
  const handleDragStart = (event) => {
    const { active } = event;
    setActiveId(active.id);
  };

  const handleDragMove = (event) => {
    const { active, over } = event;

    //handle tasks sorting
    if (
      active.id.toString().includes("task") &&
      over?.id.toString().includes("task") &&
      over &&
      active &&
      active.id !== over.id
    ) {
      //find the active column and over column
      const activeColumn = findValueOfItems(active.id, "task");
      const overColumn = findValueOfItems(over.id, "task");

      //if the active container or over container is undefined, return
      if (!activeColumn || !overColumn) return;

      //find the active and over column index
      const activeColumnIndex = columns.findIndex(
        (column) => column.id === activeColumn.id
      );
      const overColumnIndex = columns.findIndex(
        (column) => column.id === overColumn.id
      );

      // find the index of the active and over task
      const activeTaskIndex = activeColumn.tasks.findIndex(
        (task) => task.id === active.id
      );
      const overTaskIndex = overColumn.tasks.findIndex(
        (task) => task.id === over.id
      );

      // if in the same column
      if (activeColumnIndex === overColumnIndex) {
        let newColumns = [...columns];
        newColumns[activeColumnIndex].tasks = arrayMove(
          newColumns[activeColumnIndex].tasks,
          activeTaskIndex,
          overTaskIndex
        );

        setColumns(newColumns);
      } else {
        //in different columns
        let newColumns = [...columns];
        const [removedTask] = newColumns[activeColumnIndex].tasks.splice(
          activeTaskIndex,
          1
        );
        newColumns[overColumnIndex].tasks.splice(overTaskIndex, 0, removedTask);

        setColumns(newColumns);
      }
    }

    //handle task drop into a column

    if (
      active.id.toString().includes("task") &&
      over?.id.toString().includes("column") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const activeColumn = findValueOfItems(active.id, "task");
      const overColumn = findValueOfItems(over.id, "column");

      //if the active and over column is undefined, return
      if (!activeColumn || !overColumn) return;

      //find the index of active and over column
      const activeColumnIndex = columns.findIndex(
        (column) => column.id === activeColumn.id
      );
      const overColumnIndex = columns.findIndex(
        (column) => column.id === overColumn.id
      );

      //find the index of the active task in the active column
      const activeTaskIndex = activeColumn.tasks.findIndex(
        (task) => task.id === active.id
      );

      //remove the active task from active column and add it to over column
      let newColumns = [...columns];
      const [removedTask] = newColumns[activeColumnIndex].tasks.splice(
        activeTaskIndex,
        1
      );
      newColumns[overColumnIndex].tasks.push(removedTask);

      setColumns(newColumns);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    //handle column sorting
    if (
      active.id.toString().includes("column") &&
      over?.id.toString().includes("column") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const activeColumnIndex = columns.findIndex(
        (column) => column.id === active.id
      );

      const overColumnIndex = columns.findIndex(
        (column) => column.id === over.id
      );

      //swap the active and over column
      let newColumns = [...columns];
      newColumns = arrayMove(newColumns, activeColumnIndex, overColumnIndex);

      setColumns(newColumns);
    }

    //handle task sorting
    if (
      active.id.toString().includes("task") &&
      over?.id.toString().includes("task") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      //find the active and over column
      const activeColumn = findValueOfItems(active.id, "task");
      const overColumn = findValueOfItems(over.id, "task");

      //find the active and over column index
      const activeColumnIndex = columns.findIndex(
        (column) => column.id === activeColumn.id
      );
      const overColumnIndex = columns.findIndex(
        (column) => column.id === overColumn.id
      );

      //find the index of the active and over task
      const activeTaskIndex = activeColumn.tasks.findIndex(
        (task) => task.id === active.id
      );
      const overTaskIndex = overColumn.tasks.findIndex(
        (task) => task.id === over.id
      );

      // in the same column
      if (activeColumnIndex === overColumnIndex) {
        let newColumns = [...columns];

        newColumns[activeColumnIndex].tasks = arrayMove(
          newColumns[activeColumnIndex].tasks,
          activeTaskIndex,
          overTaskIndex
        );

        setColumns(newColumns);
      } else {
        //in different columns
        let newColumns = [...columns];
        const [removedTask] = newColumns[activeColumnIndex].tasks.splice(
          activeTaskIndex,
          1
        );
        newColumns[overColumnIndex].tasks.splice(overTaskIndex, 0, removedTask);

        setColumns(newColumns);
      }
    }

    //handle task drop into a column
    if (
      active.id.toString().includes("task") &&
      over?.id.toString().includes("column") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const activeColumn = findValueOfItems(active.id, "task");
      const overColumn = findValueOfItems(over.id, "column");

      //if the active or over column is undefined, return
      if (!activeColumn || !overColumn) return;

      //find the index of active and over column
      const activeColumnIndex = columns.findIndex(
        (column) => column.id === activeColumn.id
      );

      const overColumnIndex = columns.findIndex(
        (column) => column.id === overColumn.id
      );

      //find the index of active task in the active column
      const activeTaskIndex = activeColumn.tasks.findIndex(
        (task) => task.id === active.id
      );

      let newColumns = [...columns];
      const [removedTask] = newColumns[activeColumnIndex].tasks.splice(
        activeTaskIndex,
        1
      );
      newColumns[overColumnIndex].tasks.push(removedTask);

      setColumns(newColumns);
    }

    setActiveId(null);
  };

  //handle Edit task drawer
  const handleLabelChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTask({
      ...selectedTask,
      labels: typeof value === "string" ? value.split(",") : value,
    });
  };

  //handle update submit task edit
  const handleUpdate = () => {
    let newColumns = [...columns];
    const columnIndex = columns.findIndex((col) => col.id === currentColumnId);
    const taskIndex = columns[columnIndex].tasks.findIndex(
      (task) => task.id === selectedTask.id
    );
    newColumns[columnIndex].tasks[taskIndex] = selectedTask;
    setColumns(newColumns);

    setOpenTaskDrawer(false);
    setSelectedTask([]);
    setCurrentColumnId(null);
  };

  //handle delete task
  const handleDelete=()=>{
    let newColumns = [...columns]
    const columnIndex = columns.findIndex((col) => col.id === currentColumnId);
    const newTasks = columns[columnIndex].tasks.filter((task)=>task.id != selectedTask.id)
    newColumns[columnIndex].tasks = newTasks
    setColumns(newColumns)

    setOpenTaskDrawer(false);
    setSelectedTask([]);
    setCurrentColumnId(null);
  }


  return (
    <>
      <div className="kanban">
        <Sidebar />
        <div className="container">
          <Navbar />
          <div
            className="kanban-boxes"
            style={{ marginTop: "100px", marginBottom: "24px" }}
          >
            <div className="kanban-content">
              <div className="columns-wrapper">
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCorners}
                  onDragStart={(e) => handleDragStart(e)}
                  onDragMove={(e) => handleDragMove(e)}
                  onDragEnd={(e) => handleDragEnd(e)}
                >
                  <SortableContext items={columns.map((column) => column.id)}>
                    {columns.map((column) => (
                      <KanbanColumn
                        key={column.id}
                        column={column}
                        columns={columns}
                        setColumns={setColumns}
                        currentColumnId={currentColumnId}
                        setCurrentColumnId={setCurrentColumnId}
                        setOpenTaskDrawer={setOpenTaskDrawer}
                        setSelectedTask={setSelectedTask}
                      />
                    ))}
                  </SortableContext>
                </DndContext>
              </div>
              <div className="add-new-wrapper">
                <p
                  className="add-new-content"
                  onClick={() => setShowAddColumnSec((value) => !value)}
                >
                  <AddIcon className="add-icon" />{" "}
                  <span className="add-text">Add New</span>
                </p>
                {showAddColumnSec && (
                  <div className="new-wrapper">
                    <div className="new-top" style={{ marginBottom: "16px" }}>
                      <input
                        type="text"
                        placeholder={"Board Title"}
                        value={columnName}
                        onChange={(e) => setColumnName(e.target.value)}
                        className={showColumnWarning ? "input error" : "input"}
                      />
                      {showColumnWarning && (
                        <p
                          className="error-text"
                          style={{ color: "red", fontSize: "13px" }}
                        >
                          Title is required
                        </p>
                      )}
                    </div>
                    <div className="button-wrapper">
                      <Button
                        variant="contained"
                        className="add-btn"
                        onClick={() => handleAddColumn()}
                      >
                        Add
                      </Button>
                      <Button
                        variant="contained"
                        className="cancel-btn"
                        onClick={() => setShowAddColumnSec(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Drawer
        open={openTaskDrawer}
        onClose={() => {
          setSelectedTask(null);
          setOpenTaskDrawer(false);
        }}
        anchor="right"
      >
        <form className="edit-task-wrapper" style={{ width: "400px" }}>
          <div className="edit-task-header">
            {selectedTask && (
              <>
                <h5>Edit Task</h5>{" "}
                <div className="edit-task-header-right">
                  <button onClick={() => setOpenTaskDrawer(false)}>
                    <CloseIcon />
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="edit-task-body">
            <form action="">
              {showTaskWarning ? (
                <TextField
                  error
                  id="outlined-error-title"
                  label="Title"
                  className="input-field title-input"
                  helperText="Title is required"
                  name="Title"
                  required
                  value={selectedTask?.content}
                  onChange={(e) =>
                    setSelectedTask({
                      ...selectedTask,
                      content: e.target.value,
                    })
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
                  value={selectedTask?.content}
                  onChange={(e) =>
                    setSelectedTask({
                      ...selectedTask,
                      content: e.target.value,
                    })
                  }
                />
              )}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker", "DatePicker"]}
                  style={{ width: "100%" }}
                >
                  <DatePicker
                    label="Due Date"
                    value={dayjs(selectedTask?.dueDate)}
                    onChange={(newValue) =>
                      setSelectedTask({
                        ...selectedTask,
                        dueDate: newValue.format("M-D-YYYY"),
                      })
                    }
                  />
                </DemoContainer>
              </LocalizationProvider>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Label</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={selectedTask?.labels ? selectedTask.labels : []}
                  onChange={(e) => handleLabelChange(e)}
                  input={<OutlinedInput label="Label" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  className="label-select"
                >
                  {labels.map((label) => (
                    <MenuItem key={label} value={label}>
                      <Checkbox
                        checked={selectedTask?.labels?.includes(label)}
                      />
                      <ListItemText primary={label} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="assignees">
                <span className="assignees-text">Assigned</span>
                <Stack direction="row" spacing={1}>
                  {selectedTask?.assignees?.map((ele, index) => (
                    <Tooltip title={ele.name} key={index}>
                      <Avatar
                        alt={ele.name}
                        src={ele.avatar}
                        style={{
                          width: "26px",
                          height: "26px",
                          cursor: "pointer",
                        }}
                      />
                    </Tooltip>
                  ))}
                  <Avatar
                    style={{ width: "26px", height: "26px", cursor: "pointer" }}
                  >
                    +
                  </Avatar>
                </Stack>
              </div>
              <div className="upload-file">
                <span className="upload-file-text">Choose File</span>
                <div
                  className="input"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    accept="image/*"
                    id="raised-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="raised-button-file">
                    <Button variant="contained" className="upload-btn">
                      Upload
                    </Button>
                  </label>
                </div>
              </div>
              <div className="comment">
                <span>Comment</span>
                <Textarea
                  placeholder="Write a Comment..."
                  minRows={4}
                  className="input-field"
                  name="Comment"
                  value={selectedTask?.comment}
                  onChange={(e) =>
                    setSelectedTask({
                      ...selectedTask,
                      comment: e.target.value,
                    })
                  }
                />
              </div>
              <div className="buttons-wrapper">
                <Button
                  variant="contained"
                  className="btn-update"
                  onClick={() => handleUpdate()}
                >
                  <span>Update</span>
                </Button>
                <Button
                  variant="contained"
                  className="btn-delete"
                  onClick={() => {
                    handleDelete();
                  }}
                >
                  Delete
                </Button>
              </div>
            </form>
          </div>
        </form>
      </Drawer>
    </>
  );
}
