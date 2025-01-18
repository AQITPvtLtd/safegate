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

      {error ? (
        <p className="text-red-500 text-center mt-6">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5 py-3">
          {blogs.map((n) => (
            <li
              key={n.url}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
              }}
            >
              <Image
                src={`/blogs/${n.image}`}
                alt={n.heading}
                className="w-full h-64 object-cover"
                height={100}
                width={1000}
              />
              <div className="px-6 py-3">
                <h2 className="text-xl font-semibold mb-2">{n.short_name}</h2>
                <div className="flex gap-3">
                  <SlCalender />
                  <p className="text-gray-800 text-sm mb-4">
                    <Moment format="MMMM DD, YYYY">{n.date}</Moment>
                  </p>
                </div>
                <p
                  className="text-gray-700 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: n.description }}
                ></p>
                <Link
                  href={`/blogs/${n.id}/${n.url}`}
                  className="flex mb-3 py-4"
                >
                  <div className="bg-blue-700 hover:bg-green-700 p-3 text-white rounded-xl">
                    Read More
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blogs;
