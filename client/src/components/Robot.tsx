import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useState, useEffect } from "react";
import robotVideoWebM from "@assets/robo_1761797761018.webm";
import robotStaticPNG from "@assets/robo_static.png";

export default function Robot() {
  const prefersReducedMotion = useReducedMotion();
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);
    console.log("User Agent:", userAgent);
    console.log("Is Safari:", isSafariBrowser);
    setIsSafari(isSafariBrowser);
  }, []);

  console.log("Rendering with isSafari:", isSafari);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className={`relative w-full max-w-[500px] ${
          prefersReducedMotion ? "" : "animate-float"
        }`}
        data-testid="robot-animation"
      >
        {isSafari ? (
          <img
            src={robotStaticPNG}
            alt="Robot developer"
            className="w-full h-auto"
            style={{ 
              filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))"
            }}
            data-testid="robot-image-safari"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            style={{ 
              filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))"
            }}
            data-testid="robot-video"
          >
            <source src={robotVideoWebM} type="video/webm" />
          </video>
        )}
      </div>
    </div>
  );
}
