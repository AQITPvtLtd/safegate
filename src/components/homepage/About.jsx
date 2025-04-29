import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="bg-white">
      <div className="lg:grid grid-cols-2 items-center flex flex-col-reverse">
        <div className="lg:p-10 px-3">
          <h1 className="text-black text-4xl lg:text-5xl font-extrabold leading-normal lg:text-start text-center">
            About Us
          </h1>
          <div className="lg:grid grid-cols-2 w-1/2 md:block hidden">
            <div className="border-2 border-primary mr-10"></div>
            <div className="border border-lightgreen -ml-10 mr-20"></div>
          </div>
          <p className="lg:leading-loose leading-relaxed lg:mt-8 lg:text-start text-center text-lg text-black">
            Welcome to Safegate Medical Center, where your health and well-being
            are our top priorities. Established with a vision to provide
            comprehensive, patient-centered care, we combine advanced technology
            with compassionate service. Our dedicated team of medical
            professionals is here to support you every step of the way.
          </p>
          <div className="flex mt-5 items-center">
            <Link
              href="/who-are-we/about"
              className="bg-primary hover:bg-darkblue px-4 py-2 text-white text-lg mr-3 rounded-lg"
            >
              Know More
            </Link>
            <Link
              className="bg-lightgreen hover:bg-lightgreen/90 px-4 py-2 text-white text-lg rounded-lg"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="lg:p-10 lg:px-10 px-5 md:mt-0 mt-5">
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
