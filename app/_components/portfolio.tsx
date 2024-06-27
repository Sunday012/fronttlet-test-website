import Image from "next/image";
import { Header } from "./header";

const imageFileNames = Array.from(
  { length: 40 },
  (_, i) => `/logo-${i + 1}.svg`
);

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header text="Our Studio Portfolio" subtext="Our 2024 Service Incubator Portfolio Companies" />
      <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 gap-8 items-center justify-center">
        {imageFileNames.map((fileName, index) => {
          const width =
            index === 3 || index === 29 || index === 30 || index === 32
              ? 32
              : 70;
          const height = 0;

          return (
            <div
              key={index}
              className="p-3 border border-slate-200 bg-white rounded-md items-center justify-center flex  md:w-[100px] md:h-[50px] w-[70px] h-[30px]"
            >
              <Image
                src={fileName}
                alt={`Logo ${index + 1}`}
                width={width}
                height={height}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
