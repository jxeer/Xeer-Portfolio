import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Robot from "./Robot";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgb(139, 92, 246) 0%, rgb(126, 34, 206) 15%, rgb(88, 28, 135) 30%, rgb(17, 24, 39) 50%, rgb(190, 24, 93) 70%, rgb(136, 19, 55) 85%, rgb(17, 24, 39) 100%)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/40 to-black/90"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
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
                Hi, I'm Julian Xeer
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-display font-medium">
                Full Stack Developer
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
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

          <div className="hidden lg:flex items-center justify-center">
            <Robot />
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
          prefersReducedMotion ? "" : "animate-bounce"
        }`}
        data-testid="icon-scroll-indicator"
      >
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
}
