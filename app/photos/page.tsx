"use client";
import CaptionPage from "@/components/caption";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Divider from "@/components/ui/divider";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

type Image = {
  link: string;
};

const imagesList: Image[] = [
  {
    link: "/assets/photos/20.jpeg",
  },
  {
    link: "/assets/photos/23.jpeg",
  },
  {
    link: "/assets/photos/24.jpeg",
  },
  {
    link: "/assets/photos/11.jpeg",
  },

  {
    link: "/assets/photos/7.jpeg",
  },

  {
    link: "/assets/photos/17.jpeg",
  },
  {
    link: "/assets/photos/6.jpeg",
  },

  {
    link: "/assets/photos/16.jpeg",
  },
  {
    link: "/assets/photos/3.jpeg",
  },

  {
    link: "/assets/photos/15.jpeg",
  },
  {
    link: "/assets/photos/4.jpeg",
  },

  {
    link: "/assets/photos/22.jpeg",
  },
  {
    link: "/assets/photos/9.jpeg",
  },
  {
    link: "/assets/photos/5.jpeg",
  },
];

const Photos = () => {
  return (
    <div className="my-5 px-4">
      <div className="grid sm:grid-cols-3 gap-4">
        {imagesList.map((item, index) => (
          <AspectRatio ratio={16 / 16} key={index}>
            <Image
              src={item.link}
              alt="Image"
              fill
              draggable={false}
              className="rounded-lg object-cover brightness-[.85]  transition duration-300 hover:brightness-100"
            />
          </AspectRatio>
        ))}
      </div>
      <Divider />
      <Breadcrumb className="">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Photos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <CaptionPage />
    </div>
  );
};

export default Photos;
