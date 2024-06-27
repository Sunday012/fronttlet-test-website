"use client"
import React from "react";
import { Header } from "./header";
import { ArrowButton } from "./arrow";
import {motion} from "framer-motion"
const CoFounder = () => {
  const animateVar = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };
  const cofounders = [
    {
      id: 1,
      idBg: "#303030",
      label: "We Ideate",
      content:
        "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
    },
    {
      id: 2,
      idBg: "#F47733",
      label: "You Validate",
      content:
        "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions ",
    },
    {
      id: 3,
      idBg: "#FF78BF",
      label: "You Co-own",
      content:
        "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
    },
  ];

  return (
    <motion.div className="flex flex-col items-center justify-center"
    variants={animateVar}
            initial="initial"
            whileInView="animate"
            viewport={{once : true}}
    >
      <Header text='Co-found With Us' subtext='We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed' />
      <div className="flex flex-col lg:flex-row items-center justify-between lg:px-24 px-4 gap-6">
        {cofounders.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2.5 rounded-lg bg-white p-2.5  min-h-[230px]"
          >
            <div
              className="flex items-center text-white justify-center rounded-full w-[40px] h-[40px]"
              style={{ backgroundColor: item.idBg }}
            >
              {item.id}
            </div>
            <span className="font-medium text-[18px]">{item.label}</span>
            <p className="text-[#4E4E4E] text-[14px]">{item.content}</p>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center mt-10'>
          <ArrowButton text='Build your dream' />
          </div>
    </motion.div>
  );
};

export default CoFounder;
