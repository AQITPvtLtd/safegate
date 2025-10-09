import Form from "@/app/contact/Form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative">
        <Image
          src="/banner/new.png"
          width={1000}
          height={1000}
          alt="main-banner"
          className="w-full h-[600px] lg:h-[550px] object-cover"
        />

        {/* Content Overlay (only around text) */}
        <div className="absolute inset-0 z-10 flex items-center px-4 lg:px-16">
          <div className="bg-gray-400 bg-opacity-80 rounded-xl p-6 md:p-10 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug text-white md:text-justify">
              We Can Help You Get Better & Regain Your Health
            </h1>
            <h3 className="text-2xl font-semibold leading-normal py-3 text-white">
              Your Health is Our Priority
            </h3>
            <p className="text-md md:text-lg leading-8 mb-6 text-white md:text-justify">
              At Safegate, we are committed to providing exceptional medical
              care tailored to your needs. Our state-of-the-art facilities and
              highly skilled professionals ensure that you receive the best
              treatment possible.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary px-6 py-3 inline-block font-bold text-lg rounded-2xl shadow-md border border-transparent hover:border-gray-500 hover:shadow-lg transition duration-300"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>

      {/* Form - visible only on mobile */}
      {/* <div className="lg:px-5 px-3 mt-10 lg:hidden block">
        <Form />
      </div> */}
    </div>
  );
};

export default Banner;
