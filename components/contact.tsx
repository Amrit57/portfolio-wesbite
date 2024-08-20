"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [pending, setPending] = useState(false);
  const handleClick = () => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 3000);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:amritlama.business@gmail.com">
          amritlama.business@gmail.com
        </a>{" "}
        or through my socials.
      </p>
      <div
        className=" m-4 flex justify-center items-center flex-wrap gap-5 
      "
      >
        <a
          className="bg-gray-100 w-[170px] p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-md focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/amrit-lama-syangbo-ab50a5266/"
          target="_blank"
        >
          <BsLinkedin /> LinkedIn
        </a>

        <a
          className="bg-gray-100 w-[170px] p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-md focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Amrit57"
          target="_blank"
        >
          <FaGithubSquare /> Github
        </a>
        <a
          className="bg-gray-100 w-[170px] p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-md focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.facebook.com/amrit.tamang.9634340"
          target="_blank"
        >
          <BsFacebook /> Facebook
        </a>
      </div>
    </motion.section>
  );
}
