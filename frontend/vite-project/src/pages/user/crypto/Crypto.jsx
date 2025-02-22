import React from "react";
import Navigation from "../../../components/Navigation";
import TableComponent from "../../../components/TableComponent";
import { Outlet } from "react-router-dom";
import { CryptoProvider } from "../../../context/CryptoContext";
import Filters from "../../../components/Filters";
import { Helmet } from "react-helmet";

export default function Crypto() {
  return (
    <div>
      <CryptoProvider>
        <Helmet>
          <title>Crypto-Page</title>
        </Helmet>
        <main
          className="w-full h-full flex flex-col first-letter:
content-center items-center relative text-white
"
        >
          <div className="w-screen h-screen fixed -z-10" />
          <Navigation />
        </main>
        <section className="items-center h-full flex flex-col mt-16 mb-24 relative">
          <Filters />
          <TableComponent />
          <Outlet />
        </section>
      </CryptoProvider>
    </div>
  );
}
