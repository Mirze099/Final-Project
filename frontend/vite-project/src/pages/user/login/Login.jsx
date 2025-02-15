import React from "react";
import styles from "./Login.module.css";
import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div className={`${styles.main}`}>
      <SignIn />
    </div>
  );
}
