import Image from "next/image"
import Button from "./button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
type FeaturedCardProps = {
    src: string;
    resource: string;
    reporter: string;
}
export const Featured = () => {
    return(
        <div>
            <div className="w-full lg:mt-24 mt-10 mb-10 flex items-center justify-center">
          <p className="text-[24px] font-semibold">As Featured In</p>
            </div>
            <div className="flex overflow-x-scroll gap-[32px] no-scrollbar">
                <FeaturedCard src="/featuredimg.png" resource="/logo-3.svg" reporter="Rema Viel" />
                <FeaturedCard src="/featured5.png" resource="/qtech.svg" reporter="Rema Viel" />
                <FeaturedCard src="/featured6.png" resource="/punch.svg" reporter="Rema Viel" />
                <FeaturedCard src="/guardian.png" resource="/guardian.svg" reporter="Rema Viel" />
            </div>
            <div className="flex items-center justify-center mt-10 px-24">
                <h1 className="text-[80px] text-center">Let's build companies that help everyone succeed</h1>
            </div>
            <div className='gap-[12px] flex items-center justify-center mt-10 px-24 pb-24'>
              <Button color='white'>
                SINC With Us
              </Button>
              <Button color="grey">
               Apply to SIP 1.0
              </Button>
            </div>
        </div>
    )
}

const FeaturedCard = ({src, resource, reporter} : FeaturedCardProps) => {
    return(
        <div className="xl:flex hidden ">
            <div className="w-[622px] h-[393px]">
            <Image 
            src={src}
            alt="featured"
            width={622}
            height={393}
            />
            </div>
            <div className="w-[272px] px-[20px] py-[40px] bg-white">
                <Image
                src={resource}
                alt="/logo"
                width={71}
                height={30}
                />
                <div className="mt-5 ">
                    <p className="text-[15px] font-medium">SINC Partners invests  over 200 million naira in 5 startups</p>
                    <p className="text-[14px] mt-4">SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....</p>
                    <div className="flex flex-col mt-20">
                    <p>REPORTED BY:</p>
                    <p>{reporter}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}