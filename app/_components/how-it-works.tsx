"use client";
import { Header } from "./header";
import { ArrowButton } from "./arrow";
import Image from "next/image";
import {motion} from "framer-motion"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

type WorkCardProps = {
  icon: string;
  label: string;
  content: string;
};

export const HowItWorks = () => {
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <motion.div
    variants={animateVar}
            initial="initial"
            whileInView="animate"
            viewport={{once : true}}
    >
      <Header
        text="How It Works"
        subtext="Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each."
      />
      <Carousel
        className="lg:px-24 px-4"
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
            <WorkCard
              icon="/applogo.svg"
              label="Application and Selection"
              content="Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application."
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
            <WorkCard
              icon="/meeting.svg"
              label="Alignment Meeting and Proposal Submission"
              content="If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies."
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
            <WorkCard
              icon="/agree.svg"
              label="Negotiation and Agreement"
              content="Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners."
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
            <WorkCard
              icon="/onboard.svg"
              label="Onboarding and Integration"
              content="Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration."
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
            <WorkCard
              icon="/onboard.svg"
              label="Onboarding and Integration"
              content="Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration."
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3 md:basis-1/2">
            <WorkCard
              icon="/onboard.svg"
              label="Onboarding and Integration"
              content="Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration."
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="lg:flex items-center hidden justify-center mt-10">
        <ArrowButton text="Support the Future" />
      </div>
      <div className="flex gap-4 items-center justify-center my-4 lg:hidden">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-[12px] h-[12px] rounded-full ${
              current === index ? "bg-[#5B5454]" : "bg-[#D9D9D9]"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10 gap-[75px]">
        <button
          className="bg-transparent border-[1px] border-[#4D4D4D] rounded-full w-[66px] h-[66px] flex items-center justify-center"
          onClick={() => api?.scrollPrev()}
        >
          <svg
            width="31"
            height="26"
            viewBox="0 0 31 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.94089 13H29.0469M1.94089 13L12.7239 23.783M1.94089 13L12.7239 2.21703"
              stroke="#4D4D4D"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
        <button
          className="bg-transparent border-[1px] border-[#4D4D4D] rounded-full w-[66px] h-[66px] flex items-center justify-center"
          onClick={() => api?.scrollNext()}
        >
          <svg
            width="31"
            height="26"
            viewBox="0 0 31 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.0591 13H1.95312M29.0591 13L18.2761 2.21703M29.0591 13L18.2761 23.783"
              stroke="#4D4D4D"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const WorkCard = ({ icon, label, content }: WorkCardProps) => {
  return (
    <div className="flex flex-col gap-2.5 rounded-lg bg-white p-2.5 h-[348px]">
      <div className="flex items-center bg-[#4E4E4E] text-white justify-center rounded-full w-[40px] h-[40px]">
        <Image src={icon} alt="icon" width={20} height={20} />
      </div>
      <span className="font-medium text-[18px]">{label}</span>
      <p className="text-[#4E4E4E] text-[14px]">{content}</p>
    </div>
  );
};
