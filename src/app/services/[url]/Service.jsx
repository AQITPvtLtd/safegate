import Image from "next/image";
import { items } from "@/data/services";
import Link from "next/link";

const Service = ({ url }) => {
  const data = items.find((a) => a.url === url);
  return (
    <div>
      <h1 className="font-extrabold text-center text-5xl m-5 text-primary underline">
        {data.title}
      </h1>
      <div className="grid grid-cols-2 m-10">
        <div>
          <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
        <div className="relative flex justify-center items-center mx-10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-lightgreen rounded-md z-[-1]" />
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary rounded-md z-[-1]" />

          {/* Image with overlap */}
          <div className="z-10 p-4 absolute inset-0 mt-5">
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
          {/* <div className="z-20 bottom-12 left-12 w-32 h-32 border-2 border-dashed border-primary" /> */}

          {/* Overlapping Effect */}
          {/* <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-6">
            <div className="w-24 h-24 bg-lightgreen border border-lightgreen rounded-md" />
          </div> */}
        </div>
      </div>
      {/* common */}
      <div className="leading-relaxed text-lg mx-10 bg-primary p-2 text-white mb-10 rounded-lg">
        <div className="border-2 border-white rounded-lg p-5">
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
