
type CardProps = {
    number: string;
    text: string;
    color: string;
}
export const Focus = () => {
    return(
        <div>
            <div className="flex flex-col items-center justify-center">
            <h1 className="lg:text-[56px] text-[20px] leading-[72px] font-semibold text-center mb-6">
            Our Area of Focus
            </h1>
            <p className="text-[#4E4E4E] text-center md:w-[628px] w-full mb-10">In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</p>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 xl:grid-cols-5">
                <FocusCard number={"01"} text="Business Support & Incubation" color="#303030" />
                <FocusCard number={"02"} text="On-Demand & As-A-Service" color="#F47733" />
                <FocusCard number={"03"} text="Marketplace & Crowdsourcing" color="#FF78BF" />
                <FocusCard number={"04"} text="Aggregation & Shared Economy" color="#20888F" />
                <FocusCard number={"05"} text="Decentralized Economy & Digital Assets" color="#FF88C6" />
            </div>
            </div>
        </div>
    )
}


const FocusCard = ({number, text, color} : CardProps) => {
    return(
        <div className={`p-[20px] text-white md:w-[240px] md:h-[160px] w-[354px] `}
        style={{ backgroundColor: color }}
        >
            <div>
                <p className="mb-10">{number}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
