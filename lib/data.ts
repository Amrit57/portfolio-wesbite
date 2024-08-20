import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CV from "@/public/CV Builder.png";
import TextUtils from "@/public/hisi.png";
import WeatherApp from "@/public/vugol.png";

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
    title: "Vugol.me",
    description:
      "This is website where user's can conduct/participate, e.t.c on  surveys and subject/articles to help user/company get the data for their bussiness growth and also explore recent gloabl news. There are lots of other features you can explore by visiting the website. Note: Project Done while working in OSON (Outright Solution Nepal)  ",
    tags: [
      "Next.js",
      "Shadcn",
      "Tailwind Css",
      "React-animation",
      "Php",
      "laravel",
    ],
    imageUrl: WeatherApp,
    link: "https://www.vugol.me/",
    code: "https://github.com/bigroski/vumiFront",
  },
  {
    title: "Hisi-Cosmetics",
    description:
      "A full-stack Ecommerce website where different cosmetics products can be purchased  based on  brands and many filteration feature along with payment services and many more. Note: Front-end Developer in Freelance project ",
    tags: ["Next.js", "Tailwind Css", "Shadcn", "Node.js", "Javascript"],
    imageUrl: TextUtils,
    link: "https://hisicosmo-front.vercel.app/",
    code: "https://github.com/meanish/hisicosmo-front",
  },
  {
    title: "CV Builder",
    description:
      "This website helps you build your CV, Load exmaple resume and several other features. ",
    tags: ["React", "Vite.js", "CSS", "Material Design Icon", "Netlify"],
    imageUrl: CV,
    link: "https://delicate-choux-6f87e5.netlify.app/",
    code: "https://github.com/Amrit57/CV-Application",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Next.js",
  "Shadcn",
  "Git",
  "Github",
  "Tailwind Css",
  "Bootsrap 5",
  "Figma",
  "Ck Editor",
  "Npm",
  "Framer Motion",
] as const;
