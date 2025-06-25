"use client";

import React from "react";
import { getBlog } from "@/services/getBlogs";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const Sidebar = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlog();
        setBlogs(response.results);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="sm:px-3 lg:px-4 border-2 rounded-2xl h-fit">
        <ul className="h-fit">

          <p className="text-blue-600 font-semibold text-lg py-2 ">
            More Blogs:
          </p>


          {blogs.map((n) => (
            <li key={n.url}>
              <div>
                <Link
                  href={`/blogs/${n.id}/${n.url}`}
                  className="flex hover:translate-x-2 transition duration-300 ease-in-out"
                >
                  <div className="flex gap-1 text-green-500 hover:text-blue-600">
                    <div className="text-base mt-1">
                      <FaArrowCircleRight />
                    </div>
                    <h2 className="text-sm font-normal text-black">
                      {n.title}
                    </h2>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
