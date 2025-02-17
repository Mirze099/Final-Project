import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import { Chart } from "../components/Chart";

const HighLowIndicator = ({ currentPrice, high, low }) => {
  const [green, setGreen] = useState();

  useEffect(() => {
    let total = high - low;
    let greenZone = ((high - currentPrice) * 100) / total;
    setGreen(Math.ceil(greenZone));
  }, [currentPrice, high, low]);

  return (
    <>
      <span
        className="bg-red-500 h-1.5 rounded-l-lg w-[50%]"
        style={{ width: `${100 - green}%` }}
      >
        &nbsp;
      </span>
      <span
        className="bg-green-500 h-1.5 rounded-r-lg w-[50%]"
        style={{ width: `${green}%` }}
      >
        &nbsp;
      </span>
    </>
  );
};

export default function CryptoDetails() {
  let { coinId } = useParams();
  let navigate = useNavigate();

  let { getCoinData, coinData: data, currency } = useContext(CryptoContext);

  useLayoutEffect(() => {
    getCoinData(coinId);
  }, [coinId]);

  const close = () => {
    navigate("..");
  };

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 w-full h-full element flex items-center justify-center"
      onClick={close}
    >
      <div
        className="w-[65%] h-[90%] bg-gray-950 opacity-75 rounded-lg text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        {data ? (
          <div className="flex items-center justify-between h-full w-full p-5">
            <div className="flex flex-col w-[45%] h-full pr-2 mr-2">
              <div className="flex w-full items-center">
                <img
                  className="w-[3rem] h-[3rem] mr-2 ml-2"
                  src={data.image.large}
                  alt={data.id}
                />
                <h1 className="text-xl capitalize font-medium">{data.name}</h1>
                <span className="text-sm py-1 px-2 ml-2 bg-cyan-300 text-white opacity-75 rounded uppercase">
                  {data.symbol}
                </span>
              </div>

              <div className="flex w-full mt-3">
                <div className="flex flex-col w-full">
                  <div className="flex justify-between">
                    <span className="text-sm capitalize text-gray-400">
                      Price
                    </span>
                    <div
                      className={`text-sm px-2 ml-2 font-medium flex items-center rounded uppercase opacity-75
                        ${
                          data.market_data.price_change_percentage_24h > 0
                            ? "bg-green-500 text-green-400"
                            : "bg-red-500 text-red-400"
                        }
                        `}
                    >
                      <span>
                        {Number(
                          data.market_data.price_change_percentage_24h
                        ).toFixed(2)}
                        %
                      </span>
                      <ArrowDownwardIcon
                        className={` w-[1rem] ml-1 ${
                          data.market_data.price_change_percentage_24h > 0
                            ? "fill-green-500 rotate-180"
                            : "fill-red-500"
                        }`}
                      />
                    </div>
                  </div>
                  <h2 className="text-lg font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      maximumSignificantDigits: 5,
                    }).format(data.market_data.current_price[currency])}
                  </h2>
                </div>
              </div>

              <div className="flex w-full mt-3 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-400">
                    Market Cap
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.market_cap[currency])}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-400">
                    fully diluted valuation
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      notation: "compact",
                    }).format(
                      data.market_data.fully_diluted_valuation[currency]
                    )}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col w-full mt-3 justify-between">
                <span className="text-sm capitalize text-gray-400">
                  Total Volume
                </span>
                <h2 className="text-base font-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(data.market_data.total_volume[currency])}
                </h2>
              </div>

              <div className="flex w-full mt-3 justify-between">
                <HighLowIndicator
                  currentPrice={data.market_data.current_price[currency]}
                  high={data.market_data.high_24h[currency]}
                  low={data.market_data.low_24h[currency]}
                />
              </div>

              <div className="flex w-full mt-3 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-400">
                    Low 24H
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,
                    }).format(data.market_data.low_24h[currency])}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-400">
                    High 24H
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,
                    }).format(data.market_data.high_24h[currency])}
                  </h2>
                </div>
              </div>

              <div className="flex w-full mt-3 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-400">
                    Max Supply
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.max_supply)}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-400">
                    Circulating Supply
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.circulating_supply)}
                  </h2>
                </div>
              </div>

              <div className="flex w-full mt-3 justify-between">
                <div className="flex flex-col">
                  <a
                    target={"_blank"}
                    className="text-sm bg-gray-600 text-gray-300 px-2 py-1 my-1 rounded"
                    href={data?.links?.homepage[0]}
                  >
                    {data?.links?.homepage[0].substring(0, 30)}
                  </a>
                  <a
                    target={"_blank"}
                    className="text-sm bg-gray-600 text-gray-300 px-2 py-1 my-1 rounded"
                    href={data?.links?.blockchain_site[0]}
                  >
                    {data?.links?.blockchain_site[0].substring(0, 30)}
                  </a>
                  {data?.links?.official_forum_url[0] && (
                    <a
                      target={"_blank"}
                      className="text-sm bg-gray-600 text-gray-300 px-2 py-1 my-1 rounded"
                      href={data?.links?.official_forum_url[0]}
                    >
                      {data?.links?.official_forum_url[0].substring(0, 30)}
                    </a>
                  )}
                </div>
                <div className="flex flex-col content-start">
                  <span>sentiment</span>
                  <div className="flex justify-between">
                    <div
                      className={`text-sm px-2 ml-2 my-1 font-medium flex items-center rounded uppercase opacity-75 bg-green-500 text-green-400
                        `}
                    >
                      <span>
                        {Number(data.sentiment_votes_up_percentage).toFixed(2)}%
                      </span>
                      <ArrowDownwardIcon
                        className={` w-[1rem] ml-1 fill-green-500 rotate-180 `}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm px-2 ml-2 my-1 font-medium flex items-center rounded uppercase opacity-75 bg-red-500 text-red-400">
                      <span>
                        {Number(data.sentiment_votes_down_percentage).toFixed(
                          2
                        )}
                        %
                      </span>
                      <ArrowDownwardIcon className="w-[1rem] ml-1 fill-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[55%] h-full pl-2 bg-green-500">
              {/* <Chart /> */}
              chart
            </div>
          </div>
        ) : null}
      </div>
    </div>,
    document.getElementById("model")
  );
}
