import React from "react";
import Contact from "../pages/user/contact/Contact";
import Home from "../pages/user/home/Home";
import NotFound from "../pages/user/notfound/NotFound";
import UserRoot from "../pages/user/UserRoot";
import Login from "../pages/user/login/Login";
import Coin from "../pages/user/coin/Coin";
import Crypto from "../pages/user/crypto/Crypto";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AdminCoin from "../pages/admin/admincoin/AdminCoin";
import AdminDetail from "../pages/admin/admindetail/AdminDetail";
import AddCoin from "../pages/admin/addcoin/AddCoin";
import EditCoins from "../pages/admin/editcoins/EditCoins";
import CryptoDetails from "../components/CryptoDetails";
import Register from "../pages/user/register/Register";
import Swap from "../pages/user/swap/Swap";

const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "coin",
        element: <Coin />,
      },
      {
        path: "crypto",
        element: <Crypto />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "swap",
        element: <Swap />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "admincoin",
        element: <AdminCoin />,
      },
      {
        path: "admincoin/:id",
        element: <AdminDetail />,
      },
      {
        path: "addcoin",
        element: <AddCoin />,
      },
      {
        path: "admincoin/editcoin/:id",
        element: <EditCoins />,
      },
    ],
  },
];

export default ROUTES;
