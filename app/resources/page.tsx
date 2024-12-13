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
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Divider from "@/components/ui/divider";
import {
  CodeIcon,
  ColorWheelIcon,
  ComponentInstanceIcon,
  FontStyleIcon,
  ImageIcon,
  Pencil1Icon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

 const resourcesContent = [
  {
    catagory: "UI Libraries",
    icon: CodeIcon,
    list: [
      {
        label: "Tailwind CSS",
        description:
          "A utility-first CSS framework for fast UI development with minimal code.",
        link: "https://tailwindcss.com",
      },
      {
        label: "Mantine UI",
        description:
          "A fully featured React component library for building modern interfaces.",
        link: "https://mantine.dev",
      },
      {
        label: "Material UI",
        description:
          "A popular React UI framework offering customizable components based on Google’s Material Design.",
        link: "https://mui.com",
      },
      {
        label: "shadcn/ui",
        description:
          "An accessible and highly customizable UI component library for React.",
        link: "https://ui.shadcn.dev",
      },
      {
        label: "Bootstrap 5",
        description:
          "The most widely used CSS framework for responsive and mobile-first web projects.",
        link: "https://getbootstrap.com",
      },
      {
        label: "Chakra UI",
        description:
          "A modular and accessible component library for React applications.",
        link: "https://chakra-ui.com",
      },
      {
        label: "Ant Design",
        description:
          "A design system and React UI library for enterprise-level applications.",
        link: "https://ant.design",
      },
    ],
  },
  {
    catagory: "Icons",
    icon: ComponentInstanceIcon,
    list: [
      {
        label: "Tabler Icons",
        description:
          "Free and customizable SVG icons perfect for modern web interfaces.",
        link: "https://tabler-icons.io",
      },
      {
        label: "React Icons",
        description:
          "A comprehensive library of icons for React applications, from various popular icon sets.",
        link: "https://react-icons.github.io/react-icons",
      },
      {
        label: "Radix Icons",
        description:
          "A crisp and minimalist icon set designed for modern web and app development.",
        link: "https://icons.radix-ui.com",
      },
      {
        label: "Bootstrap Icons",
        description:
          "A versatile icon library designed to complement Bootstrap-based projects.",
        link: "https://icons.getbootstrap.com",
      },
      {
        label: "Heroicons",
        description:
          "Beautiful, hand-crafted SVG icons by the creators of Tailwind CSS.",
        link: "https://heroicons.com",
      },
      {
        label: "Feather Icons",
        description: "Simple and minimalistic icons designed for web projects.",
        link: "https://feathericons.com",
      },
      {
        label: "Ionicons",
        description:
          "Premium icons built for use in mobile and web interfaces.",
        link: "https://ionic.io/ionicons",
      },
    ],
  },
  {
    catagory: "Illustrations",
    icon: Pencil1Icon,
    list: [
      {
        label: "Storyset",
        description:
          "A collection of customizable illustrations for enhancing storytelling in web and app designs.",
        link: "https://storyset.com",
      },
      {
        label: "Freepik",
        description:
          "A vast library of free illustrations, vectors, and graphics for creative projects.",
        link: "https://freepik.com",
      },
      {
        label: "Undraw",
        description:
          "Open-source illustrations for every project you can imagine.",
        link: "https://undraw.co",
      },
      {
        label: "Blush",
        description:
          "Create and customize stunning illustrations from artists around the world.",
        link: "https://blush.design",
      },
      {
        label: "Humaaans",
        description:
          "A free library for creating illustrations of people with various poses and styles.",
        link: "https://humaaans.com",
      },
    ],
  },
  {
    catagory: "Designs",
    icon: ImageIcon,
    list: [
      {
        label: "Dribbble",
        description:
          "A platform for discovering creative design work and getting inspiration from top designers.",
        link: "https://dribbble.com",
      },
      {
        label: "Pinterest",
        description:
          "A visual discovery tool for finding ideas and inspiration for design projects.",
        link: "https://pinterest.com",
      },
      {
        label: "Behance",
        description:
          "A platform for showcasing and discovering creative work from designers worldwide.",
        link: "https://behance.net",
      },
      {
        label: "Awwwards",
        description:
          "Inspiration from the best web designers and developers worldwide.",
        link: "https://awwwards.com",
      },
      {
        label: "Canva",
        description:
          "A versatile design tool for creating graphics, presentations, and social media content.",
        link: "https://canva.com",
      },
    ],
  },
  {
    catagory: "Fonts",
    icon: FontStyleIcon,
    list: [
      {
        label: "Google Fonts",
        description:
          "A vast collection of open-source fonts to use in web projects.",
        link: "https://fonts.google.com",
      },
      {
        label: "Adobe Fonts",
        description:
          "Premium fonts available with Adobe Creative Cloud subscription.",
        link: "https://fonts.adobe.com",
      },
      {
        label: "Font Squirrel",
        description:
          "High-quality, hand-selected fonts that are free for commercial use.",
        link: "https://fontsquirrel.com",
      },
      {
        label: "DaFont",
        description:
          "A large archive of free fonts for personal and commercial projects.",
        link: "https://dafont.com",
      },
      {
        label: "1001 Fonts",
        description: "Free fonts for commercial and non-commercial projects.",
        link: "https://1001fonts.com",
      },
    ],
  },
  {
    catagory: "Color Palettes",
    icon: ColorWheelIcon,
    list: [
      {
        label: "Coolors",
        description: "Generate perfect color palettes for your designs.",
        link: "https://coolors.co",
      },
      {
        label: "Color Hunt",
        description: "Curated collection of beautiful color palettes.",
        link: "https://colorhunt.co",
      },
      {
        label: "Adobe Color",
        description: "Create, save, and share color palettes.",
        link: "https://color.adobe.com",
      },
      {
        label: "Paletton",
        description: "Create color schemes with a color wheel tool.",
        link: "https://paletton.com",
      },
      {
        label: "Colormind",
        description: "A color scheme generator that uses deep learning.",
        link: "http://colormind.io",
      },
    ],
  },
  {
    catagory: "Mockups",
    icon: Pencil2Icon,
    list: [
      {
        label: "Smartmockups",
        description: "Create high-quality mockups without using Photoshop.",
        link: "https://smartmockups.com",
      },
      {
        label: "Placeit",
        description:
          "Mockup and design templates to showcase your designs professionally.",
        link: "https://placeit.net",
      },
      {
        label: "Mockup World",
        description: "A free resource of realistic PSD mockups.",
        link: "https://mockupworld.co",
      },
      {
        label: "Shotsnapp",
        description: "Browser-based tool to create beautiful mockups.",
        link: "https://shotsnapp.com",
      },
      {
        label: "Mockuuups Studio",
        description:
          "A software app to create product mockups on Mac and Windows.",
        link: "https://mockuuups.studio",
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="min-h-700 my-6 px-4">
      {resourcesContent.map((item) => (
        <div key={item.catagory}>
          <p className="text-sm flex gap-2 items-center mb-6 max-w-max font-label">
            <item.icon />
            {item.catagory}
          </p>
          {item.list && (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {item.list.map((innerItem, index) => (
                <Card
                  key={index}
                  className="transition ease-in-out duration-300 border-slate-100 hover:border-slate-200"
                >
                  <CardHeader>
                    <CardTitle className="flex gap-2 transition ease-in-out duration-200 hover:-translate-y-0.5">
                      <Image
                        src={`${innerItem.link}/favicon.ico`}
                        alt={innerItem.label}
                        height={20}
                        width={20}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement; // Cast to HTMLImageElement
                          target.src = "https://via.placeholder.com/32";
                        }}
                      />
                      <Link
                        href={innerItem.link}
                        target="_blank"
                        className="flex gap-2 items-center  hover:underline"
                      >
                        {innerItem.label}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 ">
                      {innerItem.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
          <Divider />
        </div>
      ))}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/photos">Photos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Resources</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <CaptionPage />
    </div>
  );
};

export default Resources;
