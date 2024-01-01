"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate and skilled{" "}
        <span className="font-medium">Game Developer</span>, with a strong
        foundtaion in <span className="font-medium">Graphics Designing</span>.{" "}
        My expertise spans various facets of game development including
        debugging, prototyping, game design, quality assurance and mentoring. I
        am also equipped with additional skills in game art.
      </p>

      <p>
        I approach each day with a readiness to learn and grow, striving to
        enhance my capabilities as both a graphics designer and a game
        developer.
      </p>
    </motion.section>
  );
}
