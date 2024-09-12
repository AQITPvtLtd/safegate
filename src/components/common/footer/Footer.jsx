import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative mt-10">
      <div className="absolute inset-0"></div>

      {/* <div className="absolute lg:grid lg:grid-cols-12 p-10">
        <div className="col-start-1 col-span-3">
          <div className="bg-white p-1">
            <Link href="/" className={`header-logo block lg:ml-0 ml-2 my-3`}>
              <Image
                src="/logo/logo.png"
                alt="logo"
                width={300}
                height={250}
                className="w-full"
              />
            </Link>
          </div>
          <p className="py-2 text-white">
            At Safegate Medical Centre we are dedicated to providing
            comprehensive healthcare services to its patients. With a focus on
            advanced medical technology and a team of experienced healthcare
            professionals, the clinic offers a wide range of specialized
            treatments and diagnostic services.
          </p>

          <div className="flex gap-2 py-2 leading-loose">
            <Link href="/">
              <FaFacebookF className="text-4xl bg-primary text-white rounded-md p-2" />
            </Link>
            <Link href="/">
              <FaInstagram className="text-4xl bg-instagram text-white rounded-md p-2" />
            </Link>
            <Link href="/">
              <FaLinkedinIn className="text-4xl bg-linkedin text-white rounded-md p-2" />
            </Link>
            <Link href="/">
              <FaYoutube className="text-4xl bg-youtube text-white rounded-md p-2" />
            </Link>
          </div>
        </div>

        <div className="col-start-5 col-span-2 leading-8 text-white">
          <h1 className="font-bold text-primary">Quick Links</h1>
          <Link href="/">Home</Link>
          <br />
          <Link href="/">About us</Link>
          <br />
          <Link href="/">Health Packages & Services</Link>
          <br />
          <Link href="/">Upcoming Events</Link>
          <br />
          <Link href="/">Reviews & Gallery</Link>
          <br />
          <Link href="/">Home Sample Collection</Link>
          <br />
          <Link href="/">Cardiologist Consultation</Link>
          <br />
          <Link href="/">Team</Link>
          <br />
          <Link href="/">Blogs and FAQs</Link>
          <br />
          <Link href="/">Contact Us</Link>
        </div>
        <div className="col-start-8 col-span-2 leading-loose text-white">
          <h1 className="font-bold text-primary">Services</h1>
          <Link href="/">Diagnostic Radiology</Link>
          <br />
          <Link href="/">Interventional Radiology</Link>
          <br />
          <Link href="/">Cardiology</Link>
          <br />
          <Link href="/">Pathology</Link>
          <br />
          <Link href="/">Others</Link>
          <br />
        </div>
        <div className="col-start-10 col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13776.204373217352!2d78.0231181!3d30.3210645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b493f35969b%3A0xa5fd40cde495bb1b!2sSafegate%20Medical%20Center(Polyclinic)!5e0!3m2!1sen!2sin!4v1723784684554!5m2!1sen!2sin"
            width="340"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Image
        src="/footer/footer.png"
        width={1000}
        height={1000}
        className="lg:h-[450px] h-[1300px] w-full"
        alt="footerimg"
      />
      <div className="text-center opacity-50">
        <h1 className="">
          <strong>© 2024 SafeGate Medical Center . All Rights Reserved.</strong>
        </h1>
      </div> */}

      <div className="relative mt-10">
        <div className="absolute inset-0"></div>

        <div className="absolute lg:grid lg:grid-cols-12 grid-cols-1 p-5 lg:p-10 gap-6">
          {/* Logo and Description Section */}
          <div className="col-start-1 col-span-12 lg:col-span-3">
            <div className="bg-white p-1">
              <Link href="/" className="header-logo block lg:ml-0 ml-2 my-3">
                <Image
                  src="/logo/logo.png"
                  alt="logo"
                  width={300}
                  height={250}
                  className="w-full"
                />
              </Link>
            </div>
            <p className="py-2 text-white">
              At Safegate Medical Centre we are dedicated to providing
              comprehensive healthcare services to its patients...
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 py-2 leading-loose justify-start">
              <Link href="/">
                <FaFacebookF className="text-3xl bg-primary text-white rounded-md p-2" />
              </Link>
              <Link href="/">
                <FaInstagram className="text-3xl bg-instagram text-white rounded-md p-2" />
              </Link>
              <Link href="/">
                <FaLinkedinIn className="text-3xl bg-linkedin text-white rounded-md p-2" />
              </Link>
              <Link href="/">
                <FaYoutube className="text-3xl bg-youtube text-white rounded-md p-2" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-start-1 lg:col-start-5 col-span-12 lg:col-span-2 leading-8 text-white">
            <h1 className="font-bold text-primary">Quick Links</h1>
            <Link href="/">Home</Link>
            <br />
            <Link href="/">About us</Link>
            <br />
            <Link href="/">Health Packages & Services</Link>
            <br />
            <Link href="/">Upcoming Events</Link>
            <br />
            <Link href="/">Reviews & Gallery</Link>
            <br />
            <Link href="/">Home Sample Collection</Link>
            <br />
            <Link href="/">Cardiologist Consultation</Link>
            <br />
            <Link href="/">Team</Link>
            <br />
            <Link href="/">Blogs and FAQs</Link>
            <br />
            <Link href="/">Contact Us</Link>
          </div>

          {/* Services Section */}
          <div className="col-start-1 lg:col-start-8 col-span-12 lg:col-span-2 leading-loose text-white">
            <h1 className="font-bold text-primary">Services</h1>
            <Link href="/">Diagnostic Radiology</Link>
            <br />
            <Link href="/">Interventional Radiology</Link>
            <br />
            <Link href="/">Cardiology</Link>
            <br />
            <Link href="/">Pathology</Link>
            <br />
            <Link href="/">Others</Link>
            <br />
          </div>

          {/* Map Section */}
          <div className="col-start-1 lg:col-start-10 col-span-14 lg:col-span-3">
            {/* <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13776.204373217352!2d78.0231181!3d30.3210645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b493f35969b%3A0xa5fd40cde495bb1b!2sSafegate%20Medical%20Center(Polyclinic)!5e0!3m2!1sen!2sin!4v1723784684554!5m2!1sen!2sin"
               width="100%"
              height="350"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Background Image */}
        <Image
          src="/footer/footer.png"
          width={1000}
          height={1000}
          className="lg:h-[450px] h-[800px] w-full object-cover"
          alt="footerimg"
        />

        {/* Footer Text */}
        <div className="text-center opacity-50 mt-5">
          <h1>
            <strong>
              © 2024 SafeGate Medical Center. All Rights Reserved.
            </strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
