import React from "react";
import Navigation from "../../../components/Navigation";
import { Outlet } from "react-router-dom";
import TableComponent from "../../../components/TableComponent";

export default function Coin() {
  return (
    <div>
      <main
        className="w-full h-full flex flex-col first-letter:
    content-center items-center relative text-white"
      >
        <Navigation />
        <Outlet />
        <TableComponent />
      </main>
    </div>
  );
}
