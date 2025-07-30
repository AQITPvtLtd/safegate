import React from "react";
import Services from "./Services";
export const metadata = {
  title: "Our Services | Complete Medical Care in Dehradun",
  description:
    "Safegate Medical Centre in Dehradun offers a full range of medical services, from diagnostics to treatment, all under one trusted roof.",
  keywords: [
    "medical services in dehradun",
    "safegate treatments",
    "healthcare facilities",
    "diagnostics dehradun",
    "outpatient care",
    "specialist services",
    "clinic services",
    "health checkups",
    "emergency services",
    "hospital care dehradun",
  ],
};
const page = () => {
  return (
    <div className="bg-white">
      <Services />
    </div>
  );
};

export default page;
