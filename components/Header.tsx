"use client";

import { SITE_INFORMATION } from "@/utilities/content";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

const Header = () => {
  return (
    <div className="container sticky sm:max-w-4xl top-2 z-50">
      <Card className=" min-h-12 flex justify-between items-center rounded-3xl backdrop-blur-sm bg-white/70  px-5">
        <Link
          className="flex items-center gap-2 text-lg font-bold hover:cursor-pointer"
          href="/"
        >
          <Image
            aria-hidden
            src={SITE_INFORMATION.logo}
            alt="Kn logo"
            width={15}
            height={15}
          />
        </Link>
        <div className="basic-4/4 flex gap-1 items-center text-sm">
          {SITE_INFORMATION.headerLinks.map((item, index) => (
            <Link
              className="hover:bg-black hover:text-white text-zinc-500 cursor-pointer rounded-md py-1 px-2 text-[12px]"
              key={index}
              href={item.link}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Header;
