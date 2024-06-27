"use client"
import React from "react";
import Image from "next/image";
import { Header } from "./header";
import { ArrowButton } from "./arrow";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

type EquityProps = {
  image: string;
  paragraph: string;
  title: string;
  location: string;
  industry: string;
  equity: string;
  stipend: string;
  deadLine: string;
  roleType: string;
}
export const EquityJob = () => {
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
  const jobdata = [
    {
      image: "/logo-21.svg",
      paragraph:
        "This company is a SAAS Startup that builds AI copy generator...",
      title: "Chief Executive Officer",
      location: "Abuja, Nigeria",
      industry: "On-demand print",
      equity: "1.2",
      stipend: "200,000",
      deadLine: "24th, January 2024",
      roleType: "Full time",
    },
    {
      image: "/logo-27.svg",
      paragraph:
        "This company is a SAAS Startup that builds AI copy generator...",
      title: "UX Strategist",
      location: "Abuja, Nigeria",
      industry: "E-commerce",
      equity: "1.2",
      stipend: "200,000",
      deadLine: "24th, January 2024",
      roleType: "Full time",
    },
    {
      image: "/logo-22.svg",
      paragraph:
        "This company is a SAAS Startup that builds AI copy generator...",
      title: "CTO & Head of innovations",
      location: "Abuja, Nigeria",
      industry: "Fintech",
      equity: "1.2",
      stipend: "200,000",
      deadLine: "24th, January 2024",
      roleType: "Full time",
    },
    {
      image: "/logo-29.svg",
      paragraph:
        "This company is a SAAS Startup that builds AI copy generator...",
      title: "Backend Developer",
      location: "Abuja, Nigeria",
      industry: "Transportation",
      equity: "1.2",
      stipend: "200,000",
      deadLine: "24th, January 2024",
      roleType: "Full time",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
     <Header text="Equity jobs" subtext="See companies and startups offering equity or a mix of cash and equity for very important position in their company" />
      <Carousel
        className="lg:px-24 px-4 w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {jobdata.map((job, index) => (
          <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
          <EquityJobCard  {...job} />
          </CarouselItem>
        ))}
        </CarouselContent>
      </Carousel>
      <div className='flex items-center justify-center mt-10'>
          <ArrowButton text='See More Equity Jobs' />
          </div>
    </div>
  );
};




const EquityJobCard = ({image, paragraph, title, location, industry, equity, stipend, deadLine, roleType} : EquityProps) => {
  return(
        <div
            className="flex flex-col gap-2.5 rounded-lg bg-white p-3.5"
          >
            <div className="h-[50px] items-center flex justify-start w-[40px]">
              <Image
                src={image}
                alt="company logo"
                width={120}
                height={0}
              />
            </div>
            <span className="text-[13px]">{paragraph}</span>
            <span className="font-medium">{title}</span>

            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start w-[50%]">
                <span className="text-[#8E8E8E] font-light">LOCATION</span>
                <span className="text-[13px]">{location}</span>
              </div>
              <div className="flex flex-col items-end w-[50%]">
                <span className="text-[#8E8E8E] font-light">INDUSTRY</span>
                <span className="text-[13px]">{industry}</span>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start w-[50%]">
                <span className="text-[#8E8E8E] font-light">EQUITY</span>
                <span className="text-[13px]">{equity}%</span>
              </div>
              <div className="flex flex-col items-end w-[50%]">
                <span className="text-[#8E8E8E] font-light">STIPEND</span>
                <span className="text-[12px]">NGN {stipend}/mth</span>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start w-[50%]">
                <span className="text-[#8E8E8E] font-light">DEADLINE</span>
                <span className="text-[12px]">{deadLine}</span>
              </div>
              <div className="flex flex-col items-end w-[50%]">
                <span className="text-[#8E8E8E] font-light">ROLE TYPE</span>
                <span className="text-[13px]">{roleType}</span>
              </div>
            </div>

            <button className="bg-[#303030] rounded-full px-8 py-2 text-white w-fit ">
              View Details
            </button>
          </div>
  )
}