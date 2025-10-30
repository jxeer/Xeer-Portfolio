import { useReducedMotion } from "@/hooks/useReducedMotion";
import robotImage from "@assets/pngtree-robot-typing-on-a-laptop-with-transparent-background-png-image_15146795_1761795228759.png";

export default function Robot() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className={`relative w-full max-w-[500px] ${
          prefersReducedMotion ? "" : "animate-float"
        }`}
        data-testid="robot-animation"
      >
        <img
          src={robotImage}
          alt="Robot typing on laptop"
          className="w-full h-auto"
          style={{ 
            filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))"
          }}
        />
      </div>
    </div>
  );
}
