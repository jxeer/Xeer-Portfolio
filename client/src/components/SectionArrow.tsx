import { ArrowDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionArrowProps {
  targetSection: string;
  variant?: "light" | "dark";
}

export default function SectionArrow({ targetSection, variant = "dark" }: SectionArrowProps) {
  const prefersReducedMotion = useReducedMotion();

  const handleClick = () => {
    const element = document.querySelector(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = variant === "dark";

  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <button
        onClick={handleClick}
        className={`cursor-pointer backdrop-blur-sm border-none p-3 rounded-full transition-all pointer-events-auto ${
          isDark 
            ? "bg-white/10 hover:bg-white/20" 
            : "bg-gray-900/10 dark:bg-white/10 hover:bg-gray-900/20 dark:hover:bg-white/20"
        } ${prefersReducedMotion ? "" : "animate-bounce"}`}
        data-testid={`button-scroll-to-${targetSection.replace('#', '')}`}
        aria-label={`Scroll to ${targetSection.replace('#', '')} section`}
      >
        <ArrowDown className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-900 dark:text-white"}`} />
      </button>
    </div>
  );
}
