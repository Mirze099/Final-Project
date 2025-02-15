import React from "react";
import styles from "./AdminNavbar.module.css";
import { NavLink } from "react-router-dom";
import { SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

export default function AdminNavbar() {
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
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"admincoin"} className={`${styles.navNav}`}>
                Admin Coin
              </NavLink>
            </li>
            <li>
              <NavLink to={"addcoin"} className={`${styles.navNav}`}>
                Add Coin
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
        </div>
      </div>
    </div>
  );
}
