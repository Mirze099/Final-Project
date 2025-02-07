import Favorites from "../pages/user/favorites/Favorites";
import Home from "../pages/user/home/Home";
import Login from "../pages/user/login/Login";
import NotFound from "../pages/user/notfound/NotFound";
import Register from "../pages/user/register/Register";
import UserRoot from "../pages/user/UserRoot";
import React from "react";

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
        path: "favorites",
        element: <Favorites />,
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
