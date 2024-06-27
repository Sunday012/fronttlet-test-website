
type ArrowProps = {
    text: string;
}

export const ArrowButton = ({text} : ArrowProps) => {
    return(
        <button className="flex gap-2 items-center justify-center">
        <p className="border-b border-[#000000] font-semibold">{text}</p>
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4561 7.5H1.51172M14.4561 7.5L9.3067 2.35065M14.4561 7.5L9.3067 12.6494"
            stroke="#212121"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </button>
    )
}