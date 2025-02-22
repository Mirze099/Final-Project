import React from "react";
import styles from "./AdminNavbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

export default function AdminNavbar() {
  let navigate = useNavigate(-1);
  return (
    <div>
      <div className={`${styles.nav}`}>
        <div className={`${styles.navLeft}`}>
          <NavLink onClick={() => navigate(-1)} className={`${styles.navLogo}`}>
            <p>
              <span>VOLT</span>CRYPTO
            </p>
          </NavLink>
          <ul>
            <li>
              <NavLink to={""} className={`${styles.navNavs}`}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"admincoin"} className={`${styles.navNavs}`}>
                Admin Coin
              </NavLink>
            </li>
            <li>
              <NavLink to={"addcoin"} className={`${styles.navNavs}`}>
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
