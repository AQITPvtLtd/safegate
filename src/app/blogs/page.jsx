import React from "react";
import Blogs from "./Blogs";
export const metadata = {
  title: "Health Reads by Safegate | Expert Medical Blogs Dehradun",
  description:
    "Explore expert-written health blogs by Safegate Medical Centre in Dehradun—easy tips, updates, and insights for your well-being.",
  keywords: [
    "medical blogs in dehradun",
    "health tips safegate",
    "wellness advice",
    "expert health articles",
    "dehradun healthcare blog",
    "hospital news updates",
    "patient education",
    "safegate insights",
    "health info hub",
    "trusted medical blogs",
  ],
};
const page = () => {
  return (
    <div className="bg-white">
      <Blogs />
    </div>
  );
};

export default page;
