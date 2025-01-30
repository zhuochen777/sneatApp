import React from "react";
import "../../style/kanban/Task.scss";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ForumIcon from "@mui/icons-material/Forum";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Task() {
  return (
    <div className="task-wrapper">
      <div className="task-top">
        <div className="label-wrapper">
          <span className="label">UX</span>
        </div>
        <button className="more-icon-wrapper">
          <MoreVertIcon className="more-icon" />
        </button>
      </div>
      <p className="title">Research FAQ page UX</p>
      <div className="img"><img src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/apps/kanban/plant.png" alt="task-img" /></div>
      <div className="other-details">
        <div className="details-left">
          <div className="attachment">
            <AttachmentIcon />
            <p>4</p>
          </div>
          <div className="chat">
            <ForumIcon />
            <p>12</p>
          </div>
        </div>
        <div className="details-right">
          <Stack direction="row" spacing={-1}>
            <Avatar
              alt="John Doe"
              src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/3.png"
            />
            <Avatar
              alt="Jane Smith"
              src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/2.png"
            />
            <Avatar
              alt="Robert Johnson"
              src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}
