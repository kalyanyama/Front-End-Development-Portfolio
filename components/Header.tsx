"use client";

import { SITE_INFORMATION } from "@/utilities/content";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container sm:max-w-3xl">
      <header className="min-h-20 mb-14 flex justify-between px-4 items-center border-b backdrop-blur-md bg-transparent sticky top-0">
        <Link
          className="flex items-center gap-2 text-lg font-bold hover:cursor-pointer"
          href="/"
        >
          <Image
            aria-hidden
            src={SITE_INFORMATION.logo}
            alt="Kn logo"
            width={20}
            height={20}
          />
        </Link>
        <div className="basic-4/4 flex gap-1 items-center text-sm">
          {SITE_INFORMATION.headerLinks.map((item, index) => (
            <Link
              className="hover:bg-black hover:text-white cursor-pointer rounded-md py-1 px-2 text-[13px]"
              key={index}
              href={item.link}
            >
              {item.label}
            </Link>
          ))}
          {/* <button
            type="button"
            className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 drop-shadow-2xl  ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Contact
          </button> */}
          {/* <Button size={"sm"} variant="outline" asChild>
            <Link href={"/contact"} className="text-xs">
              {" "}
              Contact
            </Link>
          </Button> */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
