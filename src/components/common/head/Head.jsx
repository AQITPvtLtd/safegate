import React from "react";
import Image from "next/image";
import Link from "next/link";
const Head = ({ service }) => {
  return (
    <div className="relative">
      <Image
        src={`${service.image}`}
        width={1000}
        height={1000}
        className="w-full h-[300px] object-cover"
        alt="service"
      />
      <div className="bg-primary absolute inset-0 opacity-50"></div>
      <div className=" absolute inset-0 text-center text-white grid grid-rows-8">
        <div className="row-start-2 mt-14 font-bold font-serif text-6xl">
          {service.name}
        </div>
      </div>
    </div>
  );
};

export default Head;
