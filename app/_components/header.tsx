
type HeaderProps = {
    text:string;
    subtext?: string;
}

export const Header = ({text, subtext}: HeaderProps) => {
    return(
        <div className=" lg:mt-24 mt-10">
             <h1 className="lg:text-[56px] text-[20px] leading-[72px] font-semibold text-center mb-6">
            {text}
            </h1>
            <div className="w-full flex items-center justify-center">
            <p className="text-[#4E4E4E] text-center md:w-[800px] w-[97%]  mb-10">{subtext}</p>
            </div>
        </div>
    )
}