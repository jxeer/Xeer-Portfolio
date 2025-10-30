import { useReducedMotion } from "@/hooks/useReducedMotion";
import Lottie from "lottie-react";
import robotAnimation from "@/assets/animations/robot-typing.json";

export default function Robot() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className={`relative w-full max-w-[600px] ${
          prefersReducedMotion ? "" : "animate-float"
        }`}
        data-testid="robot-animation"
      >
        <Lottie
          animationData={robotAnimation}
          loop={true}
          autoplay={!prefersReducedMotion}
          style={{
            width: "600px",
            height: "600px",
            filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))",
          }}
        />
      </div>
    </div>
  );
}
