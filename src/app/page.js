export const metadata = {
  title: "Safegate Medical Centre | Trusted Healthcare in Dehradun",
  description:
    "Safegate Medical Centre in Dehradun offers reliable, patient-first medical care with advanced facilities and compassionate professionals.",
  keywords: [
    "medical centre in dehradun",
    "safegate hospital",
    "dehradun healthcare",
    "patient care services",
    "multi speciality clinic",
    "best doctors dehradun",
    "hospital in dehradun",
    "trusted medical care",
    "health centre dehradun",
    "emergency medical help",
  ],
};


import About from "@/components/homepage/About";
import Ambulance from "@/components/homepage/Ambulance";
import Banner from "@/components/homepage/Banner";
import Blog from "@/components/homepage/Blog";
import Facilities from "@/components/homepage/Facilities";
import Faq from "@/components/homepage/Faq";
import HappyPatients from "@/components/homepage/HappyPatients";
import HealthPackage from "@/components/homepage/HealthPackage";
import Infrastructure from "@/components/homepage/Infrastructure";
import Services from "@/components/homepage/Services";
import Team from "@/components/homepage/Team";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <Banner />
      <About />
      <Services />
      <HealthPackage />
      <HappyPatients />
      <Blog />
      <Infrastructure />
      <Ambulance />
      {/* <Team /> */}
      {/* <Faq /> */}
      <Facilities />
    </div>
  );
};

export default page;
