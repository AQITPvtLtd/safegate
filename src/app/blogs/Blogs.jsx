"use client";
import { useEffect, useState } from "react";
import { getBlog } from "@/services/getBlogs";
import { SlCalender } from "react-icons/sl";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog();
        if (response?.results) {
          setBlogs(response.results);
        } else {
          throw new Error(response?.message || "Invalid response structure");
        }
      } catch (error) {
        setError(error.message || "Error fetching blogs");
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="">
      {/* Header Section */}
      <div className="relative">
        <Image
          src="/blogs/blogs.png"
          width={1000}
          height={1000}
          className="w-full h-[220px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-primary opacity-60 z-10" />
        <h1 className="text-white text-center text-4xl md:text-5xl font-bold font-serif absolute inset-0 z-20 flex items-center justify-center">
          Check Out Our Blogs
        </h1>
      </div>

      {/* Error */}
      {error ? (
        <p className="text-red-500 text-center mt-6">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-10 gap-6 py-8">
          {blogs.map((n) => (
            <div
              key={n.url}
              className="bg-white rounded-xl overflow-hidden border hover:shadow-xl transition duration-300"
            >
              <Image
                src={`/blogs/${n.image}`}
                alt={n.heading}
                className="w-full h-[220px] object-fill"
                height={180}
                width={400}
              />
              <div className="px-4 py-3 space-y-2">
                <h2 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
                  {n.title}
                </h2>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <SlCalender />
                  <Moment format="MMMM DD, YYYY">{n.date}</Moment>
                </div>

                <p
                  className="text-sm text-gray-600 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: n.description }}
                ></p>

                <div className="pt-2">
                  <Link href={`/blogs/${n.id}/${n.url}`}>
                    <span className="inline-block text-sm px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-green-700 transition-all">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>

  );
};

export default Blogs;
