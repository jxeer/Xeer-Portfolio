import { useReducedMotion } from "@/hooks/useReducedMotion";
import robotVideo from "@assets/robo_1761797761018.webm";

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
        <video
          src={robotVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
          style={{ 
            filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))"
          }}
        />
      </div>
    </div>
  );
}
