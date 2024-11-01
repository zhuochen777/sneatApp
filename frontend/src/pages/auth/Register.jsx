import React, { useState, useEffect } from "react";
import "../../style/auth/Register.scss";
import { Link ,useNavigate } from "react-router-dom";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Button,
  InputAdornment,
  IconButton
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Register() {
  let url = process.env.REACT_APP_baseURL;
  const navigate = useNavigate()

  const toastOptions = {
    autoClose: 5000,
    pauseOnHover: true,
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible]= useState(false)
  const [checkbox, setCheckbox] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    //when submit the form, valid the form inputs first; if pass, then call the APIs
    if (handleValidation()) {
      const { username, email, password } = values;
      const result = await axios.post(url + "/register", {
        username,
        email,
        password,
      });

      if (result.data.status === false){
        toast.error(result.data.message, toastOptions)
      }

      if (result.data.status === true){
        toast.error("New user is created", toastOptions)
        localStorage.setItem("chat-app-user", JSON.stringify(result.data.user))
        navigate("/")
      }
    }
  };

  const handleValidation = () => {
    const { username, email, password } = values;
    if (username.length < 3) {
      toast.error("Username should be greater than 3 characters", toastOptions);
      return false;
    } else if (password.length < 5) {
      toast.error(
        "Password should be equal or greater than 5 characters",
        toastOptions
      );
      return false;
    } else if (username === "") {
      toast.error("Username is required", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Password is required", toastOptions);
      return false;
    } else if (email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        toast.error("Email is invalid", toastOptions);
        return false;
      } else if (checkbox===false) {
        toast.error("Please agree to privacy policy & terms", toastOptions);
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

  useEffect(()=>{
    if (localStorage.getItem("chat-app-user")){
      navigate("/dashboards/analytics");
    }
  },[])

  return (
    <div className="register">
      <div className="container">
        <div className="container-left">
          <img
            className="img"
            src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/illustrations/characters-with-objects/8.png"
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
              <h4>Adventure starts here 🚀</h4>
              <p>Make your app management easy and fun!</p>
            </div>
            <form
              className="form-main"
              onSubmit={(event) => handleSubmit(event)}
            >
              <TextField
                type="text"
                label="Username"
                placeholder="Enter your username"
                name="username"
                onChange={(e) => handleChange(e)}
              />
              <TextField
                type="email"
                label="Email"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <TextField
                type={passwordVisible?"text":"password"}
                label="Password"
                placeholder="Enter your password"
                name="password"
                onChange={(e) => handleChange(e)}
                InputProps={{endAdornment:<EndAdorment passwordVisible={passwordVisible} setPasswordVisible={setPasswordVisible}/>}}
              />
              <FormControlLabel
                control={<Checkbox value={checkbox} onClick={()=>setCheckbox(!checkbox)}/>}
                label={
                  <span className="agree-to">
                    <span>I agree to </span>
                    <Link to="/login" className="policy-link">
                      privacy policy & terms
                    </Link>
                  </span>
                }
              />
              <Button
                variant="contained"
                type="submit"
                className="submit-button"
              >
                Sign up
              </Button>
              <div className="signin-link">
                <span className="question">Already have an account?</span>{" "}
                <Link to="/login" className="signin">
                  Sign in instead
                </Link>
              </div>
              <Divider>or</Divider>
              <div className="social-media">
                <button className="social facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    id="facebook"
                    width="20"
                    height="20"
                  >
                    <path
                      fill="#1877f2"
                      d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                    ></path>
                  </svg>
                </button>
                <button className="social twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 112.197 112.197"
                    id="twitter"
                    height="20"
                    width="20"
                  >
                    <circle
                      cx="56.099"
                      cy="56.098"
                      r="56.098"
                      fill="#55acee"
                    ></circle>
                    <path
                      fill="#f1f2f2"
                      d="M90.461 40.316a26.753 26.753 0 0 1-7.702 2.109 13.445 13.445 0 0 0 5.897-7.417 26.843 26.843 0 0 1-8.515 3.253 13.396 13.396 0 0 0-9.79-4.233c-7.404 0-13.409 6.005-13.409 13.409 0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351 0 0 0-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314 0 0 1-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362 0 0 1-3.532.471c-.866 0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904 0 0 1-16.655 5.74c-1.08 0-2.15-.063-3.197-.188a37.929 37.929 0 0 0 20.553 6.025c24.664 0 38.152-20.432 38.152-38.153 0-.581-.013-1.16-.039-1.734a27.192 27.192 0 0 0 6.692-6.94z"
                    ></path>
                  </svg>
                </button>
                <button className="social github">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="github"
                    height="20"
                    width="20"
                  >
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                  </svg>
                </button>
                <button className="social google">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="google"
                    height="20"
                    width="20"
                  >
                    <path d="M22.60229,10.00391a1.00005,1.00005,0,0,0-.98388-.82227H12.2a.99974.99974,0,0,0-1,1V14.0498a.99974.99974,0,0,0,1,1h3.9624a3.65162,3.65162,0,0,1-1.13183,1.1875A5.0604,5.0604,0,0,1,12.2,17.02246a4.93525,4.93525,0,0,1-4.64624-3.4378L7.55347,13.583a4.90382,4.90382,0,0,1,0-3.167l.00024-.00165A4.9356,4.9356,0,0,1,12.2,6.97754,4.37756,4.37756,0,0,1,15.3313,8.19531a1.00053,1.00053,0,0,0,1.39844-.01562L19.5979,5.31152a.99918.99918,0,0,0-.02539-1.43847A10.62342,10.62342,0,0,0,12.2,1,10.949,10.949,0,0,0,2.37134,7.05878l-.00147.00177A10.92175,10.92175,0,0,0,1.2,12a11.07862,11.07862,0,0,0,1.16992,4.93945l.00147.00177A10.949,10.949,0,0,0,12.2,23a10.5255,10.5255,0,0,0,7.29468-2.687l.00073-.00049.00079-.00085.00019-.00013.00006-.00012a10.78575,10.78575,0,0,0,3.30365-8.08386A12.51533,12.51533,0,0,0,22.60229,10.00391ZM12.2,3a8.68219,8.68219,0,0,1,5.2085,1.67285L15.95483,6.126A6.46322,6.46322,0,0,0,12.2,4.97754,6.88648,6.88648,0,0,0,6.21069,8.52832L5.14148,7.69958l-.585-.45367A8.95257,8.95257,0,0,1,12.2,3ZM3.67944,14.90332a9.02957,9.02957,0,0,1,0-5.80664l1.78223,1.38184a6.85381,6.85381,0,0,0,0,3.042ZM12.2,21A8.9528,8.9528,0,0,1,4.5564,16.75391l.37841-.29352,1.27588-.98969A6.88482,6.88482,0,0,0,12.2,19.02246a7.27662,7.27662,0,0,0,3.30573-.75079L17.19739,19.585A8.88989,8.88989,0,0,1,12.2,21Zm6.52588-2.76074-.183-.142L17.16553,17.028a5.60626,5.60626,0,0,0,1.39966-2.79553.9998.9998,0,0,0-.9834-1.18262H13.2V11.18164h7.54883c.03418.3457.05127.69531.05127,1.0459A9.05156,9.05156,0,0,1,18.72583,18.23926Z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
