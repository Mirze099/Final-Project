import React from "react";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div className="main text-4xl text-white">
      <Helmet>
        <title>Not-Found</title>
      </Helmet>
      404 Page Not Found
    </div>
  );
}
