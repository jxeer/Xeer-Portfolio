import { useReducedMotion } from "@/hooks/useReducedMotion";
import robotVideoWebM from "@assets/robo_1761797761018.webm";
import robotVideoProRes from "@assets/robo_prores.mov";

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
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
          style={{ 
            filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))"
          }}
        >
          <source src={robotVideoProRes} type='video/quicktime; codecs="ap4h"' />
          <source src={robotVideoWebM} type="video/webm" />
        </video>
      </div>
    </div>
  );
}
