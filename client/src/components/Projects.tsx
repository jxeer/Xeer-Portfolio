import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const currentProject = projects[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-gradient-to-br from-brand-purple via-brand-indigo to-blue-600 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
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
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
              data-testid={`container-project-${currentProject.id}`}
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <div className="text-white/20 text-center">
                  <div className="text-6xl font-bold mb-4">
                    {currentProject.title}
                  </div>
                  <div className="text-2xl">Project Screenshot Placeholder</div>
                </div>
              </div>

              <div className="space-y-6">
                <h3
                  className="text-3xl md:text-4xl font-display font-bold text-white"
                  data-testid={`text-project-title-${currentProject.id}`}
                >
                  {currentProject.title}
                </h3>

                <p
                  className="text-lg text-white/90 leading-relaxed"
                  data-testid={`text-project-description-${currentProject.id}`}
                >
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-3 py-1"
                      data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                    data-testid={`button-github-${currentProject.id}`}
                    asChild
                  >
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              data-testid="button-project-prev"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  data-testid={`button-project-dot-${index}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              data-testid="button-project-next"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
