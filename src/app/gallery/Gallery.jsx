"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Gallery = () => {
  const items = [
    { id: 1, name: "1.jpg" },
    { id: 3, name: "3.jpg" },
    { id: 4, name: "4.jpg" },
    { id: 5, name: "5.jpg" },
    { id: 6, name: "6.jpg" },
    { id: 7, name: "7.jpg" },
    { id: 8, name: "8.jpg" },
    { id: 10, name: "10.jpg" },
    { id: 11, name: "11.jpg" },
    { id: 12, name: "12.jpg" },
    { id: 13, name: "13.jpg" },
    { id: 14, name: "14.jpg" },
    { id: 16, name: "16.jpg" },
    { id: 17, name: "17.jpg" },
    { id: 18, name: "18.jpg" },
    { id: 19, name: "19.jpg" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <Image
          src="/gallery/10.jpg"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Gallery Banner"
        />
        <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Our Gallery
        </h1>
      </div>

      {/* Image Grid */}
      <div className="lg:grid lg:space-y-0 space-y-4 grid-cols-4 md:grid-cols-3 py-5 gap-6 mx-5 md:pr-[62px]">
        {items.map((i, index) => (
          <div key={i.id} onClick={() => setSelectedIndex(index)} className="cursor-pointer">
            <Image
              src={`/gallery/${i.name}`}
              width={1000}
              height={1000}
              className="w-[400px] h-[400px] object-cover rounded-lg hover:opacity-60 transition duration-300"
              alt={`Gallery Image ${i.id}`}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[9999]">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-2xl hover:text-gray-300 transition-all duration-200"
          >
            <FaTimes />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-8 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full text-lg transition-all duration-200"
          >
            <FaChevronLeft />
          </button>

          {/* Image (with animation) */}
          <Image
            src={`/gallery/${items[selectedIndex].name}`}
            alt="Selected"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            height="450"
            width="450"
          />

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-8 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full text-lg transition-all duration-200"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
