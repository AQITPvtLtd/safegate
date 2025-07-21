"use client";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { getBlog } from "@/services/getBlogs";
import Image from "next/image";
import Moment from "react-moment";
import Sidebar from "../Sidebar";

const DetailedBlog = ({ url, id }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const obj = blogs.find((item) => item.url == url);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog();
        if (response?.results) {
          setBlogs(response.results);
        } else {
          throw new Error(response?.message || "Invalid response structure");
        }
      } catch (err) {
        setError(err.message || "Error fetching blogs");
      }
    }
    fetchBlogs();
  }, [url]); // url dependency to refetch when it changes

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative mb-5">
        <Image
          src="/blogs/blogbackImg.jpg"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Blog Background"
        />
        <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Blogs
        </h1>
      </div>

      {/* Blog Content and Sidebar */}
      <div className="lg:grid grid-cols-12 p-5 gap-8">
        <div className="col-start-1 col-span-9">
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : obj ? (
            <div key={obj.url} className="bg-white overflow-hidden mb-6">
              <Image
                src={`/blogs/${obj.image}`}
                alt={obj.heading || "Blog Image"}
                className="object-cover"
                height={1000}
                width={1000}
              />
              <div className="px-7 py-5">
                <div className="flex gap-2 text-gray-600 mb-2">
                  <SlCalender className="text-xl" />
                  <span className="text-sm">
                    <Moment format="MMMM DD, YYYY">{obj.date}</Moment>
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {obj.title}
                </h2>
                <p
                  className="text-gray-700 text-sm leading-relaxed lg:text-justify"
                  dangerouslySetInnerHTML={{ __html: obj.description }}
                ></p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Blog not found</p>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-span-3 lg:block hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;
