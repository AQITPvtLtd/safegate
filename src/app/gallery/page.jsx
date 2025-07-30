import React from "react";
import Gallery from "./Gallery";
export const metadata = {
  title: "Step Inside Safegate | Hospital Tour in Dehradun",
  description:
    "Take a quick visual tour of Safegate Medical Centre in Dehradun—see our tech, clean spaces, and care-first environment in action.",
  keywords: [
    "hospital tour in dehradun",
    "safegate gallery",
    "medical facility photos",
    "clinic interiors",
    "dehradun hospital images",
    "healthcare setup",
    "modern medical space",
    "safegate visuals",
    "hospital walkthrough",
    "clean hospital environment",
  ],
};
const page = () => {
  return (
    <div className="bg-white">
      <Gallery />
    </div>
  );
};

export default page;
