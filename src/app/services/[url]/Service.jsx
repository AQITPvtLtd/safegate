import Image from "next/image";
import { items } from "@/data/services";
import Link from "next/link";

const Service = ({ url }) => {
  const data = items.find((a) => a.url === url);
  return (
    <div className="">
      <h1 className="font-extrabold text-center font-serif lg:text-5xl text-3xl p-5  text-primary underline">
        {data.title}
      </h1>
      <div className="lg:grid grid-cols-2 lg:m-10 m-5">
        <div className="text-black">
          <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
        <div className="relative flex justify-center items-center lg:mx-10">
          {/* Decorative elements */}
          <div className="hidden lg:block absolute top-0 left-0 w-32 h-32 bg-lightgreen rounded-md z-[1]" />
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary rounded-md z-[1]" />

          {/* Image with overlap */}
          <div className="z-10 p-4 lg:absolute inset-0 mt-5">
            <div className="bg-white shadow-lg p-2 rounded-lg">
              <Image
                src={data.image}
                width={1000}
                height={1000}
                alt={data.image}
                className="rounded-lg object-cover z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* common */}
      <div className="leading-relaxed text-lg lg:mx-10 mx-2 bg-primary p-2 text-white rounded-lg mb-10">
        <div className="border-2 border-white rounded-lg lg:p-5 p-2 lg:text-md text-sm">
          <h1 className="font-bold text-2xl">Appointment Scheduling</h1> To
          schedule an appointment with our specialists, please call us at{" "}
          <Link href="tel:+917817893001" className="underline  ">
            +91 7817893001
          </Link>{" "}
          or contact us going to the{" "}
          <Link href="/contact" className="underline ">
            Contact Us
          </Link>{" "}
          page. We look forward to partnering with you on your journey to better
          health. <h1 className="font-bold text-2xl">Contact Us</h1> For more
          information about our services or to speak with one of our
          specialists, please contact our office at
          <br />
          <Link
            href="mailto:info@safegatemedicalcenter.com"
            className="underline "
          >
            info@safegatemedicalcenter.com{" "}
          </Link>{" "}
          /{" "}
          <Link
            href="mailto:officialsafegatemedicalcenter@gmail.com"
            className="underline "
          >
            officialsafegatemedicalcenter@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
