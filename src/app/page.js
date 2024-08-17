import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Faq from "@/components/homepage/Faq";
import HappyPatients from "@/components/homepage/HappyPatients";
import Services from "@/components/homepage/Services";
import Team from "@/components/homepage/Team";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <HappyPatients />
      <Team />
      <Faq />
    </div>
  );
};

export default page;
