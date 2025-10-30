import { Code2, Paintbrush, Server, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface Skill {
  id: string;
  title: string;
  category: string;
  icon: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Back-end",
    icon: Code2,
  },
  {
    id: "frontend",
    title: "Front-end",
    icon: Code2,
  },
  {
    id: "devops",
    title: "DevOps",
    icon: Code2,
  },
  {
    id: "web3",
    title: "Web3",
    icon: Code2,
  },
];

export const skills: Skill[] = [
  { id: "nodejs", title: "Node.js", category: "backend", icon: "nodejs" },
  { id: "mysql", title: "MySQL", category: "backend", icon: "mysql" },
  { id: "postgresql", title: "PostgreSQL", category: "backend", icon: "postgresql" },
  { id: "ruby", title: "Ruby", category: "backend", icon: "ruby" },
  { id: "rails", title: "Ruby-on-Rails", category: "backend", icon: "ruby" },
  
  { id: "html", title: "HTML", category: "frontend", icon: "html" },
  { id: "css", title: "CSS", category: "frontend", icon: "css" },
  { id: "javascript", title: "Javascript", category: "frontend", icon: "javascript" },
  { id: "react", title: "React", category: "frontend", icon: "react" },
  { id: "typescript", title: "Typescript", category: "frontend", icon: "typescript" },
  { id: "tailwind", title: "Tailwind CSS", category: "frontend", icon: "tailwind" },
  
  { id: "aws", title: "AWS", category: "devops", icon: "aws" },
  { id: "cicd", title: "CI/CD", category: "devops", icon: "cicd" },
  { id: "docker", title: "Docker", category: "devops", icon: "docker" },
  
  { id: "solidity", title: "Solidity", category: "web3", icon: "solidity" },
];
