import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories, skills } from "@/data/skills";
import { Card } from "@/components/ui/card";
import { Code } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  csharp: Code,
  dotnet: Code,
  java: Code,
  nodejs: Code,
  typescript: Code,
  php: Code,
  sqlserver: Code,
  mysql: Code,
  postgresql: Code,
  mongodb: Code,
};

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<string>("backend");
  const prefersReducedMotion = useReducedMotion();

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <section
      id="expertise"
      className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 80 }}
          animate={
            prefersReducedMotion
              ? {}
              : isInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            data-testid="text-expertise-heading"
          >
            Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -80 }}
            animate={
              prefersReducedMotion
                ? {}
                : isInView
                ? { opacity: 1, x: 0 }
                : {}
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-3"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : isInView
                      ? { opacity: 1, y: 0 }
                      : {}
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  data-testid={`button-category-${category.id}`}
                  className={`w-full flex items-center gap-4 p-6 rounded-2xl transition-all hover-elevate active-elevate-2 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-brand-teal to-brand-cyan text-white shadow-xl"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-8 w-8 flex-shrink-0" />
                  <span className="text-lg font-semibold">{category.title}</span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 80 }}
            animate={
              prefersReducedMotion
                ? {}
                : isInView
                ? { opacity: 1, x: 0 }
                : {}
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-9"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSkills.map((skill, index) => {
                const SkillIcon = iconMap[skill.icon];
                return (
                  <motion.div
                    key={skill.id}
                    initial={
                      prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }
                    }
                    animate={
                      prefersReducedMotion
                        ? {}
                        : isInView
                        ? { opacity: 1, scale: 1 }
                        : {}
                    }
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  >
                    <Card
                      className="bg-white dark:bg-slate-800 p-6 flex flex-col items-center justify-center gap-4 h-32 transition-all hover:-translate-y-2 hover:shadow-xl hover:ring-1 hover:ring-white/10 cursor-default"
                      data-testid={`card-skill-${skill.id}`}
                    >
                      {SkillIcon && (
                        <SkillIcon className="h-10 w-10 text-brand-indigo dark:text-brand-cyan" />
                      )}
                      <span className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                        {skill.title}
                      </span>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
