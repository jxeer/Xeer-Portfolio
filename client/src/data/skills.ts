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
    icon: Server,
  },
  {
    id: "frontend",
    title: "Front-end",
    icon: Paintbrush,
  },
  {
    id: "devops",
    title: "DevOps",
    icon: Code2,
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: Cpu,
  },
];

export const skills: Skill[] = [
  { id: "csharp", title: "C#", category: "backend", icon: "csharp" },
  { id: "dotnet", title: ".NET", category: "backend", icon: "dotnet" },
  { id: "java", title: "Java", category: "backend", icon: "java" },
  { id: "nodejs", title: "Node.JS", category: "backend", icon: "nodejs" },
  { id: "php", title: "PHP", category: "backend", icon: "php" },
  
  { id: "typescript", title: "TypeScript", category: "frontend", icon: "typescript" },
  { id: "react", title: "React", category: "frontend", icon: "typescript" },
  { id: "vue", title: "Vue.js", category: "frontend", icon: "typescript" },
  { id: "tailwind", title: "Tailwind CSS", category: "frontend", icon: "typescript" },
  
  { id: "docker", title: "Docker", category: "devops", icon: "typescript" },
  { id: "kubernetes", title: "Kubernetes", category: "devops", icon: "typescript" },
  { id: "aws", title: "AWS", category: "devops", icon: "typescript" },
  { id: "cicd", title: "CI/CD", category: "devops", icon: "typescript" },
  
  { id: "sqlserver", title: "SQL Server", category: "engineering", icon: "sqlserver" },
  { id: "mysql", title: "MySQL", category: "engineering", icon: "mysql" },
  { id: "postgresql", title: "PostgreSQL", category: "engineering", icon: "postgresql" },
  { id: "mongodb", title: "MongoDB", category: "engineering", icon: "mongodb" },
];
