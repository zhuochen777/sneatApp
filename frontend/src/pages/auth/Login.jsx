import React, { useEffect, useState } from "react";
import "../../style/auth/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  let url = process.env.REACT_APP_baseURL;
  const navigate = useNavigate();

  const toastOptions = {
    autoClose: 5000,
    pauseOnHover: true,
  };

  const [values, setValues] = useState({
    email: "admin@sneat.com",
    password: "admin",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //when submit the form, valid the form inputs first; if pass, then call the APIs
    if (handleValidation()) {
      const { email, password } = values;
      const result = await axios.post(url + "/login", {
        email,
        password,
      });

      if (result.data.status === false) {
        toast.error(result.data.message, toastOptions);
      }

      if (result.data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(result.data.user));
        navigate("/dashboards/analytics");
      }
    }
  };

  const handleValidation = () => {
    const { email, password } = values;
    if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Password is required", toastOptions);
      return false;
    } else if (password.length < 5) {
      toast.error("Password must be at least 5 characters long", toastOptions);
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

  const EndAdorment = ({ passwordVisible, setPasswordVisible}) => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    );
  };

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/dashboards/analytics");
    }
  }, []);

  return (
    <div className="login">
      <div className="container">
        <div className="container-left">
          <img
            className="img"
            src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/illustrations/characters-with-objects/7.png"
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
              <h4>Welcome to sneat! 👋🏻</h4>
              <p>Please sign-in to your account and start the adventure</p>
            </div>
            <div className="passwordTips" style={{ width: "100%" }}>
              <div className="accountCredentials">
                <p style={{ display: "inline-block" }}> Email: </p>
                <strong>&nbsp;admin@sneat.com</strong>
                <br />
                <p style={{ display: "inline-block" }}> Password: </p>
                <strong>&nbsp;admin</strong>
              </div>
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
                defaultValue="admin@sneat.com"
                onChange={(e) => handleChange(e)}
              />
              <TextField
                type={passwordVisible?"text":"password"}
                label="Password"
                placeholder="Enter your password"
                name="password"
                defaultValue="admin"
                onChange={(e) => handleChange(e)}
                InputProps={{
                  endAdornment: (
                    <EndAdorment
                      passwordVisible={passwordVisible}
                      setPasswordVisible={setPasswordVisible}
                    />
                  ),
                }}
              />

              <div className="form-middle">
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <span className="remember-me">
                      <span>Remember me </span>
                    </span>
                  }
                />
                <Link to="/forget-password" className="forget-password">
                  Forget password?
                </Link>
              </div>
              <Button
                variant="contained"
                type="submit"
                className="submit-button"
              >
                Login
              </Button>
              <div className="signin-link">
                <span className="question">New on our platform?</span>{" "}
                <Link to="/register" className="signin">
                  Create an account
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
