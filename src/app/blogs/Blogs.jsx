import React from "react";
import Image from "next/image";
const Blogs = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src="/blogs/blogs.png"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Check Out Our Blogs
        </h1>
      </div>
      <h1 className="p-10 text-center">Coming Soon</h1>
    </div>
  );
};

export default Blogs;
