import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Robot() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className={`relative w-[400px] h-[400px] ${
          prefersReducedMotion ? "" : "animate-float"
        }`}
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label="Animated robot illustration"
        >
          <g className="robot-body">
            <ellipse
              cx="200"
              cy="220"
              rx="80"
              ry="100"
              fill="url(#robotGradient)"
              className="drop-shadow-2xl"
            />
            
            <circle
              cx="200"
              cy="160"
              r="60"
              fill="url(#robotGradient)"
              className="drop-shadow-2xl"
            />
            
            <circle
              cx="180"
              cy="150"
              r="8"
              fill="#60a5fa"
              className={prefersReducedMotion ? "" : "animate-blink"}
            />
            <circle
              cx="220"
              cy="150"
              r="8"
              fill="#60a5fa"
              className={prefersReducedMotion ? "" : "animate-blink"}
            />
            
            <ellipse
              cx="200"
              cy="260"
              rx="25"
              ry="10"
              fill="#334155"
              opacity="0.3"
            />
            
            <rect
              x="160"
              y="280"
              width="35"
              height="60"
              rx="15"
              fill="url(#robotGradient)"
              className="drop-shadow-lg"
            />
            <rect
              x="205"
              y="280"
              width="35"
              height="60"
              rx="15"
              fill="url(#robotGradient)"
              className="drop-shadow-lg"
            />
            
            <rect
              x="120"
              y="200"
              width="20"
              height="70"
              rx="10"
              fill="url(#robotGradient)"
              className="drop-shadow-lg"
            />
            <rect
              x="260"
              y="200"
              width="20"
              height="70"
              rx="10"
              fill="url(#robotGradient)"
              className="drop-shadow-lg"
            />
            
            <circle
              cx="200"
              cy="120"
              r="25"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3"
              opacity="0.5"
            />
          </g>

          <defs>
            <linearGradient
              id="robotGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
