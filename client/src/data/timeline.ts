import { Star, GraduationCap, Gamepad2, Code2, Briefcase, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "bootcamp",
    year: "2019",
    title: "Coding Bootcamp",
    description: "I attended the Winter Web Development Intensive, learning both front-end Javascript and React development, and backend SQL, PostGreSQL and Ruby-on-Rails. It was an immersive and life-changing experience",
    icon: Code2,
  },
  {
    id: "web-design",
    year: "2019",
    title: "Wakeful",
    description:
      "Lead front-end development for a social media startup called Wakeful, whose mission was to connect holistic healing practitioners to clients and bring together alternative spiritual communities.",
    icon: GraduationCap,
  },
  {
    id: "game-dev",
    year: "2009",
    title: "Enthusiastic game dev",
    description:
      "I had my first experience with game dev building browser strike maps and servers.",
    icon: Gamepad2,
  },
  {
    id: "hardware",
    year: "2011",
    title: "Hardware",
    description:
      "I studied in a technical course from the time when motherboards × parallel interface port.",
    icon: Cpu,
  },
  {
    id: "graduation",
    year: "2016",
    title: "Graduation",
    description:
      "Graduated with a degree in Computer Engineering from UFABC, turning childhood passion into professional expertise.",
    icon: GraduationCap,
  },
  {
    id: "professional",
    year: "2023",
    title: "Full Stack Developer",
    description:
      "Working on complex web and embedded applications for civil aviation with 13 years of experience.",
    icon: Code2,
  },
];
