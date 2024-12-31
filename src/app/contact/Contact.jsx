"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { form } from "@/services/form";

const Contact = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await form(formData);
    console.log(response);
    if (response.success) {
      Swal.fire({
        title: "Form Submitted Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="">
      <div className="relative">
        <Image
          src="/contact/contact.png"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Contact Us
        </h1>
      </div>

      <section className="">
        <div className="container px-5 py-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Google Map Section */}
            <div className="bg-gray-300 rounded-lg overflow-hidden p-10 relative col-span-1 lg:block hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110222.94826756911!2d78.049028!3d30.309227999999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929bc37c6319f%3A0xe9f79bf0327e8125!2sSafegate%20Medical%20Centre%20%7C%20Best%20Medical%20Centre%20in%20Dehradun%20%7C%20Advance%20Medical%20Services%20in%20Dehradun!5e0!3m2!1sen!2sin!4v1735635924364!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
              />
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 col-span-1">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact Us
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600 ">
                We would love to hear from you! Whether you have a question
                about our services, need assistance, or just want to say hello,
                feel free to reach out to us.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className=" leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white  rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Input */}
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7  text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Message Input */}
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7  text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button className="text-white bg-lightgreen border-0 py-2 px-6 focus:outline-none hover:bg-lightgreen/90 rounded text-lg">
                  Submit
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg">
              <div className="mb-6 space-y-4">
                {/* Address Section */}
                <div className="flex items-center space-x-3 text-gray-700">
                  <IoLocationSharp className="mt-1 lg:text-2xl text-3xl text-primary" />

                  <p className="text-base font-medium hover:text-primary transition-colors duration-200 ease-in-out ">
                    83, Model Colony, Araghar Chowk, Dehradun,
                    Uttarakhand-248001
                  </p>
                </div>

                {/* Email Section */}
                <table className="text-gray-700">
                  <tbody>
                    <tr className="flex items-center space-x-2">
                      <td className="align-middle">
                        <MdEmail className="mt-1 lg:text-2xl text-xl text-primary" />
                      </td>
                      <td>
                        <div className="block">
                          <Link href="mailto:officialsafegatemedicalcenter@gmail.com">
                            <p className="text-base font-medium hover:text-primary transition-colors duration-200 ease-in-out">
                              officialsafegatemedicalcenter@gmail.com
                            </p>
                          </Link>

                          <Link href="mailto:info@safegatemedicalcenter.com">
                            <p className="text-base font-medium hover:text-primary transition-colors duration-200 ease-in-out">
                              info@safegatemedicalcenter.com
                            </p>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Phone Section */}
                <div className="flex items-center space-x-3 text-gray-700 mt-4">
                  <IoIosCall className="mt-1 lg:text-2xl text-xl text-primary" />
                  <Link href="tel:+917817893001">
                    <p className="text-base font-medium hover:text-primary transition-colors duration-200 ease-in-out">
                      For Appointment: +91 7817893001
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
