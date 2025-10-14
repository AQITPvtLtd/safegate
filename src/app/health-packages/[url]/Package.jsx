"use client";
import React from "react";
import { data } from "@/data/package";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Package = ({ url }) => {
  const pack = data.find((d) => d.url === url);

  if (!pack) return <p className="text-center py-10">Package not found.</p>;

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-darkblue rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="text-center py-10 px-4">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold font-serif">
            {pack.title}
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4 text-white text-lg md:text-2xl font-semibold font-serif">
            <span>{pack.content.length} Tests Included</span>
            <span className="hidden md:block text-white">|</span>
            <span>Price: ₹ {pack.price} /-</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-12 pb-10">
          {/* Right Side - Image (on small screens, this comes first) */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl shadow-md bg-white">
              <Image
                src={`/packages/${pack.image}`}
                width={600}
                height={500}
                alt={pack.title}
                className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Left Side - List & Call Button (on small screens, below image) */}
          <div className="text-white order-2 lg:order-1">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <h2 className="text-xl font-semibold mb-3 text-white font-serif">
                Tests Included:
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-sm md:text-base">
                {pack.content.map((c, index) => (
                  <li key={index} className="text-white/90">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Call Button */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <Link
                href="tel:+91 7817893001"
                className="bg-lightgreen hover:bg-lightgreen/90 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md"
              >
                <span>Call for Booking</span>
                <MdKeyboardDoubleArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
