"use client";

import Footer from "@/components/Footer";
import Bio from "@/components/Landingpage/bio";
import ContactPage from "@/components/Landingpage/contact";
import CurrentStatus from "@/components/Landingpage/current-status";
import Experiences from "@/components/Landingpage/experiences";
import Hero from "@/components/Landingpage/hero";
import Projects from "@/components/Landingpage/projects";
import Divider from "@/components/ui/divider";

export default function Home() {
  return (
    <div className="container sm:max-w-3xl grid gap-4">
      <Hero />
      <Divider />
      <Bio />
      <Divider />
      <Projects />
      {/* <Divider /> */}
      {/* <Experiences /> */}
      {/* <Divider /> */}
      {/* <CurrentStatus /> */}
      {/* <Divider /> */}
      {/* <ContactPage /> */}
      <Footer />
    </div>
  );
}
