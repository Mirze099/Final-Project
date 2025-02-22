import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function AdminCoin() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  async function getData() {
    axios
      .get("http://localhost:3000/product")
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const sortData = () => {
    const sortedData = [...data].sort(
      (a, b) => a.current_price - b.current_price
    );
    setData(sortedData);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete(id) {
    let filteredData = data.filter((data) => data._id !== id);
    setData(filteredData);
    axios
      .delete(`http://localhost:3000/product/${id}`)
      .then((res) => {
        getData();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }

  return (
    <div className="main bg-white tables">
      <button onClick={sortData} className="btn">
        Sort By Price
      </button>
      <input
        type="text"
        placeholder="search"
        className="search-inp"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  className="w-[2rem] h-[2rem]"
                  src={item.image}
                  alt={item.name}
                />
              </td>
              <td>{item.name}</td>
              <td className="uppercase">{item.symbol}</td>
              <td>$ {item.current_price}</td>
              <td>
                <div className="btnss">
                  <NavLink to={`${item._id}`}>
                    <Button color="primary" variant="dashed">
                      Detail
                    </Button>
                  </NavLink>
                  <NavLink to={`editcoin/${item._id}`}>
                    <Button color="danger" variant="dashed" className=" ml-2">
                      Edit
                    </Button>
                  </NavLink>
                  <Button
                    color="default"
                    variant="dashed"
                    className="ml-2"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
