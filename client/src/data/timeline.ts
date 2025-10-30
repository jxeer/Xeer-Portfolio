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
    id: "born",
    year: "1993",
    title: "Born",
    description: "Born somewhere in Brazil a few days ago.",
    icon: Star,
  },
  {
    id: "web-design",
    year: "2004",
    title: "Web Design",
    description:
      "My first contact with technology. A 1-year course focused on HTML 4, Dreamweaver, Fireworks, FrontPage, and other technologies that no longer exist. \\o/",
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
