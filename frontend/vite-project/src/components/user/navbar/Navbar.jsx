import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  return (
    <div>
      <div className={`${styles.nav}`}>
        <div className={`${styles.navLeft}`}>
          <NavLink to={""} className={`${styles.navLogo}`}>
            <p>
              <span>VOLT</span>CRYPTO
            </p>
          </NavLink>
          <ul>
            <li>
              <NavLink to={""} className={`${styles.navNav}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"crypto"} className={`${styles.navNav}`}>
                Crypto
              </NavLink>
            </li>
            <li>
              <NavLink to={"swap"} className={`${styles.navNav}`}>
                Swap
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
          <SignedOut>
            <NavLink to={"login"} className={`${styles.navNavs}`}>
              Log In
            </NavLink>
            <NavLink to={"register"} className={`${styles.navNavss}`}>
              Sign Up
            </NavLink>
          </SignedOut>
          <UserButton />
          <SignedIn>
            <NavLink to={"admin"} className={`${styles.navNavss}`}>
              Admin Dashboard
            </NavLink>
          </SignedIn>
          <button
            className={`${styles.themeToggle} btnz`}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
      <div className="slider-container">
        <div className="slider">
          <span className="currency">USD/AZN: 1.70</span>
          <span className="currency">EUR/AZN: 1.85</span>
          <span className="currency">GBP/AZN: 2.15</span>
          <span className="currency">RUB/AZN: 0.018</span>
          <span className="currency">TRY/AZN: 0.057</span>
          <span className="currency">CNY/AZN: 0.24</span>
          <span className="currency">JPY/AZN: 0.011</span>
          <span className="currency">CHF/AZN: 1.90</span>
          <span className="currency">CAD/AZN: 1.25</span>
          <span className="currency">AUD/AZN: 1.15</span>
          <span className="currency">SAR/AZN: 0.45</span>
          <span className="currency">AED/AZN: 0.46</span>
        </div>
      </div>
    </div>
  );
}
