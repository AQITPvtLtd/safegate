import React from "react";
import Image from "next/image";
import { MdRateReview } from "react-icons/md";

const HappyPatients = () => {
  const reviews = [
    {
      id: 1,
      name: "DHEERAJ",
      bgcolor: "blue",
      comment:
        "Excellent professional counselling at Safegate Medical Centre. The doctors and physiotherapists provide exceptional guidance and support. I highly recommend their services for anyone seeking expert medical advice.",
    },
    {
      id: 2,
      name: "Mohit Wadhwa",
      bgcolor: "green",
      comment:
        "Very gud diagnosis done by the experienced team of doctors in a clean n hygienic environment….",
    },
    {
      id: 3,
      name: "Swati Singh",
      bgcolor: "blue",
      comment:
        "Safegate medical centre is impeccable! Had visited there for my PCOS and have been symptom free ever since. Dr. Munaza is incredible and thorough.",
    },
  ];

  return (
    <div className="mt-14 my-10 overflow-x-clip ">
      <h3 className="text-center text-primary font-semibold text-lg">
        Happy Patients
      </h3>
      <h1 className="text-center lg:text-3xl text-2xl font-bold text-black">
        Real Stories, Real Results
      </h1>
      <div className="flex justify-center mt-1 ">
        <div className="grid grid-cols-4 w-1/2">
          <div className="border-2 col-start-2 border-primary"></div>
          <div className="border border-lightgreen"></div>
        </div>
      </div>
      <p className="lg:mx-[200px] text-center mt-10 my-14 text-black">
        Don’t just take our word for it—read the stories and testimonials from
        our satisfied patients who have experienced firsthand the transformative
        impact of our services.
      </p>
      <div className="lg:grid grid-cols-3 gap-x-20 mx-5 relative overflow-visible md:pr-[80px] pr-0">
        {reviews.map((r) => (
          <div key={r.id} className="relative mt-14 overflow-visible">
            {/* Rotated background */}
            <div
              className={`absolute inset-0 ${
                r.bgcolor === "blue" ? "bg-primary" : "bg-lightgreen"
              } transform -z-5 -rotate-12 rounded-[20%] w-full h-full`}
            />
            {/* White card */}
            <div className="bg-white p-10 shadow-lg rounded-[20%] z-5 h-[250px] relative">
              <div className="flex justify-center -translate-y-3/4">
                <div
                  className={`${
                    r.bgcolor === "blue" ? "bg-lightgreen" : "bg-primary"
                  } rounded-[100%] p-5`}
                >
                  <MdRateReview className="text-white" size={50} />
                </div>
              </div>
              <div className="-mt-14">
                <h1 className="text-xl text-center font-semibold mb-2 text-black">
                  {r.name}
                </h1>
                <p className="text-sm text-black">{r.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyPatients;
