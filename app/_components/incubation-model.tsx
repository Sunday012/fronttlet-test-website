import React from 'react'
import { Header } from './header'
import Image from 'next/image';
import Button from './button';
import { ArrowButton } from './arrow';

type ModelProps = {
  shape: string;
  text: string
}

export const IncubationModel = () => {
  return (
    <div>
        <Header text='Our Service Incubation Model' subtext='The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.' />
        <div className='lg:px-24 px-4'>
          <h1 className='font-medium text-[32px]'>Hypothesis</h1>
          <p className='text-[#4E4E4E] text-[17px] mt-[12px]'>Just a few reasons we know its time for this model within the ecosystem</p>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6 mt-[64px]'>
            <ModelCard shape="/triangle.svg" text='Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support' />
            <ModelCard shape="/rhombus.svg" text='If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment' />
            <ModelCard shape="/heptagon.svg" text='Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return' />
          </div>
          <h1 className='font-medium text-[32px] mt-10'>Case Study</h1>
          <p className='mt-[12px]'>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
          <div className='flex lg:flex-row flex-col gap-3 mt-[44px]'>
            <Button color='white'>Service Incubator Equity</Button>
            <Button color='white'>SEEQ Maths Equation</Button>
            <Button color='white'>Value of my Equity Over Time</Button>
          </div>
          <div className='flex items-center justify-center mt-10'>
          <ArrowButton text='Become A Service Incubator' />
          </div>
        </div>
    </div>
  )
}

const ModelCard = ({shape, text} : ModelProps) => {
    return(
      <div className='rounded-[12px] bg-white px-[20px] py-[16px] '>
      <div className='flex flex-col items-start justify-start gap-9'>
          <Image
           src={shape}
           alt='shape'
           width={40}
           height={40}
          />
          <p className=' leading-[22px] text-start text-[16px]'>{text}</p>
      </div>
  </div>
    )
}
