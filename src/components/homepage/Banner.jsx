import Form from "@/app/contact/Form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      {/* Add relative positioning here */}
      <div className="relative">
        <Image
          src="/banner/main_banner.jpeg"
          width={1000}
          height={1000}
          alt="main-banner"
          className="w-full h-[600px] lg:h-[700px] object-fill"
        />
        <div className="absolute inset-0 bg-darkblue bg-opacity-90 z-10"></div>
        {/* Ensure background is under other content */}
        <div className="absolute inset-0 z-10 lg:grid grid-cols-12 mt-10 ml-4">
          <div className="col-span-6 py-10 px-3 lg:ml-20">
            <h1 className="text-white text-3xl lg:text-5xl font-extrabold leading-normal">
              We Can Help You Get Better & Regain Your Health
            </h1>
            <h3 className="text-white text-2xl lg:text-4xl font-extralight leading-normal py-3">
              Your Health is Our Priority
            </h3>
            <p className="text-white leading-relaxed mb-5 lg:text-lg text-md">
              At Safegate, we are committed to providing exceptional medical
              care tailored to your needs. Our state-of-the-art facilities and
              highly skilled professionals ensure that you receive the best
              treatment possible.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary p-4 mt-3 font-bold text-xl rounded-tl-[30%] rounded-tr-[30%] rounded-bl-[30%] shadow-md border hover:border-gray-500 hover:shadow-white"
            >
              Contact Now
            </Link>
          </div>
          <div className="col-start-8 col-span-4 items-center lg:block hidden">
            {/* <Image
              src="/banner/banner1.png"
              width={1000}
              height={1000}
              alt="banner1"
              className="w-full h-full lg:px-20"
            /> */}

            <Form />
          </div>
        </div>
      </div>


      <div className="px-5 mt-10 lg:hidden block">
        <Form /></div>
    </div>
  );
};

export default Banner;
