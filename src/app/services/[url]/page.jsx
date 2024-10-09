import React from "react";
import Service from "./Service";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div className="bg-white">
      <Service url={url} />
    </div>
  );
};

export default page;
