import React, { useContext } from "react";
import "../style/Footer.scss";
import { themeContext } from "../App.js";

export default function Footer() {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <div className="footer-container">
      <p className={`madeBy ${theme}`}>
        © 2024, Made with
        <span> ❤️ </span>by
        <a href="https://themeselection.com/"> ThemeSelection</a>
      </p>
      <div className="links">
        <a href="https://themeselection.com/license/" target="blank">
          License
        </a>
        <a href="https://themeselection.com/" target="blank">
          More Themes
        </a>
        <a
          href="https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/documentation/"
          target="blank"
        >
          Documentation
        </a>
        <a href="https://themeselection.com/support/" target="blank">
          Support
        </a>
      </div>
    </div>
  );
}
