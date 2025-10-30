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
    title: "General Assembly",
    description: "I attended the General Assembly Winter Web Development Intensive, learning both front-end Javascript and React development, and backend SQL, PostGreSQL and Ruby-on-Rails. It was an immersive and life-changing experience",
    icon: GraduationCap,
  },
  {
    id: "web-design",
    year: "2019",
    title: "Wakeful",
    description:
      "Lead front-end development for a social media startup called Wakeful, whose mission was to connect holistic healing practitioners to clients and bring together alternative spiritual communities.",
    icon: Cpu,
  },
  {
    id: "game-dev",
    year: "2020",
    title: "Freelance",
    description:
      "Built a mobile-responsive web app that streamed videos for an independent film company.",
    icon: Code2,
  },
  {
    id: "hardware",
    year: "2021",
    title: "Teachers Assistant",
    description:
      "Provided expert consultation for Javascript in both front-end and back-end development (node.js) for my code-bootcamp alma mater, General Assembly.",
    icon: Cpu,
  },
  {
    id: "graduation",
    year: "2022",
    title: "Mattereum",
    description:
      "I tested code using GitLab CI/CD, managed two crypto wallets and worked as Project Manager for a company whose mission is to facilitate buying and selling real world goods on the Blockchain.",
    icon: Cpu,
  },
  {
    id: "professional",
    year: "2025",
    title: "The Honor System",
    description:
      "As CTO, I oversaw the technical strategy and development roadmap for multiple start-up ventures under our parent company, and drove product innovation to ensure execution of technical deliverables.",
    icon: Code2,
  },
];
