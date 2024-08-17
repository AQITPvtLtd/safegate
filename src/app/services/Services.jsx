import Image from "next/image";
import React from "react";
import { items } from "@/data/services";
const Services = () => {
  return (
    <div className="mt-[165px]">
      <Image
        src="/services/services.png"
        width={10000}
        height={1000}
        className="w-full"
        alt="services banner"
      />
      <div className="grid grid-cols-2 m-20 gap-10">
        {items.map((s) => (
          <div key={s.id}>
            <div className="flex">
              <Image
                src={`${s.image}`}
                width={100}
                height={100}
                className="bg-primary p-2 rounded-[100%]"
                alt="service"
              />
              <div className="ml-5">
                <h1 className="text-xl font-bold">{s.title}</h1>
                <p className="text-sm">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
