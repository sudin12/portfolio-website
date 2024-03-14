import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import connecttdImg from "@/public/connecttd.jpg";
import lettershooterImg from "@/public/lettershooter.jpg";
import punchtfImg from "@/public/punchtf.jpg";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Game Developer Associate",
    location: "ChimpVine",
    description:
      "I worked there as a game developer associate for 1 and half years",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Graphics Designer",
    location: "Trifecta Dg Media",
    description:
      "I worked as a graphics designer there.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Game Developer",
    location: "Sigma Labs",
    description:
      "Responsible for full development cycle of the 2d game for nft platform, designing  concept art for the game and creating sprites for games.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Game Artist and Animatior",
    location: "Ochrebyte",
    description:
      "Responsible for designing lottery tickets for the lottery game, and overall visual aspects of the game.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "Connect Dots",
    description:
      "A game highly inspired by brain dots with some educational contents.",
    tags: ["C#", "Unity", "Draw Game"],
    imageUrl: connecttdImg,
  },
  {
    title: "Punch The Face",
    description:
      "An action boxing game evolved into superhero game for kids with educational content",
    tags: ["C#", "Unity", "RiggingAnimation"],
    imageUrl: punchtfImg,
  },
  {
    title: "Letter Shooter",
    description:
      "",
    tags: ["C#", "Unity"],
    imageUrl: lettershooterImg,
  },
] as const;

export const skillsData = [
  "C#",
  "SFX",
  "Unity Game Engine",
  "Video Game Development",
  "Video Game Design",
  "Photoshop",
  "Illustrator",
  "Indesign",
  "Figma",
  "2D Graphics",
  "Krita",
] as const;
