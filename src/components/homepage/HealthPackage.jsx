import React from "react";
import { data } from "@/data/package";
import Image from "next/image";
import Link from "next/link";
const HealthPackage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-black mt-14">
        Our Health Packages
      </h1>
      <div className="flex justify-center mt-1 my-14 ">
        <div className="grid grid-cols-4 w-1/2">
          <div className="border-2 col-start-2 border-primary"></div>
          <div className="border border-lightgreen"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-5 mx-5">
        {data.map((d) => (
          <div
            key={d.id}
            className="shadow-md rounded-md hover:scale-105 duration-300"
          >
            <Image
              src={`/packages/${d.image}`}
              width={1000}
              height={1000}
              className="rounded-t-md"
              alt="health-img"
            />
            <div className="p-3">
              <h1 className="font-bold text-2xl text-darkblue">{d.title}</h1>
              <div className="mt-3">
                <Link
                  href={`health-packages/${d.url}`}
                  className="bg-lightgreen text-white p-2 rounded-md"
                >
                  Get Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPackage;
