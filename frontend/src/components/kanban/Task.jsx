import React from "react";
import "../../style/kanban/Task.scss";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ForumIcon from "@mui/icons-material/Forum";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"

export default function Task(props) {
  const { task } = props;

  
  return (
    <div
      className="task-wrapper" 
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
        <button className="more-icon-wrapper">
          <MoreVertIcon className="more-icon" />
        </button>
      </div>
      <p className="title">{task.content}</p>
      <div className="img-wrapper">
        {task.img && <img src={task.img} alt="task-img" className="img" />}
      </div>
      <div className="other-details">
        <div className="details-left">
          <div className="attachment">
            <AttachmentIcon />
            <p>{task.attachmentNum}</p>
          </div>
          <div className="chat">
            <ForumIcon />
            <p>{task.chatNum}</p>
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
