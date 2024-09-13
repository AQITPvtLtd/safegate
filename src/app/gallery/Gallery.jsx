import React from "react";
import Image from "next/image";
const Gallery = () => {
  const items = [
    {
      id: 1,
      name: "1.jpg",
    },
    {
      id: 3,
      name: "3.jpg",
    },
    {
      id: 4,
      name: "4.jpg",
    },
    {
      id: 5,
      name: "5.jpg",
    },
    {
      id: 6,
      name: "6.jpg",
    },
    {
      id: 7,
      name: "7.jpg",
    },
    {
      id: 8,
      name: "8.jpg",
    },
    {
      id: 10,
      name: "10.jpg",
    },
    {
      id: 11,
      name: "11.jpg",
    },
    {
      id: 12,
      name: "12.jpg",
    },
    {
      id: 13,
      name: "13.jpg",
    },
    {
      id: 14,
      name: "14.jpg",
    },
    {
      id: 16,
      name: "16.jpg",
    },
    {
      id: 17,
      name: "17.jpg",
    },
    {
      id: 18,
      name: "18.jpg",
    },
    {
      id: 19,
      name: "19.jpg",
    },
  ];
  return (
    <div className="">
      <div className="relative">
        <Image
          src="/gallery/10.jpg"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Gallery Image"
        />
        <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Our Gallery
        </h1>
      </div>

      <div className="lg:grid lg:space-y-0 space-y-4 grid-cols-4 md:grid-cols-s my-5 gap-6 mx-5">
        {items?.map((i) => (
          <div key={i.id}>
            <Image
              src={`/gallery/${i.name}`}
              width={1000}
              height={1000}
              className="w-[400px] h-[400px] object-cover rounded-lg"
              alt="gallery images 1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
