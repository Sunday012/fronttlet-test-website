import React from "react";
import { Logo } from "./logo";
import Image from "next/image";
import Link from "next/link";
import {FooterLinks} from "../_constants"

const SocialImages = [
  {
    src:"/facebook.svg",
    id:1,
    alt:"facebook"
  },
  {
    src:"/twitter.svg",
    id:2,
    alt:"twitter"
  },
  {
    src:"/instagram.svg",
    id:3,
    alt:"instagram"
  },
  {
    src:"/linkedin.svg",
    id:4,
    alt:"linkedin"
  },
  {
    src:"/medium.svg",
    id:5,
    alt:"medium"
  },
  {
    src:"/youtube.svg",
    id:6,
    alt:"youtube"
  },
  {
    src:"/message.svg",
    id:7,
    alt:"message"
  },
]

export default function Footer() {
  return (
    <div className="bg-[#212121] text-white">
      <div>
        <div className="flex flex-col">
          <div className="md:px-24 px-10 py-10 border-b-[1px] border-b-[#E9E9E9]">
            <div className="flex flex-col md:w-[553px] w-[98%]">
              <h1 className=" text-4xl font-medium">NewsLetter</h1>
              <p className=" mt-4">
                Get the latest about SINC Partners, our startup Incubator
                program, Portfolio company offerings - straight into your inbox.
              </p>

              <form
                action=""
                className=" rounded-[25px] border flex border-[#676767] md:w-fit w-[98%] mt-14"
              >
                <input
                  type="text"
                  className="bg-transparent md:px-2 px-0 placeholder:text-[#BABABA] outline-none border-none"
                  placeholder="Enter your email address"
                />
                <button className=" rounded-[24px] bg-white text-black p-4 md:w-[150px] md:h-[49px] font-bold ">
                  Suscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row border-b-[1px] border-b-[#E9E9E9]">
            <div className="md:pl-24 pl-10 pt-10 pb-6 md:border-r-[1px] border-b-[1px] flex lg:flex-row flex-col border-r-[#E9E9E9] gap-4">
              <div className="md:w-[220px] w-full space-y-[15px]">
                <Logo color="white" />
                <p className=" text-[#C9C9C9] text-[14px]">SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
                {FooterLinks.map((links, id) => (
                  <div className="" key={id}>
                    <p className="text-[18px] font-semibold mb-4">{links.title}</p>
                    <div className="flex flex-col gap-2">
                    {links.links.map((link, id) => (
                      <Link
                  href="/"
                  key={id}
                  className=" text-[#C9C9C9] "
                  >
                    {link.title}
                  </Link>
                    ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-10 pb-6 pl-10">
              <div className="flex flex-col gap-6">
                <h3 className=" font-bold text-[16px]">Locations</h3>
                <div className="space-y-4">
                  <p>Abuja, Nigeria </p>
                  <p>Lagos, Nigeria </p>
                  <p>Philadelphia, USA</p>
                </div>
                <div className="flex items-end px-2 gap-4">
                  <div className=" flex flex-col gap-[8px]">
                    <Image
                    src="/footer-business.svg"
                    alt="business"
                    width={177}
                    height={66}
                    />
                    <p>Trusted Business</p>
                  </div>
                  <div className="flex flex-col items-center gap-[8px]">
                    <Image
                    src="/whatsapp.svg"
                    alt="business"
                    width={39}
                    height={40}
                    />
                    <p>Chat with US</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:px-24 px-10 pt-10 pb-4 flex items-center flex-col">
            <div className="flex flex-col gap-8">
              <div className=" flex flex-col lg:flex-row gap-8 items-center">
                <div>
                  <p className=" text-[14px] lg:text-nowrap">Guaranteed 2x on your service or cash investment, usually been the first to invest.
                    <span className=" font-medium">Get in early and SINC your guaranty!</span>
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <Image
                  src="/gasus.svg"
                  alt="gasus"
                  width={120}
                  height={38}
                  />
                  <p className="text-[12px] text-center lg:text-start">We are a business built on the foundation of Christian values and belief</p>
                </div>
               
              </div>

              <div className="flex gap-[33px] justify-between flex-col lg:flex-row">
                <div className="flex lg:flex-row flex-col items-center ">
                  <p className="text-nowrap text-[16px]">©2023 SINC Partners Ltd. All rights reserved</p>
                </div>
                <div className="flex gap-4 text-nowrap items-center justify-center">
                    <Link
                    href="/"
                    className="border-b border-[#E9E9E9] text-[16px]"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                    href="/"
                    className="border-b border-[#E9E9E9] text-[16px]"
                    >
                      Terms of Service
                    </Link>
                    <Link
                    href="/"
                    className="border-b border-[#E9E9E9] text-[16px]"
                    >
                      Security 
                    </Link>
                  </div>
                <div className="flex gap-[16px] lg:items-end lg:justify-end items-center justify-center">
                  {
                    SocialImages.map((images, id) => (
                      <Image
                       key={id}
                       src={images.src}
                       alt={images.alt}
                       width={20}
                       height={20}
                      />
                    ))
                  }
                </div>
              </div>

            </div>
              <div className="flex gap-2 items-center mt-4">
                <p className="text-[#C9C9C9]">Web In Nigeria</p>
                <Image
                src="/nigeria.svg"
                alt="nigeria"
                width={16}
                height={16}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
