import React from "react";
import Search from "./Search";

export default function Filters() {
  return (
    <div className="filter w-[80%] h-12 border-2 border-gray-100 rounded-lg flex justify-between items-center relative">
      <Search />
      <div>currency</div>
      <div>sorting</div>
    </div>
  );
}
