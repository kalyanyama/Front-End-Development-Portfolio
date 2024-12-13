import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";

export const MAIN_INFORMATION = {
  name: "Kalyan yama",
  suffix: "com",
};

export const DOMAIN_INFORMATION = {
  domain:
    MAIN_INFORMATION.name.replace(" ", "").toLowerCase() +
    "." +
    MAIN_INFORMATION.suffix,
};

export const SITE_INFORMATION = {
  logo: "/assets/site/logo.svg",
  profile: "/assets/photos/20.jpeg",
  headerLinks: [
    {
      label: "About",
      link: "/#about",
    },
    {
      label: "Projects",
      link: "/#projects",
    },
    {
      label: "History",
      link: "/#history",
    },
    // {
    //   label: "Snippets",
    //   link: "/snippets",
    // },
  ],
  socialMediaLinks: [
    {
      label: "Github",
      link: "https://github.com/kalyanyama",
      icon: GitHubLogoIcon,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/kalyanyama/",
      icon: LinkedInLogoIcon,
    },
    {
      label: "Gmail",
      link: "mailto:kalyannyama@gmail.com",
      icon: EnvelopeClosedIcon,
    },
    // {
    //   label: "Instagram",
    //   link: "https://www.instagram.com/kalyan.yama/",
    //   icon: InstagramLogoIcon,
    // },
    {
      label: "Phone",
      link: "tel:+919550049382",
      icon: MobileIcon,
    },
    // {
    //   label: "Vercel",
    //   link: "https://vercel.com/kalyanyama",
    //   icon: VercelLogoIcon,
    // },
  ],
};
