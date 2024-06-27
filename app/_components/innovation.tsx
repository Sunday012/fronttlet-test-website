"use client"
import React from 'react'
import { Header } from './header'
import { motion } from "framer-motion";

type InnovationProps = {
    title: string;
    text: string
}
export const Innovation = () => {
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
        <Header text='Our Concept Innovations' subtext='We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;' />
        <div className='flex flex-col lg:flex-row items-center justify-between lg:px-24 px-4 gap-6'>
            <InnovationCard title='Service Incubator' text='A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP' />
            <InnovationCard title='Virtualting' text='A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource' />
            <InnovationCard title='Diiming' text='A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice ' />
        </div>
    </motion.div>
  )
}


const InnovationCard = ({title, text} : InnovationProps) => {
    return(
        <div className='rounded-[12px] bg-white px-[20px] py-[16px] '>
            <div className='flex flex-col items-center justify-center gap-9'>
                <h2 className=' font-medium text-[22px] text-center text-nowrap'>{title}</h2>
                <p className=' leading-[22px] text-center text-[16px]'>{text}</p>
            </div>
        </div>
    )
}