import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminDetail() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  async function getData() {
    try {
      let res = await axios
        .get(`http://localhost:3000/product/${id}`)
        .then((res) => setItem(res.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="main bg-white ">
      {item ? (
        <div
          className="arrivals-card border border-gray-200 p-2"
          key={item._id}
        >
          <div className="arrivals-img">
            <img src={item.image} className="w-[10px]" />
          </div>
          <div className="arrivals-parag">
            <h1>Title: {item.name}</h1>
            <p>Price: {item.current_price} $</p>
            <span>Description: {item.symbol}</span>
            <button className="btn" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
