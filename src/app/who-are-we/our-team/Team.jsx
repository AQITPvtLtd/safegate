"use client";

import React from "react";
import { doctorsdata } from "@/data/doctors";
import Image from "next/image";
import { FaStethoscope } from "react-icons/fa";
// import { FaBookBookmark } from "react-icons/fa6";
import Head from "@/components/common/head/Head";
const Team = () => {
  const uniqueCategories = [
    ...new Set(doctorsdata.map((doctor) => doctor.category)),
  ];

  const getDoctorsByCategory = (category) => {
    return doctorsdata.filter((doctor) => doctor.category === category);
  };
  const banner = {
    name: "Our Team",
    image: "/doctors/banner.png",
  };
  return (
    <div>
      <Head service={banner} />
      <div className="mt-10">
        {uniqueCategories.map((u, index) => (
          <div key={index} className="mb-12">
            <h1 className="text-center text-2xl font-semibold text-darkblue">
              {u}
            </h1>
            <div className="flex justify-center">
              <div
                className="border-b-2 border-lightgreen mt-2 rounded-full"
                style={{ width: `${u.length}ch` }}
              ></div>
            </div>
            <div className="lg:grid grid-cols-3 lg:mx-[250px] gap-x-4 mt-12 mx-5">
              {getDoctorsByCategory(u).map((d) => (
                <div
                  key={d.id}
                  className="bg-primary rounded-lg p-3 lg:mb-0 mb-5"
                >
                  <div className="border p-2 bg-white h-[400px] flex justify-center shadow-xl rounded-lg translate-y-3 translate-x-3">
                    <div>
                      <Image
                        src={`/doctors/${d.image}`}
                        width={1000}
                        height={1000}
                        className="w-[250px] h-[240px] rounded-lg object-cover"
                        alt={d.name}
                      />
                      <div className="text-center font-semibold text-lg">
                        {d.name}
                      </div>
                      <div className="flex">
                        <FaStethoscope className="mt-1 text-xl mr-1 text-primary" />
                        {d.post}
                      </div>
                      {/* <div className="flex">
                        <FaBookBookmark className="mt-1 text-xl mr-1 text-primary" />
                        {d.education}
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
