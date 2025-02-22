import React, { useContext, useRef } from "react";
import Search from "./Search";
import LoginIcon from "@mui/icons-material/Login";
import { CryptoContext } from "../context/CryptoContext";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Filters() {
  let { setCurrency, setSortBy } = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };

  return (
    <div className="filter w-[80%] h-12 border-2 border-cyan-500 rounded-lg flex justify-between items-center relative">
      <Search />
      <div className="flex mr-3">
        <form
          className="relative flex items-center mr-4"
          onSubmit={handleCurrencySubmit}
        >
          <label
            htmlFor="currency"
            className="relative flex justify-center items-center font-bold mr-1 text-gray-400"
          >
            Currency:
          </label>
          <input
            type="text"
            name="currency"
            ref={currencyRef}
            placeholder="usd"
            className="w-16 rounded-lg bg-gray-800 placeholder:text-gray-100 p-1 required outline-0 border border-transparent focus:border-cyan-600 leading-4"
          />
          <button type="submit">
            <LoginIcon className="text-cyan-600 ml-1" />
          </button>
        </form>
        <label className="relative flex items-center justify-center">
          <span className="font-bold mr-2">sort by: </span>
          <select
            name="sortby"
            className="bg-gray-800 text-gray-400 text-base border-none p-1 mr-2 leading-4 capitalize rounded-lg focus:outline-0"
            onClick={handleSort}
          >
            <option value="market_cap_desc">market cap desc</option>
            <option value="market_cap_asc">market cap asc</option>
            <option value="volume_desc">volume desc</option>
            <option value="volume_asc">volume asc</option>
            <option value="id_desc">id desc</option>
            <option value="id_asc">id asc</option>
            <option value="gecko_desc">gecko desc</option>
            <option value="gecko_asc">gecko asc</option>
          </select>
          <RefreshIcon className="text-cyan-400" />
        </label>
      </div>
    </div>
  );
}
