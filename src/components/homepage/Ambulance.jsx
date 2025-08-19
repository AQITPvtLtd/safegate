import Image from "next/image";
import React from "react";

const Ambulance = () => {
  return (
    <div className="md:pr-12 pr-0">
      <Image
        src="/ambulance.png"
        width={10000}
        height={10000}
        className="w-full lg:px-10 pb-3"
        alt="24*7 ambulance service"
      />
    </div>
  );
};

export default Ambulance;
