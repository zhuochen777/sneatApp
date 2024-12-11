import React,{useContext} from "react";
import "../../style/email/Email.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ComposeMail from "../../components/email/ComposeMail";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarIcon from "@mui/icons-material/Star";
import MailLockIcon from "@mui/icons-material/MailLock";
import DeleteIcon from "@mui/icons-material/Delete";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { NavLink, Outlet } from "react-router-dom";
import { themeContext } from "../../App.js";

export default function Email() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { theme, toggleTheme } = useContext(themeContext);

  const toggleDrawer = (flag) => {
    setOpenDrawer(flag);
  };

  return (
    <div className="email">
      <Sidebar />
      <div className={`container ${theme}`}>
        <Navbar />
        <div
          className="email-boxes"
          style={{ marginTop: "100px", marginBottom: "24px" }}
        >
          <div className="email-content">
            <div className="left-wrapper">
              <div className="drawer-wrapper">
                <div className="composeBtn">
                  <button onClick={() => toggleDrawer(true)}>Compose</button>
                  <div>
                    <Drawer
                      open={openDrawer}
                      anchor="bottom"
                      onClose={() => toggleDrawer(false)}
                      PaperProps={{
                        sx: {
                          height: "50%",
                          width: "50%",
                          margin: "20px",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <ComposeMail toggleDrawer={toggleDrawer} />
                    </Drawer>
                  </div>
                </div>
                <div className="scrollbar">
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <nav aria-label="main mailbox folders">
                      <List>
                        <NavLink to="inbox">
                          <ListItem disablePadding>
                            <ListItemButton autoFocus>
                              <ListItemIcon className="mail-icon">
                                <InboxIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary="Inbox"
                                className="mail-text"
                              />
                            </ListItemButton>
                          </ListItem>
                        </NavLink>

                        <NavLink to="sent">
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon className="mail-icon">
                                <SendIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary="Sent"
                                className="mail-text"
                              />
                            </ListItemButton>
                          </ListItem>
                        </NavLink>

                        <NavLink to="draft">
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon className="mail-icon">
                                <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary="Draft"
                                className="mail-text"
                              />
                            </ListItemButton>
                          </ListItem>
                        </NavLink>

                        <NavLink to="starred">
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon className="mail-icon">
                                <StarIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary="Starred"
                                className="mail-text"
                              />
                            </ListItemButton>
                          </ListItem>
                        </NavLink>

                        <NavLink to="spam">
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon className="mail-icon">
                                <MailLockIcon/>
                              </ListItemIcon>
                              <ListItemText primary="Spam" className="mail-text"/>
                            </ListItemButton>
                          </ListItem>
                        </NavLink>

                        <NavLink to="trash">
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon className="mail-icon">
                                <DeleteIcon />
                              </ListItemIcon>
                              <ListItemText primary="Trash" className="mail-text"/>
                            </ListItemButton>
                          </ListItem>
                        </NavLink>
                      </List>
                    </nav>
                  </Box>
                  <h6>Labels</h6>
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <nav aria-label="main mailbox folders">
                      <List>
                        <NavLink to="label/personal">
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon className="mail-icon">
                                <FiberManualRecordIcon className="personal" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Personal"
                                className="mail-text"
                              />
                            </ListItemButton>
                          </ListItem>
                        </NavLink>

                        <NavLink to="label/company">
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon className="mail-icon">
                                <FiberManualRecordIcon className="company" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Company"
                                className="mail-text"
                              />
                            </ListItemButton>
                          </ListItem>
                        </NavLink>

                        <NavLink to="label/important">
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon className="mail-icon">
                                <FiberManualRecordIcon className="important" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Important"
                                className="mail-text"
                              />
                            </ListItemButton>
                          </ListItem>
                        </NavLink>

                        <NavLink to="label/private">
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon className="mail-icon">
                                <FiberManualRecordIcon className="private" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Private"
                                className="mail-text"
                              />
                            </ListItemButton>
                          </ListItem>
                        </NavLink>
                      </List>
                    </nav>
                  </Box>
                </div>
              </div>
            </div>
            <div className="box-wrapper">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
