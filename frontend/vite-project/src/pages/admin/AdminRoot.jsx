import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/admin/adminnavbar/AdminNavbar";
import AdminFooter from "../../components/admin/adminfooter/AdminFooter";

export default function AdminRoot() {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
      <AdminFooter />
    </div>
  );
}
