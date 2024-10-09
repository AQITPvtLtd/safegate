import React from "react";
import Package from "./Package";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div className="bg-white">
      <Package url={url} />
    </div>
  );
};

export default page;
