import Image from "next/image";
import React from "react";

const Facilities = () => {
  return (
    <div className="bg-primary">
      <div className="lg:grid grid-cols-6 gap-3 mx-5 p-4">
        {/* <div className="bg-white p-3">
          <Image
            src="/gallery/1.jpg"
            width={1000}
            height={1000}
            className="w-[200px] h-[150px] object-cover"
            alt="sample-image"
          />
        </div>
        <div className="bg-white p-3">
          <Image
            src="/gallery/2.jpg"
            width={1000}
            height={1000}
            className="w-[200px] h-[150px] object-cover"
            alt="sample-image"
          />
        </div>
        <div className="bg-white p-3">
          <Image
            src="/gallery/3.jpg"
            width={1000}
            height={1000}
            className="w-[200px] h-[150px] object-cover"
            alt="sample-image"
          />
        </div>
        <div className="bg-white p-3">
          <Image
            src="/gallery/4.jpg"
            width={1000}
            height={1000}
            className="w-[200px] h-[150px] object-cover"
            alt="sample-image"
          />
        </div>
        <div className="bg-white p-3">
          <Image
            src="/gallery/5.jpg"
            width={1000}
            height={1000}
            className="w-[200px] h-[150px] object-cover"
            alt="sample-image"
          />
        </div>
        <div className="bg-white p-3">
          <Image
            src="/gallery/6.jpg"
            width={1000}
            height={1000}
            className="w-[200px] h-[150px] object-cover"
            alt="sample-image"
          />
        </div> */}

        <div className="col-span-5">
          <h1 className="text-white text-4xl mt-3 font-extrabold font-serif">
            Round the Clock Facilities
          </h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 lg:p-10 pl-0 pt-5">
            <div className="border border-white shadow-md shadow-white lg:lg:flex mb-5">
              <Image
                src="/facilities/emergency.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">Emergency Services</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/beds.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">IPD 25 beds</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/icu-room.png"
                width={100}
                height={100}
                className="p-2 object-cover"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">Fully equipped ICU</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/room.png"
                width={100}
                height={100}
                className="p-2 object-cover"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">Private and deluxe rooms</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/xray-machine.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">
                  100 ma X-ray machine Allengers
                </h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/digital-xray.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">
                  Digital X-ray processing system FUJI
                </h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/ecg.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">ECG Machines</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/dialysis.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">Dialysis</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/oxygen.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">
                  Centralized pipe line for medical Oxygen supply in the entire
                  hospital
                </h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/xray.png"
                width={100}
                height={100}
                className="p-2 object-cover"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">
                  Portable X-ray to all patient rooms and wards, OT, ICU,
                  Emergency
                </h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/store.png"
                width={100}
                height={100}
                className="p-2 object-cover"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">
                  Fully computerized 24 hours Pharmacy/Medical store
                </h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/labor-room.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">Fully equipped labor room</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/power.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">24 hours power back up</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/lift.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">24 hours functioning lifts</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/ot.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">Operation theatres</h1>
              </div>
            </div>
            <div className="border border-white shadow-md shadow-white lg:flex mb-5">
              <Image
                src="/facilities/pathology.png"
                width={100}
                height={100}
                className="p-2"
                alt="sample-image"
              />
              <div className="flex items-center">
                <h1 className="p-2 text-white">
                  24 hours functioning fully computerized Pathology Lab
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-6 lg:block hidden">
          <div className="bg-white p-3 mb-3">
            <Image
              src="/gallery/7.jpg"
              width={1000}
              height={1000}
              className="w-[200px] h-[150px] object-cover"
              alt="sample-image"
            />
          </div>
          <div className="bg-white p-3 mb-3">
            <Image
              src="/gallery/8.jpg"
              width={1000}
              height={1000}
              className="w-[200px] h-[150px] object-cover"
              alt="sample-image"
            />
          </div>
          <div className="bg-white p-3 mb-3">
            <Image
              src="/gallery/1.jpg"
              width={1000}
              height={1000}
              className="w-[200px] h-[150px] object-cover"
              alt="sample-image"
            />
          </div>
          <div className="bg-white p-3 mb-3">
            <Image
              src="/gallery/10.jpg"
              width={1000}
              height={1000}
              className="w-[200px] h-[150px] object-cover"
              alt="sample-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
