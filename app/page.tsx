import Image from "next/image";
import { Hero } from "./_components/hero";
import {Network} from "./_components/network"
import {Focus} from "./_components/focus"
import { Innovation } from "./_components/innovation";
import { IncubationModel } from "./_components/incubation-model";
import { Investor } from "./_components/investor";
import { Blog } from "./_components/blog";
import { Featured } from "./_components/featured";
import {HowItWorks} from "./_components/how-it-works"
import Portfolio from "./_components/portfolio";
import CoFounder from "./_components/coFounder";
import EquityJob from "./_components/equityJob";

export default function Home() {
  return (
    <>
     <Hero />
     <Network />
     <Focus />
     <Innovation />
     <IncubationModel />
     <Portfolio />
     <CoFounder />
     <HowItWorks />
     <Investor />
     <EquityJob />
     <Blog />
     <Featured />
    </>
  );
}
