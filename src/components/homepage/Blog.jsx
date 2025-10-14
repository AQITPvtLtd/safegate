"use client";
import { useEffect, useState } from "react";
import { getBlog } from "@/services/getBlogs";
import { SlCalender } from "react-icons/sl";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
const Blog = () => {
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
    <div>
      <div className="mt-14 my-10 overflow-x-clip ">
        <h3 className="text-center text-primary font-semibold text-lg font-serif">
          Our Blogs
        </h3>
        <h1 className="text-center text-3xl font-bold text-black font-serif">
          Check Our Latest Blogs
        </h1>
        <div className="flex justify-center mt-1 ">
          <div className="grid grid-cols-4 w-1/2">
            <div className="border-2 col-start-2 border-primary"></div>
            <div className="border border-lightgreen"></div>
          </div>
        </div>
      </div>
      <div>
        {error ? (
          <p className="text-red-500 text-center mt-6">{error}</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5 py-3 md:pr-[95px] pr-5">
            {blogs.slice(0, 3).map((n) => (
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
                  className="w-full h-64 object-fill"
                  height={100}
                  width={1000}
                />
                <div className="px-6 py-3">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 font-serif">{n.title}</h2>
                  <div className="flex gap-3">
                    <SlCalender className="text-gray-800" />
                    <p className="text-gray-800 text-sm mb-2">
                      <Moment format="MMMM DD, YYYY">{n.date}</Moment>
                    </p>
                  </div>
                  <p
                    className="text-gray-700 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: n.description }}
                  ></p>
                  <Link
                    href={`/blogs/${n.url}`}
                    className="flex mb-3 pt-4"
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
        <div className="flex justify-center">
          <Link href="/blogs">
            <div className="px-4 w-fit flex justify-center text-center bg-blue-700 hover:bg-green-700 py-2 text-white rounded-xl mt-5">
              Know More Blogs
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
