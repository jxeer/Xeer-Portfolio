import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Github, Search, X } from "lucide-react";
import SectionArrow from "./SectionArrow";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import harmoniaScreenshot from "@assets/harmonia-screenshot_1761861772344.png";
import mattereumScreenshot from "@assets/mattereum-screenshot_1761860021348.png";
import coral8Screenshot from "@assets/coral8-screenshot_1761860913526.png";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const prefersReducedMotion = useReducedMotion();

  // Get all unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects based on search and tags
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Tag filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((selectedTag) =>
          project.tags.includes(selectedTag)
        );

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  // Reset to first project when filtered list changes and currentIndex is out of bounds
  useEffect(() => {
    if (filteredProjects.length > 0 && currentIndex >= filteredProjects.length) {
      setCurrentIndex(0);
    }
  }, [filteredProjects.length, currentIndex]);

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentIndex(0);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setCurrentIndex(0);
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 relative overflow-visible"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/60" />

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
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            A selection of my recent work
          </p>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input
                type="text"
                placeholder="Search projects by title, description, or technology..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentIndex(0);
                }}
                data-testid="input-project-search"
                className="pl-12 pr-4 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/50 text-base"
              />
            </div>

            {/* Technology Filter Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  data-testid={`badge-filter-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`cursor-pointer px-3 py-1 transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-white text-purple-900 hover:bg-white/90"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Filter Summary */}
            {(searchQuery || selectedTags.length > 0) && (
              <div className="flex items-center justify-center gap-4 text-white/90">
                <span className="text-sm">
                  Showing {filteredProjects.length} of {projects.length}{" "}
                  projects
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  data-testid="button-clear-filters"
                  className="text-white hover:bg-white/10"
                >
                  <X className="mr-1 h-4 w-4" />
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <>
            <div className="max-w-7xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentIndex}-${filteredProjects[currentIndex]?.id}`}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? {} : { opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
                  data-testid={`container-project-${currentProject.id}`}
                >
                  <div className="rounded-2xl overflow-hidden bg-white shadow-2xl">
                    {currentProject.id === "arcade-atlas" && (
                      <img
                        src={harmoniaScreenshot}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-project-${currentProject.id}`}
                      />
                    )}
                    {currentProject.id === "weather-track" && (
                      <img
                        src={mattereumScreenshot}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-project-${currentProject.id}`}
                      />
                    )}
                    {currentProject.id === "chat" && (
                      <img
                        src={coral8Screenshot}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-project-${currentProject.id}`}
                      />
                    )}
                    {currentProject.id !== "arcade-atlas" && currentProject.id !== "weather-track" && currentProject.id !== "chat" && (
                      <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 flex items-center justify-center min-h-[400px]">
                        <div className="text-white/20 text-center">
                          <div className="text-6xl font-bold mb-4">
                            {currentProject.title}
                          </div>
                          <div className="text-2xl">
                            Project Screenshot Placeholder
                          </div>
                        </div>
                      </div>
                    )}
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

              {filteredProjects.length > 1 && (
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
                    {filteredProjects.map((_, index) => (
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
              )}
            </div>
          </>
        ) : (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-2xl text-white/70" data-testid="text-no-results">
              No projects match your search criteria
            </p>
            <Button
              onClick={clearFilters}
              variant="outline"
              className="mt-6 border-white/30 text-white hover:bg-white/10"
              data-testid="button-clear-filters-empty"
            >
              Clear filters
            </Button>
          </motion.div>
        )}
      </div>
      <SectionArrow targetSection="#experience" />
    </section>
  );
}
