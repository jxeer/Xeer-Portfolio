import { useReducedMotion } from "@/hooks/useReducedMotion";
import robotImage from "@assets/generated_images/Professional_robot_at_desk_d5475fcc.png";

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
          alt="Robot sitting at desk typing on laptop"
          className="w-full h-auto"
          style={{ filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))" }}
        />
      </div>
    </div>
  );
}
