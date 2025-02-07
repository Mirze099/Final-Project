import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Navbar() {
  return (
    <div>
      <div className={`${styles.nav}`}>
        <div className={`${styles.navLeft}`}>
          <p>
            <span>VOLT</span>CRYPTO
          </p>
          <ul>
            <li>
              <NavLink to={""} className={`${styles.navNav}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"favorites"} className={`${styles.navNav}`}>
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`${styles.navRight}`}>
          <NavLink to={"login"} className={`${styles.navNavs}`}>
            Log In
          </NavLink>
          <NavLink to={"register"} className={`${styles.navNavss}`}>
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}
