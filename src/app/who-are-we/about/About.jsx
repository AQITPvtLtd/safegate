import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className=" mx-5 lg:mx-10 py-10">
      <div className="lg:grid grid-cols-2">
        <div className="p-10">
          <h1 className="text-black text-4xl lg:text-5xl font-extrabold leading-normal">
            About Us
          </h1>
          <div className="grid grid-cols-2 w-1/2">
            <div className="border-2 border-primary mr-10"></div>
            <div className="border border-lightgreen -ml-10 mr-20"></div>
          </div>
          <p className="leading-loose mt-8 text-lg text-black">
            Welcome to Safegate Medical Center, where your health and well-being
            are our top priorities. Established with a vision to provide
            comprehensive, patient-centered care, we combine advanced technology
            with compassionate service. Our dedicated team of medical
            professionals is here to support you every step of the way.
          </p>
          {/* <div className="flex mt-5">
            <Link
              href="/who-are-we/about"
              className="bg-primary hover:bg-darkblue px-4 py-2 text-white text-lg mr-3"
            >
              Know More
            </Link>
            <Link
              className="bg-lightgreen hover:bg-lightgreen/90 px-4 py-2 text-white text-lg"
              href="/contact"
            >
              Contact Us
            </Link>
          </div> */}
        </div>
        <div className="lg:p-10 px-10">
          <Image
            src="/about/about.png"
            className="w-full h-full"
            width={1000}
            height={1000}
            alt="about banner"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
        {/* First Section */}
        <div className="bg-primary text-white lg:shadow-2xl shadow-primary rounded-tl-lg rounded-bl-lg md:rounded-bl-none md:rounded-tl-lg">
          <h1 className="text-4xl font-bold mb-4 text-center pt-4">
            Our Mission
          </h1>
          <p className="text-lg p-5">
            At Safegate Multispeciality Medical Center, our mission is to
            provide comprehensive, high-quality healthcare services with
            compassion, integrity, and respect. We are committed to improving
            the health and well-being of our community by offering personalized
            care through a team of dedicated professionals, advanced technology,
            and a patient-centered approach.
          </p>
        </div>
        <div className="relative rounded-tr-lg rounded-br-lg md:rounded-br-lg md:rounded-tr-none">
          <Image
            src="/about/mission.png"
            alt="Mission"
            layout="fill"
            objectFit="contain"
            className="w-full p-3 h-full rounded-tr-lg rounded-br-lg md:rounded-br-lg md:rounded-tr-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Second Section */}
        <div className="relative rounded-tl-lg rounded-bl-lg md:rounded-bl-none md:rounded-tl-lg">
          <Image
            src="/about/vission.png"
            alt="Mission"
            layout="fill"
            objectFit="contain"
            className="w-full p-3 h-full rounded-tl-lg rounded-bl-lg md:rounded-bl-none md:rounded-tl-lg"
          />
        </div>
        <div className="bg-lightgreen text-white lg:shadow-2xl shadow-lightgreen rounded-tr-lg rounded-br-lg md:rounded-br-none md:rounded-tr-lg">
          <h1 className="text-4xl font-bold mb-4 text-center pt-4">
            Our Vision
          </h1>
          <p className="text-lg p-5">
            Our vision is to be a leading multispeciality medical center
            recognized for excellence in patient care, innovative treatments,
            and a holistic approach to health. We strive to create a healthcare
            environment where every patient feels valued, supported, and
            empowered to achieve optimal health outcomes. Safegate aims to set
            new standards in medical excellence, ensuring that our community has
            access to the best possible care, now and in the future.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 lg:mt-10 mt-6">
        {/* Left section: Text and Information */}
        <div className="bg-primary text-white lg:shadow-2xl shadow-primary rounded-tl-lg rounded-bl-lg md:rounded-bl-none md:rounded-tl-lg">
          <h1 className="text-4xl font-bold mb-4 text-center pt-4">
            Infrastructure
          </h1>
          <p className="text-lg px-5 pb-5">
            The land area is around 2500 yards and the covered area is around
            13,000 sq feet, comprising of:
          </p>
          <ul className="list-disc list-inside p-5">
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

export default About;
