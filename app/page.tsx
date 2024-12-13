"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Bio from "@/components/Landingpage/bio";
import ContactPage from "@/components/Landingpage/contact";
import Hero from "@/components/Landingpage/hero";
import Projects from "@/components/Landingpage/projects";
import Divider from "@/components/ui/divider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container sm:max-w-3xl grid gap-4">
        <Hero />
        <Divider />
        <Bio />
        <Divider />
        <Projects />
        <Divider />
        <ContactPage />
        <Divider />
        <Footer />
      </div>
    </>
  );
}
