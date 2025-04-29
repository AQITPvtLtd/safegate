"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Form from "./Form";

const Contact = () => {


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

      <section>
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
            <div className="bg-white rounded-lg shadow-lg lg:p-6 col-span-1">
              <Form />
            </div>

            <div className="bg-white rounded-lg">
              <div className="space-y-2">
                {/* Address Section */}

                <Link href="https://maps.app.goo.gl/4aTcAvZcgfgFR7d1A" className="flex space-x-3 text-gray-700">
                  <IoLocationSharp className="mt-1 lg:text-2xl text-3xl text-primary" />
                  <p className="text-base font-medium hover:text-primary transition-colors duration-200 ease-in-out ">
                    83, Model Colony, Araghar Chowk, Dehradun,
                    Uttarakhand-248001
                  </p>
                </Link>

                {/* Email Section */}
                <div className="flex space-x-3 items-center text-gray-700">
                  <MdEmail className="lg:text-2xl text-xl text-primary" />
                  <Link href="mailto:officialsafegatemedicalcenter@gmail.com">
                    <p className="text-base font-medium hover:text-primary transition-colors duration-200 ease-in-out">
                      officialsafegatemedicalcenter@gmail.com
                    </p>
                  </Link>
                </div>

                <div className="flex space-x-3 items-center text-gray-700">
                  <MdEmail className="lg:text-2xl text-xl text-primary" />
                  <Link href="mailto:info@safegatemedicalcenter.com">
                    <p className="text-base font-medium hover:text-primary transition-colors duration-200 ease-in-out">
                      info@safegatemedicalcenter.com
                    </p>
                  </Link>
                </div>

                {/* Phone Section */}
                <div className="flex items-center space-x-3 text-gray-700">
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
