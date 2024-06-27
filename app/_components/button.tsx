import clsx from "clsx"
import Link, { LinkProps } from "next/link";

type ButtonProps = Partial<LinkProps> & {
  children: any;
  variant?: "flat" | "outline";
  color?: "red" | "blue" | "white" | "grey";
  size?: "sm" | "md";
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "flat",
  color = "red",
  size = "md",
  fullWidth = false,
  ...otherProps
}: ButtonProps) {
  const themeClassNames = {
    red: {
      flat: `bg-primary-red border-primary-red text-white`,
      outline: `border-primary-red text-primary-red hover:bg-primary-red hover:bg-opacity-10`,
    },
    blue: {
      flat: `bg-[#20888F] border-primary-blue text-white rounded-[24px] text-nowrap py-[15px] px-[24px] outline-none border-none font-semibold`,
      outline: `border-primary-blue text-primary-blue hover:bg-primary-blue hover:bg-opacity-10`,
    },
    white: {
      flat: `bg-white border-[0.5px] h-[48px] font-medium border-[#A4A4A4] text-[#212121] text-[20px] rounded-[24px] text-nowrap py-[15px] px-[24px`,
      outline: `hover:bg-opacity-10 hover:bg-white`,
    },
    grey: {
      flat: `bg-[#303030] border-[#72879F] text-[#72879F] text-white rounded-[24px] text-nowrap py-[15px] px-[24px] outline-none border-none font-semibold`,
      outline: `hover:bg-opacity-10 hover:bg-[#72879F] text-[#72879F] border-[#72879F]`,
    },
  };

  const padding = size === "sm" ? "px-4 py-1" : "px-6 py-[0.65rem]";
  const themeClass = themeClassNames[color][variant];


  return (
    <button
      className={clsx(
        "rounded border-2 font-poppins text-sm transition",
        padding,
        fullWidth && "w-full",
        themeClass,
      )}
    >
      {children}
    </button>
  );
}