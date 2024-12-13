import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const list = [
  {
    label: "Grwo",
    image: "",
    link: "https://www.grwo.in",
  },

  {
    label: "ABC-LLC",
    image: "",
    link: "https://abc-llc.vercel.app/",
  },
  {
    label: "QuickMeal",
    image: "",
    link: "https://quickmeal-alpha.vercel.app",
  },
  {
    label: "Magicblooms",
    image: "",
    link: "https://magicblooms-n929.vercel.app",
  },
  {
    label: "Jobskadda",
    image: "",
    link: "https://www.jobskadda.com",
  },
  {
    label: "Unesk",
    image: "",
    link: "https://www.unesk.com",
  },
  {
    label: "Introcon",
    image: "",
    link: "https://www.introcon.in",
  },
  {
    label: "Aivsait",
    image: "",
    link: "https://www.aivsait.com",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <p className="text-sm text-gray-500 font-label">Projects</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {list.map((item, index) => (
          <div key={index} className="">
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.9 }}>
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-sm"
                  >
                    {item.label}
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
