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
        After graduating
        <span className="font-medium"> Highschool</span>, I decided to pursue my
        passion for programming. While, I was learning through youtube, I got to
        know about the excellent website called
        <span className="font-medium"> The Odin Project</span> and followed the
        Full-stack Javascript roadmap. After completing the{" "}
        <span>Front-end section with React.</span> Now I&apos;m currently
        learning
        <span className="font-medium"> the full-stack web course</span>.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is
        <span className="font-medium">
          {" "}
          HTML, CSS, Javascript, Bootsrap and React
        </span>
        . I am also familiar with Figma and Tailwind CSS. I am always looking to
        learn new technologies. I am currently looking for a
        <span className="font-medium"> full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing games, watching movies, and youtube videos about the lastest
        Tech and updates in software field . I also enjoy
        <span className="font-medium"> learning new things</span>. I am
        currently learning
        <span className="font-medium"> Typescript and Framer-Motion</span>. I
        also prefer playing football and boxing.
      </p>
    </motion.section>
  );
}
