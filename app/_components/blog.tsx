"use client"
import Image from "next/image";
import { Header } from "./header";
import { ArrowButton } from "./arrow";
import { motion } from "framer-motion";

const BlogItems = [
  { srclink: "/blogimg.png" },
  { srclink: "/secondblogimg.png" },
  { srclink: "/secondblogimg.png" },
];

const ResourceItems = [
  { imglink: "/resource.svg" },
  { imglink: "/resource2.svg" },
  { imglink: "/resource3.svg" },
];

export const Blog = () => {
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
    viewport={{once : true}}>
      <Header text="Blogs & Resources" />
      <div className="flex flex-col gap-3.5 items-center justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[32px]">
          {BlogItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer relative group md:w-[378px] h-[235px] w-[98%]"
            >
              <Image
              src={item.srclink}
              alt="blog"
              width={378}
              height={235}
              className="w-full h-full"
              />
                <div className="absolute group-hover:inset-0 group-hover:bg-black/30" />
            </div>
          ))}
        </div>
        <div className="flex lg:flex-row flex-col gap-[32px]">
          {ResourceItems.map((item, id) => (
            <div className="flex gap-4 mt-10" key={id}>
              <div className="w-[277px]">
                <h3 className="font-semibold text-[14px] w-full">
                  Top Ten Most Powerful Startup
                </h3>
                <p className="text-[13px] w-full">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>
              <div>
                <Image
                  src={item.imglink}
                  alt="resource"
                  width={85}
                  height={79}
                />
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center mt-10 pb-24'>
          <ArrowButton text='See More Blogs & Resources' />
          </div>
      </div>
    </motion.div>
  );
};
