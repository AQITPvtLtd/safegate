import About from "@/components/homepage/About";
import Ambulance from "@/components/homepage/Ambulance";
import Banner from "@/components/homepage/Banner";
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
      <Infrastructure />
      <Ambulance />
      {/* <Team /> */}
      {/* <Faq /> */}
      <Facilities />
    </div>
  );
};

export default page;
