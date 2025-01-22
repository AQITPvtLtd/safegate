"use client";

import React, { useState } from "react";
import Accordion from "../Accordian";
const Faq = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title:
        "Can I visit a gynaecologist & obstetrician doctor if I am experiencing irregular periods?",
      data: `Yes, you can visit a gynaecologist & obstetrician when facing irregular periods and other similar problems.`,
      isOpen: true,
    },
    {
      key: 2,
      title:
        "Does Safegate Medical Centre - Multispeciality Clinic perform surgeries?",
      data: `Most gynaecologists & obstetricians perform surgeries such as c-sections, fibroid removal, ovarian cyst removal, etc. For more details, you can get in touch with Safegate Medical Centre - Multispeciality Clinic.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "Do gynaecologists & obstetricians deliver babies?",
      data: `Yes, gynaecologists & obstetricians are trained in helping women in labour and delivering babies.  `,
      isOpen: false,
    },
    // {
    //   key: 4,
    //   title:
    //     "How do I book an appointment with Safegate Medical Centre - Multispeciality Clinic?",
    //   data: `The working timings of Safegate Medical Centre - Multispeciality Clinic are Monday:- 10:30 am - 8:00 pm, Tuesday:- 10:30 am - 8:00 pm, Wednesday:- 10:30 am - 8:00 pm, thu:- 10:30 am - 8:00 pm, Friday:- 10:30 am - 8:00 pm, Saturday:- 10:30 am - 8:00 pm, Sunday:- 10:30 am - 8:00 pm.`,
    //   isOpen: false,
    // },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div className="overflow-x-clip my-9">
      <h1 className="text-5xl font-bold mx-12">Frequently asked questions</h1>
      <div className=" ml-12 mt-1 w-full">
        <div className="grid grid-cols-4">
          <div className="border-2 border-primary"></div>
          <div className="border border-lightgreen"></div>
        </div>
      </div>

      {/* accordian */}

      <div className="mx-12 my-5">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
