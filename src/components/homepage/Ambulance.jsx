import Image from "next/image";
import React from "react";

const Ambulance = () => {
  return (
    <div>
      <Image
        src="/ambulance.png"
        width={10000}
        height={10000}
        className="w-full lg:px-10 pb-3"
      />
    </div>
  );
};

export default Ambulance;
