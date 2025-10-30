import { useReducedMotion } from "@/hooks/useReducedMotion";
import robotVideoWebM from "@assets/robo_1761797761018.webm";
import robotVideoHEVC from "@assets/robo_1761801209868.mov";

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
          <source src={robotVideoHEVC} type='video/mp4; codecs="hvc1"' />
          <source src={robotVideoWebM} type="video/webm" />
        </video>
      </div>
    </div>
  );
}
