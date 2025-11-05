import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="bg-white">
      {/* Background image */}
      <div
        className="relative bg-cover bg-no-repeat bg-center py-10 px-6 lg:px-12"
        style={{ backgroundImage: "url('/footer/footer.png')" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
          {/* Left Section (Logo + Description + Social) */}
          <div>
            <div className="flex justify-start mb-4">
              <Link href="/" className="block">
                <Image
                  src="/logo/logo2.png"
                  alt="logo"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] bg-white"
                />
              </Link>
            </div>

            <p className="text-sm leading-relaxed">
              At Safegate Medical Centre with a focus on advanced medical
              technology and a team of experienced healthcare professionals,
              the clinic offers a wide range of specialized treatments and
              diagnostic services.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61564959001123"
                target="__blank"
                className="text-[#1877F2] text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 shadow-md"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.instagram.com/safegatemedicalcenter/?hl=en"
                target="__blank"
                className="text-[#E4405F] text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 shadow-md"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/safegate-medical-centre/?viewAsMember=true"
                target="__blank"
                className="text-[#0077B5] text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 shadow-md"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://x.com/Safegatemedical"
                target="__blank"
                className="text-black text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 shadow-md"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCeMjY3fzbAqFQxrCcX4wTFg"
                target="__blank"
                className="text-[#FF0000] text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 shadow-md"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://in.pinterest.com/officialsafegatemedicalcenter/"
                target="__blank"
                className="text-[#E60023] text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 shadow-md"
              >
                <FaPinterestP />
              </Link>
              <Link
                href="https://maps.app.goo.gl/56nJikPeg8KzyzqV7"
                target="__blank"
                className="text-[#E60023] text-xl bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 shadow-md"
              >
                <FcGoogle />
              </Link>
            </div>
          </div>

          {/* Middle Section (Quick Links) */}
          <div className="lg:pl-12">
            <h2 className="font-bold text-lg mb-3 font-serif">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/who-are-we/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section (Contact Info) */}
          <div>
            <h2 className="font-bold text-lg mb-3 font-serif">Contact Us</h2>

            <div className="space-y-3 text-sm">
              <div>
                <div className="font-semibold">Email</div>
                <div className="flex items-center gap-2 mt-1">
                  <MdEmail />
                  <Link
                    href="mailto:info@safegatemedicalcenter.com"
                    className="hover:underline"
                  >
                    info@safegatemedicalcenter.com
                  </Link>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MdEmail />
                  <Link
                    href="mailto:officialsafegatemedicalcenter@gmail.com"
                    className="hover:underline"
                  >
                    officialsafegatemedicalcenter@gmail.com
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-semibold mt-3">Address</div>
                <div className="flex items-start gap-2 mt-1">
                  <FaLocationDot className="mt-1" />
                  <Link
                    href="https://maps.app.goo.gl/4aTcAvZcgfgFR7d1A"
                    className="hover:underline" target="_blank"
                  >
                    83, Model Colony, Araghar Chowk, Dehradun, Uttarakhand-248001
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-semibold mt-3">Phone</div>
                <Link
                  href="tel:+917817893001"
                  className="flex items-center gap-2 mt-1 hover:underline"
                >
                  <IoMdCall /> +91 78178 93001
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white py-3">
        <Link
          href="https://tekbooster.com/"
          target="__blank"
          className="flex justify-center font-serif text-center font-semibold text-black text-sm hover:underline"
        >
          Design & Developed By Tek Booster <br className="lg:hidden block" /> (Digital Marketing Company)
        </Link>
      </div>
    </div>
  );
};

export default Footer;
