"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menu";
// import Top from "./Top";
import "animate.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <div
      className={`overflow-x-clip header left-0 z-40 top-0 w-full items-center  bg-gradient-to-r font-semibold bg-white ${
        sticky
          ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      {/* <Top /> */}
      <div className="grid grid-cols-2">
        <div className="flex justify-center">
          <Link href="/" className={`header-logo block lg:ml-0 ml-2 my-3`}>
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[400px]"
            />
          </Link>
        </div>
        <div className="pt-4">
          <div className="max-w-lg mx-auto pt-4">
            <div className="flex items-center justify-center space-x-10">
              <div className="flex space-x-4">
                <div className="text-white text-xl">
                  <FaFacebookF className="px-1 text-xl bg-lightgreen" />
                </div>
                <div className="text-white text-xl">
                  <FaInstagram className="px-1 bg-lightgreen" />
                </div>
                <div className="text-white text-xl">
                  <FaLinkedinIn className="px-1 bg-lightgreen" />
                </div>
                <div className="text-white text-xl">
                  <FaXTwitter className="px-1 bg-lightgreen" />
                </div>
                <div className="text-white text-xl">
                  <FaYoutube className="px-1 bg-lightgreen" />
                </div>
              </div>
              <div className="text-gray-400">|</div>
              <div className="flex items-center">
                <RiCustomerServiceFill className="text-lightgreen text-4xl" />
                <div className="text-gray-500 text-sm">
                  <h4>For Support</h4>
                  <h2 className="text-lightgreen">+91 9311883059</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="flex justify-around text-white bg-primary">
        <div className="container flex items-center">
          <div className="flex items-center w-full justify-between lg:w-auto mx-5"></div>
          <div className="flex items-center w-full justify-center lg:flex-grow">
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="rounded-full px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                  navbarOpen ? " top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                  navbarOpen ? " top-[-8px] -rotate-45" : ""
                }`}
              />
            </button>
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 lg:visible lg:static w-full lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:grid grid-cols-6 gap-4 relative">
                {menuData.map((menuItem, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center group relative"
                  >
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`w-full flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-2 ${
                          usePathName === menuItem.path
                            ? "bg-lightgreen h-full lg:px-2 dark:text-white"
                            : "text-dark hover:bg-lightgreen hover:h-full dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        <span className="flex-grow text-center">
                          {menuItem.title}
                        </span>
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="flex items-center justify-center cursor-pointer py-2 text-base text-dark group-hover:bg-primary group-hover:px-2 dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-3"
                        >
                          <span className="flex-grow text-center">
                            {menuItem.title}
                          </span>
                          <span className="pl-3">
                            <svg width="25" height="24" viewBox="0 0 25 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </p>
                        <div
                          className={`submenu bg-white absolute left-0 top-full mt-1 rounded-sm bg-lightblue transition-all duration-300 shadow-lg group-hover:opacity-100 lg:w-[250px] lg:p-4 lg:opacity-0 ${
                            openIndex === index
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, index) => (
                            <Link
                              href={submenuItem.path}
                              key={index}
                              className="block text-black dark:text-black rounded py-2.5 text-sm text-dark hover:scale-105 dark:hover:text-primary lg:px-3 text-center"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
