import { SITE_INFORMATION } from "@/utilities/content";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Footer = () => {
  const links = [
    {
      label: "Resources",
      link: "/resources",
    },
    {
      label: "Photos",
      link: "/photos",
    },
  ];
  return (
    <div className="mt-14 w-full flex items-center flex-col gap-3 py-5 justify-between sm:flex-row ">
      <div className="flex gap-3 items-center">
        {links.map((item, index) => (
          <Link
            className=" text-gray-500 text-sm hover:underline hover:cursor-pointer"
            href={item.link}
            key={index}
          >
            {" "}
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-3 items-center my-3">
        {SITE_INFORMATION.socialMediaLinks.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <Link href={item.link} target="_blank" className="">
                  <item.icon />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      {/* <p className="text-sm text-gray-500">
        @ 2024 {MAIN_INFORMATION.name.replace(" ", "").toLowerCase()}
      </p> */}
    </div>
  );
};

export default Footer;
