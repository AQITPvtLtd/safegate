// carousels/Responsive.js
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import { items } from "@/data/services";
export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="lg:mr-10 bg-white">
      <div className="lg:grid grid-cols-12 relative">
        <div className="col-span-4 lg:py-24 py-10 lg:px-10">
          <h1 className="text-4xl font-extrabold text-center lg:text-left leading-normal text-primary">
            Our Services
          </h1>
          <p className="lg:text-left text-center text-black">
            Explore our wide range of services and specialties designed to cater
            to all your healthcare needs with the highest standard of
            excellence.
          </p>
        </div>
        <div className="relative col-start-5 col-span-8">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary z-[-1]" />
          <div className="relative px-10 md:pr-[65px] pr-0">
            <Slider {...settings}>
              {items.map((item) => (
                <div key={item.id} className="px-2">
                  <div className="bg-white my-5 h-[350px] rounded-md shadow-lg flex flex-col justify-between">
                    <div className="flex justify-center">
                      <div className="flex justify-center items-center">
                        <Image
                          src={item.image}
                          alt="service icon"
                          width={1000}
                          height={1000}
                          className="h-[175px]"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-bold text-black">
                        {item.title}
                      </h2>
                    </div>
                    <div className="p-4">
                      <Link
                        href={`services/${item.url}`}
                        className="bg-lightgreen hover:bg-lightgreen/90 px-4 py-2 text-white text-lg rounded-lg block text-center"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
