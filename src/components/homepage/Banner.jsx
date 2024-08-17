import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="mt-[160px] relative">
      {" "}
      {/* Add relative positioning here */}
      <div className="relative">
        <Image
          src="/banner/main_banner.jpeg"
          width={1000}
          height={1000}
          alt="main-banner"
          className="w-full h-[500px] object-fill"
        />
        <div className="absolute inset-0 bg-darkblue bg-opacity-90 z-10"></div>
        {/* Ensure background is under other content */}
        <div className="absolute inset-0 z-10 grid grid-cols-2">
          <div className="py-10 px-3">
            <h1 className="text-white text-5xl font-extrabold leading-normal ">
              We Can Help You Get Better & Regain Your Health
            </h1>
            <h3 className="text-white text-4xl font-extralight leading-normal">
              Your Health is Our Priority
            </h3>
            <p className="text-white leading-loose mb-5 text-lg">
              At Safegate, we are committed to providing exceptional medical
              care tailored to your needs. Our state-of-the-art facilities and
              highly skilled professionals ensure that you receive the best
              treatment possible.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary p-4 font-bold text-xl rounded-tl-[30%] rounded-tr-[30%] rounded-bl-[30%] shadow-md border hover:border-gray-500 hover:shadow-white"
            >
              Contact Now
            </Link>
          </div>
          <div className="flex justify-center col-start-2 items-center">
            <Image
              src="/banner/banner1.png"
              width={1000}
              height={1000}
              alt="banner1"
              className="w-full h-full px-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
