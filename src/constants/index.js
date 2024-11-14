import { FaReact, FaNodeJs, FaPython, FaDocker, FaGit } from "react-icons/fa";
import {
  SiFlutter,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import myPort from "/images/myportfolio.png";

export const navLinks = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/jansenloman" },
  { name: "Email", url: "mailto:jansenloman28@gmail.com" },
];

export const skills = [
  { icon: FaReact, name: "React.js", level: 85 },
  { icon: SiFlutter, name: "Flutter", level: 80 },
  { icon: SiJavascript, name: "JavaScript", level: 90 },
  { icon: FaNodeJs, name: "Node.js", level: 75 },
  { icon: FaPython, name: "Python", level: 70 },
  { icon: SiTailwindcss, name: "Tailwind CSS", level: 85 },
  { icon: FaDocker, name: "Docker", level: 65 },
  { icon: SiFirebase, name: "Firebase", level: 75 },
  { icon: FaGit, name: "Git", level: 85 },
];

export const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS",
    image: myPort,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/jansenloman/portfolio",
    demo: "https://jansenloman.vercel.app",
  },
  // Tambahkan proyek lainnya di sini
];
