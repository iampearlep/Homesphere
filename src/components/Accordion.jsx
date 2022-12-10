import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import {BsShieldFillCheck} from "react-icons/bs";

const dataCollection = [
  {
    question: "Best interest rates on the market",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ex ea commodo consequat.",
  },
  {
    question: "Prevent unstable prices",
    answer:
      "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Best price on the market",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Security of your data",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

const Accordion = () => {
  const [accordion, setActiveAccordion] = useState(1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  }

  return (
    <div className="container flex flex-col justify-center items-center md:justify-start md:items-start ">
      <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-out" className="accordion w-11/12 md:w-10/12 ">
        {dataCollection.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
            <div className=" flex justify-between items-center px-6 py-3 rounded-md border border-gray-100 mb-3 text-primary text-sm font-bold">
           <div className="flex space-x-2">
           <BsShieldFillCheck className="mt-1 text-blue-700" />
              <h3 className={accordion === index ? "active" : ""}>
                {item.question}
              </h3>
           </div>
              <div>
              {accordion === index ? 
                (
                  <>
                     <MdArrowDropUp className="w-10 h-5 text-blue-700 cursor-pointer" />
                  </>
                ) : (
                  <>
                  <MdArrowDropDown className="w-10 h-5 text-blue-700 cursor-pointer" />
                  </>
                )
              }</div>
            </div>
            
            <div className="text-xs text-secondary px-6 rounded-md leading-loose mb-8 shadow-md ">
              <p className={accordion === index ? "active py-4" : "inactive"}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
