import Image from "next/image";
import { facilitiesitems } from "@/data/facilities";
import React from "react";

const Facilities = () => {
  return (
    <div className="bg-primary">
      <div className="lg:grid grid-cols-6 gap-3 mx-5 p-4">
        <div className="col-span-5">
          <h1 className="text-white text-4xl mt-3 font-extrabold font-serif">
            Round the Clock Facilities
          </h1>
          {/* <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 lg:p-10 pl-0 pt-5">
            <div className="border border-white shadow-md shadow-white lg:lg:flex mb-5">
              <Image
                src="/facilities/emergency.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">Emergency Services</h1>
              </div>
            </div>
          </div> */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 lg:p-10 pl-0 pt-5">
            {facilitiesitems.map((facility) => (
              <div
                key={facility.id}
                className="border border-white shadow-md shadow-white grid-cols-1 mb-5 flex flex-col items-center"
              >
                <img
                  src={facility.image}
                  alt={facility.heading}
                  width={100}
                  height={100}
                  className="py-2"
                />
                <h3 className="p-2 text-white text-center">
                  {facility.heading}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="col-start-6 lg:block hidden lg:mt-32">
          <div className="bg-white p-3 mb-3">
            <Image
              src="/gallery/7.jpg"
              width={1000}
              height={1000}
              className="w-[200px] h-[150px] object-cover"
              alt="sample-image"
            />
          </div>
          <div className="bg-white p-3 mb-3">
            <Image
              src="/gallery/8.jpg"
              width={1000}
              height={1000}
              className="w-[200px] h-[150px] object-cover"
              alt="sample-image"
            />
          </div>
          <div className="bg-white p-3 mb-3">
            <Image
              src="/gallery/1.jpg"
              width={1000}
              height={1000}
              className="w-[200px] h-[150px] object-cover"
              alt="sample-image"
            />
          </div>
          <div className="bg-white p-3 mb-3">
            <Image
              src="/gallery/10.jpg"
              width={1000}
              height={1000}
              className="w-[200px] h-[150px] object-cover"
              alt="sample-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
