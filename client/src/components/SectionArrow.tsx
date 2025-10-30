import { ArrowDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionArrowProps {
  targetSection: string;
}

export default function SectionArrow({ targetSection }: SectionArrowProps) {
  const prefersReducedMotion = useReducedMotion();

  const handleClick = () => {
    const element = document.querySelector(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer bg-transparent border-none p-2 hover-elevate rounded-full transition-all z-10 ${
        prefersReducedMotion ? "" : "animate-bounce"
      }`}
      data-testid={`button-scroll-to-${targetSection.replace('#', '')}`}
      aria-label={`Scroll to ${targetSection.replace('#', '')} section`}
    >
      <ArrowDown className="h-6 w-6 text-white/60" />
    </button>
  );
}
