"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ArrowButton } from "./arrow";
import Button from "./button";
import { motion } from "framer-motion";
export const Network = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
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
    <div className=" lg:py-24 py-10">
      <motion.div className="flex flex-col items-center justify-center"
      variants={animateVar}
      initial="initial"
      whileInView="animate"
      viewport={{once : true}}
      >
        <div className="md:px-24 px-2 h-[235px] ">
          <div className="rounded-[32px] h-full bg-white px-[32px] py-[20px] flex flex-col gap-4 items-center justify-center">
            <p className="text-center">
              "Nigeria and Africa has a massive network effect that have not be
              fully utilized. With Nigerians/Africans in every country and
              territory of the world, we can scale an African business to 100+
              countries in few weeks"
            </p>
            <p className="font-semibold">Daniel Izeghs Oratokhai</p>
            <p>Managing Partner at SINC Partners Ltd</p>
          </div>
        </div>

        <div className="mt-20 hidden lg:flex flex-col">
          <h1 className="text-[56px] leading-[72px] font-semibold text-center mb-8">
            Network of builders helping <br /> startup scale
          </h1>
          <div className="flex gap-[32px] w-full">
            <NetworkCard />
            <NetworkCard />
          </div>
        </div>

        <div className="px-4 lg:hidden flex">
          <div className="flex flex-col mt-10 gap-[24px] items-center justify-center">
            <p className="font-semibold text-[20px] leading-[26px] text-center">
              Building the future together, democratizing success.
            </p>
            <p className="text-center">
              SINC Partners has a novel vision of making success available to
              everyone and democratizing the pain point of success. We are a
              next generation startup studio focus on building and supporting
              enterprises at scale and we help them raise service investments
              and funds across 3-5 deals from as low as $25k at start to up to
              $15m before you leave the lab. We are a Gasus Business, a business
              built on the foundation of Christian values and belief.
            </p>
            <Button color="grey">Read About Us</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const NetworkCard = () => {
  return (
    <div className="bg-white rounded-[12px] p-[24px] xl:w-[528px] md:w-[450px] h-[370px]">
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[24px] font-semibold">
          Work with Service Incubators to expedite your time-to-market
        </h1>
        <p className="text-[#4E4E4E]">
          Collaborate with our meticulously chosen service partners, each with a
          vested interest, ensuring a shared commitment to success in the game
          of venture building.
        </p>
        <p className="font-bold text-[#4E4E4E]">
          For 7.5% equity, you get a product manager, product designer, frontend
          engineer, software engineer and growth marketer to build the MVP of
          your app or web application and validate it.
        </p>
        <div>
          <ArrowButton text="Learn More" />
        </div>
      </div>
    </div>
  );
};
