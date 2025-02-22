import React, { useContext } from "react";
import { CryptoContext } from "./../context/CryptoContext";
import Pagination from "./Pagination";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";

const TableComponent = () => {
  let { cryptoData, currency } = useContext(CryptoContext);

  return (
    <>
      <div className="flex flex-col w-[80%] mt-4 border border-cyan-500 rounded">
        {cryptoData ? (
          <table className="w-full table-auto">
            <thead
              className="capitalize text-base text-gray-400
            font-medium border-b border-gray-800 text-bold
            "
            >
              <tr className="text-gray-400">
                <th className="py-1">asset</th>
                <th className="py-1">name</th>
                <th className="py-1">price</th>
                <th className="py-1">total volume</th>
                <th className="py-1">market cap change</th>
                <th className="py-1 lg:table-cell hidden">1H</th>
                <th className="py-1 lg:table-cell hidden">24H</th>
                <th className="py-1 lg:table-cell hidden">7D</th>
              </tr>
            </thead>
            <tbody className="text-gray-400 p-5 ">
              {cryptoData.map((data) => {
                return (
                  <tr
                    key={data.id}
                    className="text-center text-base border-b border-gray-800 
            hover:bg-gray-600 last:border-b-0
            "
                  >
                    <td className="py-4 flex items-center uppercase p-5 ml-4">
                      <StarBorderIcon className="text-cyan-400 mr-4" />
                      <img
                        className="w-[1.2rem] h-[1.2rem] mx-1.5"
                        src={data.image}
                        alt={data.name}
                      />
                      <span>
                        <Link to={`${data.id}`}>{data.symbol}</Link>
                      </span>
                    </td>
                    <td className="py-4">
                      <Link to={`${data.id}`}>{data.name}</Link>
                    </td>
                    <td className="py-4">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                      }).format(data.current_price)}
                    </td>
                    <td className="py-4">{data.total_volume}</td>
                    <td className="py-4">
                      {data.market_cap_change_percentage_24h}%
                    </td>
                    <td
                      className={
                        data.price_change_percentage_1h_in_currency > 0
                          ? "text-green-500 py-4 lg:table-cell hidden "
                          : "text-red-500 py-4  lg:table-cell hidden"
                      }
                    >
                      {Number(
                        data.price_change_percentage_1h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_24h_in_currency > 0
                          ? "text-green-500 py-4 lg:table-cell hidden"
                          : "text-red-500 py-4  lg:table-cell hidden"
                      }
                    >
                      {Number(
                        data.price_change_percentage_24h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_7d_in_currency > 0
                          ? "text-green-500 py-4 lg:table-cell hidden"
                          : "text-red-500 py-4  lg:table-cell hidden"
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
      <div className="flex items-center justify-between w-[80%] mt-3 capitalize h-[2rem]">
        <span>Mirzo</span>
        <Pagination />
      </div>
    </>
  );
};

export default TableComponent;
