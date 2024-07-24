import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  styled,
  InputBase,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVert from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  backgroundColor: "rgba(50, 71, 92, 0.08)",
  "&>p": {
    fontSize: "16px",
    fontWeight: 500,
  },
});

const RecipientWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "4px 0px",
  "&>div": {
    fontSize: "14px",
    borderBottom: "1px solid rgba(50, 71, 92, 0.12)",
    "&>input": {
      padding: "10px",
    },
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 16px",
  alignItems: "center",
});

const SendButton = styled(Button)({
  backgroundColor: "rgb(96, 98, 232)",
  color: "white",
  fontSize: "14px",
  fontWeight: 500,
});

export default function ComposeMail(props) {
  let url = process.env.REACT_APP_baseURL;
  const [toValue, setToValue] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const toHandle = (e) => {
    setToValue(e.target.value);
  };
  const subjectHandle = (e) => {
    setSubject(e.target.value);
  };
  const bodyHandle = (e) => {
    setBody(e.target.value);
  };

  //click close - email is saved in draft
  const closeHandle = async() => {
    const draftEmail = {
      sender: "John Doe",
      from: "johndoe@gmail.com",
      to: toValue,
      img: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png",
      starred: false,
      subject: subject,
      type: "draft",
      label: [],
      trash:false,
      body: body,
      read: true,
      spam:false,
      time: new Date()
    }

    const result = await axios.post(url + "/emails/savedraft", draftEmail);
    if (result.data == "success") {
      setToValue("")
      setSubject("")
      setBody("")
      props.toggleDrawer(false);
      navigate("/apps/email/inbox")
    }
  };

  //click send - email is saved in sent
  const addHandle = async () => {
    const newEmail = {
      sender: "John Doe",
      from: "johndoe@gmail.com",
      to: toValue,
      img: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png",
      starred: false,
      subject: subject,
      type: "sent",
      label: [],
      trash:false,
      body: body,
      read: true,
      spam:false,
      time: new Date()
    }

    const result = await axios.post(url + "/emails/save", newEmail);
    if (result.data == "success") {
      setToValue("")
      setSubject("")
      setBody("")
      props.toggleDrawer(false);
      navigate("/apps/email/inbox")
    }
  };

  //click trash - email is saved in trash
  const trashHandle = async () => {
    const trashEmail = {
      sender: "John Doe",
      from: "johndoe@gmail.com",
      to: toValue,
      img: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/avatars/1.png",
      starred: false,
      subject: subject,
      type: "",
      label: [],
      trash:true,
      body: body,
      read: true,
      spam:false,
      time: new Date()
    }

    const result = await axios.post(url + "/emails/savedtrash", trashEmail);
    if (result.data == "success") {
      setToValue("")
      setSubject("")
      setBody("")
      props.toggleDrawer(false);
      navigate("/apps/email/inbox")
    }
  };

  

  return (
    <div>
      <Header>
        <Typography>Compose Mail</Typography>
        <CloseIcon fontSize="small" onClick={() => closeHandle()} style={{cursor:"pointer"}} />
      </Header>
      <RecipientWrapper>
        <InputBase placeholder="To:" value={toValue} onChange={toHandle} />
        <InputBase
          placeholder="Subject:"
          value={subject}
          onChange={subjectHandle}
        />
      </RecipientWrapper>
      <TextField
        multiline
        rows={6}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
        value={body}
        onChange={bodyHandle}
      />
      <Footer>
        <div>
          <SendButton
            onClick={() => {
              addHandle();
            }}
          >
            Send
          </SendButton>
        </div>
        <div>
          <MoreVert sx={{ color: "rgba(50, 71, 92, 0.54)" }} />
          <DeleteIcon
            sx={{ color: "rgba(50, 71, 92, 0.54)" }}
            onClick={() => trashHandle()}
            style={{cursor:"pointer"}}
          />
        </div>
      </Footer>
    </div>
  );
}
