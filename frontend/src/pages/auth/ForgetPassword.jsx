import React, { useEffect, useState } from "react";
import "../../style/auth/ForgetPassword.scss";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ForgetPassword() {
  let url = process.env.REACT_APP_baseURL;
  const navigate = useNavigate();

  const toastOptions = {
    autoClose: 5000,
    pauseOnHover: true,
  };

  const [values, setValues] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //when submit the form, valid the form inputs first; if pass, then call the APIs
    if (handleValidation()) {
       
    }
  };

  const handleValidation = () => {
    const { email} = values;
    if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    } else if (email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        toast.error("Email is invalid", toastOptions);
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    if (localStorage.getItem("chat-app-user")){
      navigate("/dashboards/analytics");
    }
  },[])

  return (
    <div className="forget-password">
      <div className="container">
        <div className="container-left">
          <img
            className="img"
            src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/illustrations/characters-with-objects/10.png"
            alt=""
          />
        </div>
        <div className="container-right">
          <Link to="/login">
            <div className="web-link">
              <span>sneat</span>
            </div>
          </Link>
          <div className="form-container">
            <div className="form-top">
              <h4>Forgot Password 🔒</h4>
              <p>Enter your email and we'll send you instructions to reset your password</p>
            </div>
            <form
              className="form-main"
              onSubmit={(event) => handleSubmit(event)}
            >
              <TextField
                type="email"
                label="Email"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <Button
                variant="contained"
                type="submit"
                className="submit-button"
              >
                Send reset link
              </Button>
              <div className="back-login-link">
                <Link to="/login" className="login-link">
                <ArrowBackIosIcon/>
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
