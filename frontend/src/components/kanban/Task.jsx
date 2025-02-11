import React from "react";
import "../../style/kanban/Task.scss";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ForumIcon from "@mui/icons-material/Forum";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";

export default function Task(props) {
  const { task } = props;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id, data: { type: "task" } });
  const style = { transition, transform: CSS.Translate.toString(transform) };

  return (
    <div
      className="task-wrapper"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="task-top">
        <div className="label-wrapper">
          {task.labels.map((label, index) => {
            return (
              <span
                className={`label-text ${
                  label === "UX"
                    ? "ux"
                    : label === "Code Review"
                    ? "codeReview"
                    : label === "Dashboard"
                    ? "dashboard"
                    : label === "Images"
                    ? "images"
                    : label === "App"
                    ? "app"
                    : "charts"
                }`}
                key={index}
              >
                {label}
              </span>
            );
          })}
        </div>
        <div className="more-icon-wrapper">
          <MoreVertIcon className="more-icon" />
        </div>
      </div>
      <p className="title">{task.content}</p>
      <div className="img-wrapper">
        {task.img && <img src={task.img} alt="task-img" className="img" />}
      </div>
      <div className="other-details">
        <div className="details-left">
          <div className="attachment">
            {task.attachmentNum != 0 && <AttachmentIcon />}
            <p>{task.attachmentNum != 0 && task.attachmentNum}</p>
          </div>
          <div className="chat">
            {task.chatNum != 0 && <ForumIcon />}
            <p>{task.chatNum != 0 && task.chatNum}</p>
          </div>
        </div>
        <div className="details-right">
          <AvatarGroup max={4} className="avatar-wrapper">
            {task.assignees.map((assignee, index) => {
              return (
                <Tooltip title={assignee.name} key={index}>
                  <Avatar
                    className="avatar"
                    alt={assignee.name}
                    src={assignee.avatar}
                  />
                </Tooltip>
              );
            })}
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
}
