import React from "react";
import Image from "next/image";
import Link from "next/link";
const Team = () => {
  return (
    <div>
      <section className="py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-lightblue text-3xl font-extrabold mb-2">
            Meet Our Expert Team
          </h1>
          <div className="flex justify-center mt-1 w-full">
            <div className="grid grid-cols-4 w-1/2">
              <div className="border-2 col-start-2 border-primary"></div>
              <div className="border border-lightgreen"></div>
            </div>
          </div>
          <p className="text-lightblue text-xl text-center">
            Dedicated Professionals Committed to Your Health and Well-being
          </p>
        </div>
        <div className="lg:grid grid-cols-4">
          <div className="flex flex-col items-center px-10">
            <div className="p-2 rounded-[100%] border">
              <Image
                src="/doctors/Cardiologist.jpg"
                alt="Dr. Sukhwinder Singh"
                width={150}
                height={150}
                className="rounded-[100%] w-[210px] h-[200px]" // Changed to rounded-full for perfect circle
              />
            </div>
            <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
              Dr. Sukhwinder Singh
            </h1>
            <h2 className="text-md text-center text-lightblue">Cardiologist</h2>
            <div className="border border-lightblue my-4 w-full"></div>
            {/* <p className="text-gray-800 dark:text-white text-center text-sm">
              MBBS, MD - General Medicine, Diploma in Cardiology, Diploma in
              echocardiography
            </p> */}
          </div>
          <div className="flex flex-col items-center px-10">
            <div className="p-2 rounded-[100%] border">
              <Image
                src="/doctors/stethoscope.jpg"
                alt="Dr. Akshat Kumar"
                width={150}
                height={150}
                className="rounded-[100%] w-[210px] h-[200px]" // Changed to rounded-full for perfect circle
              />
            </div>
            <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
              Dr. Ashutosh Bhatt
            </h1>
            <h2 className="text-md text-center text-lightblue">
              General Medical Physician
            </h2>
            <div className="border border-lightblue my-4 w-full"></div>
            {/* <p className="text-gray-800 text-center text-sm dark:text-white">
              MD - Physician
            </p> */}
          </div>

          <div className="flex flex-col items-center px-10">
            <div className="p-2 rounded-[100%] border">
              <Image
                src="/doctors/thermometerPin.jpg"
                alt="Dr. Akshat Kumar"
                width={150}
                height={150}
                className="rounded-[100%] w-[210px] h-[200px]" // Changed to rounded-full for perfect circle
              />
            </div>
            <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
              Dr. Elvis Benjamin
            </h1>
            <h2 className="text-md text-center text-lightblue">Orthopedics</h2>
            <div className="border border-lightblue my-4 w-full"></div>
            {/* <p className="text-gray-800 text-center text-sm dark:text-white">
              MD - Physician
            </p> */}
          </div>

          <div className="flex flex-col items-center px-10">
            <div className="p-2 rounded-[100%] border">
              <Image
                src="/doctors/Gynecology1.avif"
                alt="Dr. Akshat Kumar"
                width={150}
                height={150}
                className="rounded-[100%] w-[210px] h-[200px]" // Changed to rounded-full for perfect circle
              />
            </div>
            <h1 className="text-xl text-center font-bold mt-4 text-lightblue">
              Dr.Anoosha K.Ravi
            </h1>
            <h2 className="text-md text-center text-lightblue">
              Gynecology & Obstetrician
            </h2>
            <div className="border border-lightblue my-4 w-full"></div>
            {/* <p className="text-gray-800 text-center text-sm dark:text-white">
              MD - Physician
            </p> */}
          </div>
        </div>
      </section>

      <div className="lg:grid grid-cols-12">
        <div className="col-start-6 col-span-2">
          <div className="p-4">
            <Link
              href="/who-are-we/our-team"
              className="bg-lightgreen hover:bg-lightgreen/90 px-4 py-2 text-white text-lg rounded-lg block text-center justify-center"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
