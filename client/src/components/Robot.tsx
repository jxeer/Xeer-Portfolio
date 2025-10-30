import { lazy, Suspense, useState, useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Lottie = lazy(() => import("lottie-react"));

// Fallback SVG robot
const FallbackRobot = ({ animate }: { animate: boolean }) => (
  <div
    className={`relative w-[400px] h-[400px] ${
      animate ? "" : "animate-float"
    }`}
  >
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient
          id="robotGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4b5bdc" />
          <stop offset="100%" stopColor="#6a31d9" />
        </linearGradient>
      </defs>
      <rect
        x="100"
        y="80"
        width="200"
        height="240"
        rx="24"
        fill="url(#robotGradient)"
        className="drop-shadow-2xl"
      />
      <circle
        cx="180"
        cy="150"
        r="8"
        fill="#60a5fa"
        className={animate ? "" : "animate-blink"}
      />
      <circle
        cx="220"
        cy="150"
        r="8"
        fill="#60a5fa"
        className={animate ? "" : "animate-blink"}
      />
      <ellipse
        cx="200"
        cy="260"
        rx="30"
        ry="8"
        fill="#4b5bdc"
        opacity="0.3"
      />
      <rect x="80" y="120" width="30" height="80" rx="8" fill="#4b5bdc" />
      <rect x="290" y="120" width="30" height="80" rx="8" fill="#4b5bdc" />
      <rect x="120" y="330" width="60" height="40" rx="8" fill="#4b5bdc" />
      <rect x="220" y="330" width="60" height="40" rx="8" fill="#4b5bdc" />
    </svg>
  </div>
);

function LottieAnimation({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Lazy load the animation data
    fetch("/robot-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => setError(true));
  }, []);

  if (error || !animationData) {
    return <FallbackRobot animate={prefersReducedMotion} />;
  }

  return (
    <Suspense fallback={<FallbackRobot animate={prefersReducedMotion} />}>
      <div className="w-[400px] h-[400px]">
        <Lottie
          animationData={animationData}
          loop={!prefersReducedMotion}
          autoplay={!prefersReducedMotion}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Suspense>
  );
}

export default function Robot() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Suspense fallback={<FallbackRobot animate={prefersReducedMotion} />}>
        <LottieAnimation prefersReducedMotion={prefersReducedMotion} />
      </Suspense>
    </div>
  );
}
