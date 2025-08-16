import React from "react";
import Package from "./Package";
import { data } from "@/data/package";
// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  const content = data.find((item) => item.url === params.url);

  return {
    title: content.meta_title,
    description: content.meta_desc,
    keywords: content.keyword,
  };
}

const page = ({ params }) => {
  const url = params.url;
  return (
    <div className="bg-white">
      <Package url={url} />
    </div>
  );
};

export default page;
