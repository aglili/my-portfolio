import HeroSection from "@/components/hero-section/HeroSection";
import LanguagesAndTools from "@/components/languages-and-tools/LanguagesAndTools";
import Projects from "@/components/projects/Projects";
import React from "react";

function page() {
  return (
    <main className="max-w-[1000px] mx-auto pt-[10vh] xl:pt-[15vh]">
      <section className="p-5 xl:p-0">
        <HeroSection />
        <LanguagesAndTools/>
        <Projects/>
      </section>
    </main>
  );
}

export default page;
