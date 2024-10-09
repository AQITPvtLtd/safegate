import Image from "next/image";
import React from "react";
import { items } from "@/data/services";
import Link from "next/link";
const Services = () => {
  return (
    <div className="pt-10 overflow-x-hidden">
      {/* Banner image */}
      <div className="w-full">
        <Image
          src="/services/services1.png"
          layout="responsive"
          width={1000}
          height={300}
          className="w-full object-cover"
          alt="services banner"
        />
      </div>

      {/* Services grid section */}
      <div className="lg:grid grid-cols-2 m-5 lg:m-20 gap-10 text-black">
        {items.map((s) => (
          <div
            key={s.id}
            className="mb-10 lg:mb-0 hover:scale-105 duration-300"
          >
            <div className="flex items-start">
              {/* Service image */}
              <div className="flex-shrink-0">
                <Image
                  src={s.image}
                  width={100}
                  height={120}
                  className="bg-primary rounded-lg p-1 object-cover"
                  alt="service"
                />
              </div>
              {/* Service description */}
              <Link href={`/services/${s.url}`} className="ml-5">
                <h1 className="text-xl font-bold">{s.title}</h1>
                <p className="text-sm line-clamp-3">{s.subContent}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
