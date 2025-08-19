"use client";
import { React, useState } from "react";
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaWhatsapp,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-1/2 right-0 transform -translate-y-1/2
        flex flex-col gap-4 justify-center items-center p-4 bg-gray-200 
        z-40 rounded-l-xl transition-transform duration-500
        ${isOpen ? "translate-x-0" : "translate-x-[120%]"}`}
      >
        {/* Social Icons */}
        <Link href="https://www.facebook.com/profile.php?id=61564959001123" target="_blank" rel="noopener noreferrer"
          className="text-white p-3 rounded-full transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] hover:scale-125">
          <FaFacebookF />
        </Link>
        <Link href="https://www.instagram.com/safegatemedicalcenter/?hl=en" target="_blank" rel="noopener noreferrer"
          className="text-white p-3 rounded-full transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] hover:scale-125">
          <FaInstagram />
        </Link>
        <Link href="https://www.linkedin.com/company/safegate-medical-centre/?viewAsMember=true" target="_blank" rel="noopener noreferrer"
          className="text-white p-3 rounded-full transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] hover:scale-125">
          <FaLinkedinIn />
        </Link>
        <Link href="https://x.com/Safegatemedical" target="_blank" rel="noopener noreferrer"
          className="text-white p-3 rounded-full transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] hover:scale-125">
          <FaSquareXTwitter />
        </Link>
        <Link href="https://www.youtube.com/channel/UCeMjY3fzbAqFQxrCcX4wTFg" target="_blank" rel="noopener noreferrer"
          className="text-white p-3 rounded-full transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] hover:scale-125">
          <FaYoutube />
        </Link>
        <Link href="https://in.pinterest.com/officialsafegatemedicalcenter/" target="_blank" rel="noopener noreferrer"
          className="text-white p-3 rounded-full transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] hover:scale-125">
          <FaPinterestP />
        </Link>
        <Link href="https://wa.link/ml77cj" target="_blank" rel="noopener noreferrer"
          className="text-white p-3 rounded-full transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] hover:scale-125">
          <FaWhatsapp />
        </Link>

        {/* Toggle Button (jab sidebar open ho) */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-red-600 text-white p-3 rounded-full shadow-lg"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Toggle Button (jab sidebar band ho) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 
          bg-green-600 text-white p-3 rounded-l-xl shadow-lg z-50"
        >
          <FaBars />
        </button>
      )}
    </>
  );
}
