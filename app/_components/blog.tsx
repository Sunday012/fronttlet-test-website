import Image from "next/image";
import { Header } from "./header";

const BlogItems = [
  { srclink: "/blogimg.png" },
  { srclink: "/secondblogimg.png" },
  { srclink: "/secondblogimg.png" },
];

const ResourceItems = [
  { imglink: "/resource.svg" },
  { imglink: "/resource2.svg" },
  { imglink: "/resource3.svg" },
];

export const Blog = () => {
  return (
    <div>
      <Header text="Blogs & Resources" />
      <div className="flex flex-col gap-3.5 items-center justify-center">
        <div className="flex lg:flex-row flex-col gap-[32px]">
          {BlogItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer relative group"
              style={{
                backgroundImage: `url(${item.srclink})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "378px",
                height: "235px",
              }}
            >
                <div className="absolute group-hover:inset-0 group-hover:bg-black/30" />
            </div>
          ))}
        </div>
        <div className="flex lg:flex-row flex-col gap-[32px]">
          {ResourceItems.map((item, id) => (
            <div className="flex gap-4 mt-10" key={id}>
              <div className="w-[277px]">
                <h3 className="font-semibold text-[14px] w-full">
                  Top Ten Most Powerful Startup
                </h3>
                <p className="text-[13px] w-full">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </div>
              <div>
                <Image
                  src={item.imglink}
                  alt="resource"
                  width={85}
                  height={79}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
