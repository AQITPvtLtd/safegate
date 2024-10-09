import React from "react";
import { data } from "@/data/package";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Package = ({ url }) => {
  const pack = data.find((d) => d.url === url);

  return (
    <div className="py-6">
      <div className="bg-darkblue lg:mx-20 rounded-xl mx-3">
        <h1 className="text-white lg:text-5xl text-3xl px-2 py-5 font-extrabold text-center">
          {pack.title}
        </h1>
        <div className="lg:grid grid-cols-2">
          <div>
            <div className="text-white text-2xl mx-10 font-bold lg:flex justify-evenly">
              <div className="">{pack.content.length} Tests Included</div>
              <div className="">Price : ₹ {pack.price} /-</div>
            </div>
            <ul className="grid grid-cols-2 text-white list-disc mx-10 my-5">
              {pack.content.map((c, index) => (
                <li key={index}>{c}</li>
              ))}
            </ul>
            <div className="ml-4 flex">
              <Link
                href="tel:+91 7817893001"
                className=" text-white rounded-md bg-lightgreen  p-2 flex"
              >
                <p className="">Call for Booking</p>{" "}
                <MdKeyboardDoubleArrowRight className="mt-1" size={20} />
              </Link>
            </div>
          </div>
          <div>
            <Image
              className="pb-5 lg:px-10 px-5 lg:pt-0 pt-3"
              src={`/packages/${pack.image}`}
              width={1000}
              height={1000}
              alt={pack.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
