import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CV from "@/public/CV Builder.png";
import TextUtils from "@/public/TextUtils.png";
import WeatherApp from "@/public/Weather App.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CV Builder",
    description:
      "This website helps you build your CV, Load exmaple resume and several other features. ",
    tags: ["React", "Vite.js", "CSS", "Material Design Icon", "Netlify"],
    imageUrl: CV,
    link: "https://delicate-choux-6f87e5.netlify.app/",
    code: "https://github.com/Amrit57/CV-Application",
  },
  {
    title: "Weather App",
    description:
      "This is a weather App which shows the weather of any given city in the world by handling Weather Api",
    tags: ["HTML", "JavaScript", "CSS", "Weather Api", "Github Pages"],
    imageUrl: WeatherApp,
    link: "https://amrit57.github.io/Weather-App/",
    code: "https://github.com/Amrit57/Weather-App",
  },
  {
    title: "TextUtils",
    description:
      "A public web app for quick analytics on text. It shows word count, character count, alert feedbacks, preview section and many more features.",
    tags: ["React", "Bootsrap 5", "Netlify"],
    imageUrl: TextUtils,
    link: "https://textutlis-fb8214.netlify.app/",
    code: "https://github.com/Amrit57/TextUtlis-App",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "Github",
  "Figma",
  "Tailwind",
  "Bootsrap 5",
  "Redux",
  "Framer Motion",
] as const;
