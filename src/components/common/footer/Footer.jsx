import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative bg-white py-4">
      <div className="absolute inset-0"></div>

      <div className="absolute lg:grid lg:grid-cols-12 px-5 pt-5 lg:py-5 lg:px-10 gap-6">
        {/* Left Section (Logo + Description) */}
        <div className="lg:col-span-3 col-span-12 mb-8 lg:mb-0">
          <div className=" p-1 flex justify-center">
            <Link href="/" className="header-logo block lg:ml-0 ml-2 my-3">
              <Image
                src="/logo/logo2.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-[150px] h-[150px] bg-white"
              />
            </Link>
          </div>
          <p className="py-2 text-white">
            At Safegate Medical Centre with a focus on advanced medical
            technology and a team of experienced healthcare professionals, the
            clinic offers a wide range of specialized treatments and diagnostic
            services.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-2 py-2 leading-loose">
            <Link
              href="https://www.facebook.com/profile.php?id=61564959001123"
              target="__blank"
            >
              <FaFacebookF className="text-4xl bg-primary text-white rounded-md p-2" />
            </Link>
            <Link
              href="https://www.instagram.com/safegatemedicalcenter/?hl=en"
              target="__blank"
            >
              <FaInstagram className="text-4xl bg-instagram text-white rounded-md p-2" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/safegate-medical-centre/?viewAsMember=true"
              target="__blank"
            >
              <FaLinkedinIn className="text-4xl bg-linkedin text-white rounded-md p-2" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCeMjY3fzbAqFQxrCcX4wTFg"
              target="__blank"
            >
              <FaYoutube className="text-4xl bg-youtube text-white rounded-md p-2" />
            </Link>
            <Link href="https://x.com/Safegatemedical" target="__blank">
              <FaXTwitter className="text-4xl bg-youtube text-white rounded-md p-2" />
            </Link>
            <Link
              href="https://in.pinterest.com/officialsafegatemedicalcenter/"
              target="__blank"
            >
              <FaPinterestP className="text-4xl bg-youtube text-white rounded-md p-2" />
            </Link>
          </div>
        </div>

        {/* Middle Section (Quick Links) */}

        <div className="lg:flex justify-center lg:col-start-4 lg:col-span-2 col-span-12 leading-8 text-white mb-4 lg:mb-0">
          <div>
            <h1 className="font-bold ">Quick Links</h1>
            <Link href="/">Home</Link>
            <br />
            <Link href="/who-are-we/about">About us</Link>
            <br />
            <Link href="/services">Services</Link>
            <br />
            <Link href="/gallery">Gallery</Link>
            <br />
            <Link href="/blogs">Blogs</Link>
            <br />
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <p className="text-white col-start-7 col-span-3">
          <div className="font-bold">Email</div>
          <div>
            <Link
              href="mailto:info@safegatemedicalcenter.com"
              className="text-white"
            >
              info@safegatemedicalcenter.com
            </Link>
          </div>
          <div>
            <Link
              href="mailto:officialsafegatemedicalcenter@gmail.com"
              className="text-white"
            >
              officialsafegatemedicalcenter@gmail.com
            </Link>
          </div>
          <div className="font-bold mt-4">Address</div>
          <div>
            83, Model Colony, Araghar Chowk, Dehradun, Uttarakhand-248001
          </div>
          <div className="font-bold mt-4">Phone</div>
          <Link href="tel:+91 7817893001">+91 7817893001</Link>
        </p>
        {/* Right Section (Google Map) */}
        <div className="lg:col-span-2 col-span-12 lg:col-start-11 mt-8 lg:mt-0">
          <div className="lg:flex justify-center lg:col-start-4 lg:col-span-2 col-span-12 leading-8 text-white lg:mb-0">
            <div>
              <h1 className="font-bold "> Services </h1>
              <Link href="#">IPD OPD ICU</Link>
              <br />
              <Link href="#">Cardiology</Link>
              <br />
              <Link href="#">Orthopaedics</Link>
              <br />
              <Link href="#">Internal Medicine</Link>
              <br />
              <Link href="#">Gastroenterology</Link>
              <br />
              <Link href="#">Obstetrics & Gynaecology</Link>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/footer/footer.png"
        width={1000}
        height={1000}
        className="lg:h-[450px] h-[1320px] w-full"
        alt="footerimg"
      />
      <Link
        href={"https://tekbooster.com/"}
        target="__blank"
        className="text-center opacity-50"
      >
        <h1 className="p-1 text-black">
          <strong>© 2024 Tek Booster. All Rights Reserved.</strong>
        </h1>
      </Link>
    </div>
  );
};

export default Footer;
