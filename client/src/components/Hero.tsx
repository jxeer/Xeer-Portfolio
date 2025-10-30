import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Robot from "./Robot";
import SectionArrow from "./SectionArrow";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.5;

  const handleViewProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-visible"
      role="banner"
    >
      <div
        className="absolute inset-0 bg-black"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgb(139, 92, 246) 0%, transparent 40%)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 60%, rgb(190, 24, 93) 0%, transparent 35%)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 80%, rgb(126, 34, 206) 0%, transparent 30%)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-black/70"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      <div className="container mx-auto px-6 py-24 lg:py-0 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 pb-16 lg:pb-0 text-center lg:text-left">
            <div className="hidden md:inline-block">
              <code
                className="text-cyan-400 text-sm font-mono bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md border border-white/20"
                data-testid="text-welcome-label"
              >
                $. /welcome
              </code>
            </div>

            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
                data-testid="text-hero-title"
              >
                Hi, I'm <span className="whitespace-nowrap">Julian Xeer</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-display font-medium">
                Full Stack Developer
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleViewProjects}
                size="lg"
                className="bg-white text-purple-900 hover:bg-white/90 font-semibold px-8 hover-elevate active-elevate-2"
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleContact}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-semibold px-8"
                data-testid="button-contact"
              >
                Contact
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Robot />
          </div>
        </div>
      </div>

      <SectionArrow targetSection="#about" />
    </section>
  );
}
