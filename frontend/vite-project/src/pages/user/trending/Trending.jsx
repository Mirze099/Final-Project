import React from "react";
import Navigation from "../../../components/Navigation";

export default function Trending() {
  return (
    <div>
      <main
        className="w-full h-full flex flex-col first-letter:
content-center items-center relative text-white
"
      >
        <div className="w-screen h-screen fixed -z-10" />
        <Navigation />
      </main>
    </div>
  );
}
