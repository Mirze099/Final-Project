import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

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
            <li>
              <NavLink to={"contact"} className={`${styles.navNav}`}>
                Contact
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
      <div className="slider-container">
        <div className="slider">
          <span className="currency">USD/AZN: 1.70</span>
          <span className="currency">EUR/AZN: 1.85</span>
          <span className="currency">GBP/AZN: 2.15</span>
          <span className="currency">RUB/AZN: 0.018</span>
          <span className="currency">TRY/AZN: 0.057</span>
        </div>
      </div>
    </div>
  );
}
