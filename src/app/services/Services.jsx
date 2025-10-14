"use client";
import Image from "next/image";
import React from "react";
import { items } from "@/data/services";
import Link from "next/link";

const Services = () => {
  return (
    <div className="pt-10 overflow-x-hidden">
      {/* ===== Banner Section ===== */}
      <div className="relative w-full">
        
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-black text-3xl font-bold tracking-wide font-serif">
            Our Services
          </h1>
        </div>
      </div>

      {/* ===== Services Section ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((s) => (
            <div
              key={s.id}
              className="group relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Service Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Box */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-black mb-3 font-serif group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h2>
                <p className="text-sm text-gray-700 line-clamp-3 mb-5">
                  {s.subContent}
                </p>

                <Link
                  href={`/services/${s.url}`}
                  className="inline-block px-5 py-2 text-white bg-primary rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
