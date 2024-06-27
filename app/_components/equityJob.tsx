import React from "react";
import Image from "next/image";
import { Header } from "./header";
const EquityJob = () => {
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
      <div className="flex w-[98%] overflow-x-scroll lg:overflow-hidden lg:px-24 px-4 no-scrollbar gap-3.5 ">
        {jobdata.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2.5 rounded-lg bg-white p-3.5 w-[278px]"
          >
            <div className="h-[50px] items-center flex justify-start ">
              <Image
                src={item.image}
                alt="company logo"
                width={120}
                height={0}
              />
            </div>
            <span className="text-[13px]">{item.paragraph}</span>
            <span className="font-medium">{item.title}</span>

            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start w-[50%]">
                <span className="text-[#8E8E8E] font-light">LOCATION</span>
                <span className="text-[13px]">{item.location}</span>
              </div>
              <div className="flex flex-col items-end w-[50%]">
                <span className="text-[#8E8E8E] font-light">INDUSTRY</span>
                <span className="text-[13px]">{item.industry}</span>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start w-[50%]">
                <span className="text-[#8E8E8E] font-light">EQUITY</span>
                <span className="text-[13px]">{item.equity}%</span>
              </div>
              <div className="flex flex-col items-end w-[50%]">
                <span className="text-[#8E8E8E] font-light">STIPEND</span>
                <span className="text-[12px]">NGN {item.stipend}/mth</span>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start w-[50%]">
                <span className="text-[#8E8E8E] font-light">DEADLINE</span>
                <span className="text-[12px]">{item.deadLine}</span>
              </div>
              <div className="flex flex-col items-end w-[50%]">
                <span className="text-[#8E8E8E] font-light">ROLE TYPE</span>
                <span className="text-[13px]">{item.roleType}</span>
              </div>
            </div>

            <button className="bg-[#303030] rounded-full px-8 py-2 text-white w-fit ">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquityJob;
