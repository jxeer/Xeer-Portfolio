import { useReducedMotion } from "@/hooks/useReducedMotion";
import robotImage from "@assets/robot-at-desk.png";

export default function Robot() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className={`relative w-full max-w-[500px] ${
          prefersReducedMotion ? "" : "animate-float"
        }`}
      >
        <img
          src={robotImage}
          alt="Robot sitting at desk typing on laptop"
          className="w-full h-auto drop-shadow-2xl"
          data-testid="img-robot"
        />
      </div>
    </div>
  );
}
