import React from "react";
import DetailedBlog from "./DetailedBlog";

const page = ({ params }) => {
  const { url, id } = params;
  console.log(params);
  console.log(url);
  console.log(id);
  return (
    <div>
      <DetailedBlog url={url} id={id} />
    </div>
  );
};

export default page;
