"use client"
import React from "react";
import { Header } from "./header";
import {Investors} from "../_constants"
import Button from "./button"
import {motion} from "framer-motion"

export const Investor = () => {
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
  return (
    <motion.div
    variants={animateVar}
            initial="initial"
            whileInView="animate"
            viewport={{once : true}}
    >
      <Header
        text="SINC Investors Network"
        subtext="Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest."
      />
      <div className="w-full flex items-center justify-center mt-[-30px]">
        <p className="text-[#4E4E4E] text-center md:w-[800px] w-[97%]  mb-10">
          <span className="text-[17px] font-bold text-[#4E4E4E]">
            Disclaimer:
          </span>{" "}
          These deal flows is a statement of our projections and may differ from
          stage to stage and from venture to venture and the guarantee is for
          deal 1, usually the first to invest
        </p>
      </div>
      <div className="lg:px-24 px-4 ">
        {Investors.map((investor, id) => (
          <div key={id}>
            <h1 className="font-semibold text-center lg:text-start text-[20px] my-6">
              {investor.type}
              <span className="font-normal">{investor.moneyvalue}</span>
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:divide-x lg:divide-y-0 divide-y divide-[#A4A4A4] border-y-[0.5px] border-[#A4A4A4] ">
              {investor.dealinfo.map((deal, id) => (
                <div key={id} className="gap-[12px] px-4 py-4">
                  <h1 className="font-medium text-[18px] mb-3">{deal.number}</h1>
                  {deal.text.map((text, id) => (
                    <p key={id} className="text-[13px] text-[#4E4E4E] mt-[4px]">
                        <span className="text-[#4E4E4E]">✓ </span>
                     {text.title}: <span className="text-[#303030] font-medium">{text.value}</span>
                    </p>
                  ))}
                </div>
              ))}
              {
                investor.type === "Angel Investors & Venture Capital" ? (
                    <div className="bg-[#101010] text-white py-[18px] px-[20px] space-y-[20px]">
                    <p className="font-semibold">Work with Service Incubators (SINC) to expedite your time to market</p>
                    <Button color="grey">
                     Join Sinc Network
                    </Button>
               </div>
                ) : null
              }
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
