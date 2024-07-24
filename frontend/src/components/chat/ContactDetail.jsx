import React from "react";
import "../../style/chat/ContactDetail.scss";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

export default function ContactDetail({toggleDrawer,receiver}) {


  return (
    <div className="contactDetail">
      <div className="close">
        <CloseIcon onClick={()=>toggleDrawer(false)}/>
      </div>
      <div className="top">
        <span className="avatar">
          <img src={receiver.img} alt="" />
          <div className="status-wrapper">
            <div
              className="status"
              style={
                receiver.status === "online"
                  ? { backgroundColor: "green" }
                  : receiver.status === "busy"
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "gray" }
              }
            ></div>
          </div>
        </span>
        <div className="name-wrapper">
          <p className="name">{receiver.name}</p>
          <p className="title">{receiver.position}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="about">
          <p className="title">about</p>
          <p className="title-detail">{receiver.about}</p>
        </div>
        <div className="personal">
          <div className="title">personal information</div>
          <div className="info-detail">
            <p>
              <EmailIcon className="icon" />
              {receiver.email}
            </p>
            <p>
              <PhoneIcon className="icon" />
              {receiver.phone}
            </p>
            <p>
              <AccessTimeIcon className="icon" />
              {receiver.avai}
            </p>
          </div>
        </div>
        <div className="options">
          <div className="title">personal information</div>
          <div className="options-detail">
            <p>
              <LabelImportantIcon className="icon" />
              Add Tags
            </p>
            <p>
              <PhoneIcon className="icon" />
              Important Contact
            </p>
            <p>
              <InsertPhotoIcon className="icon" />
              Shared Media
            </p>
            <p>
              <DeleteIcon className="icon" />
              Delete Contact
            </p>
            <p>
              <DoNotDisturbAltIcon className="icon" />
              Block Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
