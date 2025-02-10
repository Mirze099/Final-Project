import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes/Routes";
const routes = createBrowserRouter(ROUTES);

function CryptoCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "20px",
        height: "20px",
        backgroundColor: "rgba(0, 255, 255, 0.7)",
        borderRadius: "50%",
        boxShadow: "0 0 10px cyan, 0 0 20px cyan",
        transform: "translate(-50%, -50%) scale(1)",
        animation: "pulse 1s infinite alternate",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <CryptoCursor />
    </>
  );
}

export default App;
