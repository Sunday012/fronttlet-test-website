import Image from "next/image";
import React from "react";
import Button from "./button";

export const Hero = () => {
  return (
    <div>
      <div className=" grid lg:grid-cols-2 grid-cols-1 bg-[#FFFFFF] relative">
        <div className="flex items-start justify-start flex-col lg:px-24 px-10 gap-2">
          <div className="flex lg:items-center lg:justify-center items-start justify-start flex-col gap-2 lg:mt-14 mt-8 mb-4">
            <h1 className="lg:text-[32px] md:text-[24px] text-[20px] font-medium leading-[32px] lg:leading-[51px]">
              SINC Partners is a service incubation company{" "}
            </h1>
            <p className="lg:text-[20px] text-[17px] lg:leading-[38px] leading-[28px] font-normal">
              Connecting experts in product development and growth marketing
              willing to offer their services to amazing startups in exchange
              for minute equity (usually 0.5% to 2%).
            </p>
          </div>
          <Button color="grey">SINC With Us</Button>
        </div>
        <div className="hidden lg:flex">
          <Image src="/heroimg.png" alt="/hero" width={703} height={590} className="w-full h-full" />
        </div>
        <div className="absolute w-full items-end h-full hidden justify-center lg:flex gap-4 mt-[-14px]">
            <button className="w-[12px] h-[12px] rounded-full bg-[#5B5454]"></button>
            <button className="w-[12px] h-[12px] rounded-full bg-[#D9D9D9]"></button>
            <button className="w-[12px] h-[12px] rounded-full bg-[#D9D9D9]"></button>
        </div>
        <div className="flex gap-4 items-center justify-center my-4 lg:hidden">
            <button className="w-[12px] h-[12px] rounded-full bg-[#5B5454]"></button>
            <button className="w-[12px] h-[12px] rounded-full bg-[#D9D9D9]"></button>
            <button className="w-[12px] h-[12px] rounded-full bg-[#D9D9D9]"></button>
        </div>
      </div>
    </div>
  );
};
