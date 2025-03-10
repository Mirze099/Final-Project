import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="nav w-[20%] mt-16 flex justify-around align-middle
    border border-cyan-400 rounded-lg
    "
    >
      <NavLink
        to="/crypto"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center p-1 sa

${
  isActive
    ? "bg-cyan-500 text-gray-200 rounded-lg"
    : "bg-gray-800 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300 rounded-lg"
}
    border-0 cursor-pointer rounded capitalize`;
        }}
      >
        Crypto
      </NavLink>
    </nav>
  );
};

export default Navigation;
