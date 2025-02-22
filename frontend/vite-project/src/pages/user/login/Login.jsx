import React from "react";
import styles from "./Login.module.css";
import { SignIn } from "@clerk/clerk-react";
import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <div className={`${styles.main}`}>
      <Helmet>
        <title>Log-In</title>
      </Helmet>
      <SignIn />
    </div>
  );
}
