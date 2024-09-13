import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-2">
        <div className="p-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-normal">
            About Us
          </h1>
          <div className="grid grid-cols-2 w-1/2">
            <div className="border-2 border-primary mr-10"></div>
            <div className="border border-lightgreen -ml-10 mr-20"></div>
          </div>
          <p className="leading-loose mt-8 text-lg">
            Welcome to Safegate Medical Center, where your health and well-being
            are our top priorities. Established with a vision to provide
            comprehensive, patient-centered care, we combine advanced technology
            with compassionate service. Our dedicated team of medical
            professionals is here to support you every step of the way.
          </p>
          <div className="flex mt-5">
            <Link
              href="/who-are-we/about"
              className="bg-primary hover:bg-darkblue px-4 py-2 text-white text-lg mr-3"
            >
              Know More
            </Link>
            <Link
              className="bg-lightgreen hover:bg-lightgreen/90 px-4 py-2 text-white text-lg"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="lg:p-10 px-10">
          <Image
            src="/about/about.png"
            className="w-full h-full"
            width={1000}
            height={1000}
            alt="about banner"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
