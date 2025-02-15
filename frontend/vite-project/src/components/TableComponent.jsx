import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";

export default function TableComponent() {
  let { cryptoData } = useContext(CryptoContext);

  return (
    <div className="w-[80%] flex flex-col items-center mt-9 border border-gray-100 rounded">
      {cryptoData ? (
        <table className="w-full table-auto">
          <thead className="capitalize text-base text-gray-300 font-medium border-b border-gray-300">
            <tr>
              <th className="col">Asset</th>
              <th className="col">Name</th>
              <th className="col">Price</th>
              <th className="col">Total Volume</th>
              <th className="col">Market Cap Change</th>
              <th className="col">1H</th>
              <th className="col">24H</th>
              <th className="col">7D</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((data) => {
              return (
                <tr
                  key={data.id}
                  className="text-center text-white text-base border-b border-gray-100 hover:bg-gray-700 cursor-default last:border-b-0 "
                >
                  <td className="col1 flex items-start justify-start uppercase">
                    <button className="outline-0 border-0 bg-none star">
                      <StarBorderPurple500SharpIcon />
                    </button>
                    <img
                      className="w-[1.2rem] h-[1.2rem] mx-1.5"
                      src={data.image}
                      alt={data.name}
                    />
                    <span>{data.symbol}</span>
                  </td>
                  <td className="col1">{data.name}</td>
                  <td className="col1">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(data.current_price)}
                  </td>
                  <td className="col1">{data.total_volume}</td>
                  <td className="col1">
                    {data.market_cap_change_percentage_24h}%
                  </td>
                  <td
                    className={
                      data.price_change_percentage_1h_in_currency > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {Number(
                      data.price_change_percentage_1h_in_currency
                    ).toFixed(2)}
                  </td>
                  <td
                    className={
                      data.price_change_percentage_24h_in_currency > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {Number(
                      data.price_change_percentage_24h_in_currency
                    ).toFixed(2)}
                  </td>
                  <td
                    className={
                      data.price_change_percentage_7d_in_currency > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {Number(
                      data.price_change_percentage_7d_in_currency
                    ).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
