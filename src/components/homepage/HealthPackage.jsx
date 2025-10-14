"use client";
import React from "react";
import { data } from "@/data/package";
import Image from "next/image";
import Link from "next/link";

const HealthPackage = () => {
  return (
    <section className="bg-white py-16">
      {/* Title Section */}
      <div className="text-center mb-7">
        <h1 className="text-3xl md:text-4xl font-bold text-darkblue font-serif">
          Our Health Packages
        </h1>
        {/* <div className="flex justify-center mt-4">
          <div className="flex items-center w-[120px] md:w-[180px]">
            <div className="flex-1 border-t-4 border-primary"></div>
            <div className="w-6 h-6 rounded-full bg-lightgreen mx-2"></div>
            <div className="flex-1 border-t-4 border-primary"></div>
          </div>
        </div> */}
      </div>

      {/* Package Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-10">
        {data.map((d) => (
          <div
            key={d.id}
            className="group bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <Image
                src={`/packages/${d.image}`}
                width={500}
                height={400}
                alt={d.title}
                className="w-full h-56 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <h2 className="font-serif text-xl font-bold text-darkblue mb-3">
                {d.title}
              </h2>

              <Link
                href={`health-packages/${d.url}`}
                className="inline-block bg-lightgreen text-white px-5 py-2.5 rounded-md font-medium hover:bg-primary transition-colors duration-300"
              >
                Get Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthPackage;
