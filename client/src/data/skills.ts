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
  { id: "typescript", title: "TypeScript", category: "frontend", icon: "typescript" },
  { id: "php", title: "PHP", category: "backend", icon: "php" },
  { id: "sqlserver", title: "SQL Server", category: "backend", icon: "sqlserver" },
  { id: "mysql", title: "MySQL", category: "backend", icon: "mysql" },
  { id: "postgresql", title: "PostgreSQL", category: "backend", icon: "postgresql" },
  { id: "mongodb", title: "MongoDB", category: "backend", icon: "mongodb" },
];
