import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/user/navbar/Navbar";
import Footer from "../../components/user/footer/Footer";

export default function UserRoot() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
