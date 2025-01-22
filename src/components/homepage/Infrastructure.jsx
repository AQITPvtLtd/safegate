import React from "react";
import Image from "next/image";
const Infrastructure = () => {
  return (
    <div className="mx-5 lg:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 mt-10">
        {/* Left section: Text and Information */}
        <div className="bg-primary text-white lg:shadow-2xl shadow-primary rounded-tl-lg rounded-bl-lg md:rounded-bl-none md:rounded-tl-lg">
          <h1 className="text-4xl font-bold mb-4 text-center pt-4">
            Infrastructure
          </h1>

          {/* <div className="grid grid-cols-2 w-1/2 text-center items-center">
            <div className="border-2 border-lightgreen lg:-mr-80 lg:ml-52 lg:block hidden"></div>
          </div> */}
          <p className="text-lg px-5 pb-5">
            The land area is around 2500 yards and the covered area is around
            13,000 sq feet, comprising of:
          </p>
          <ul className="list-disc list-outside lg:ml-5 ml-3 p-5">
            <li>OPD block – Doctors chambers, Dressing rooms, Lift.</li>
            <li>Two Receptions & waiting halls</li>
            <li>
              Two fully equipped operation theatres, and a fully equipped labor
              room
            </li>
            <li>Private AC, non-AC, and deluxe rooms for patient admissions</li>
            <li>24-hour functional fully computerized Pharmacy</li>
            <li>Diagnostic room for Digital X-ray processing</li>
            <li>9-bedded ICU</li>
            <li>
              Central oxygen supply, central suction throughout the hospital
            </li>
            <li>
              Pathology lab – 24-hour functional, fully computerized, equipped
              with automated analyzers
            </li>
            <li>Generator for uninterrupted power supply</li>
            <li>Ample parking space for 10 cars</li>
          </ul>
        </div>

        {/* Right section: Image */}
        <div className="relative rounded-tr-lg rounded-br-lg md:rounded-none">
          <Image
            src="/about/infra.png"
            alt="Infrastructure Overview"
            layout="fill"
            objectFit="contain"
            className="w-full p-3 h-full rounded-tr-lg rounded-br-lg md:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
