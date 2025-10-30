import { useReducedMotion } from "@/hooks/useReducedMotion";

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
        <svg
          viewBox="0 0 400 500"
          className="w-full h-auto"
          style={{ filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))" }}
        >
          {/* Desk */}
          <g>
            <rect x="50" y="350" width="300" height="15" fill="#4a5568" rx="5" />
            <rect x="65" y="365" width="10" height="100" fill="#2d3748" />
            <rect x="325" y="365" width="10" height="100" fill="#2d3748" />
          </g>

          {/* Laptop */}
          <g>
            <rect x="120" y="320" width="160" height="8" fill="#2d3748" rx="2" />
            <rect x="130" y="280" width="140" height="40" fill="#1a202c" rx="3" />
            <rect x="135" y="285" width="130" height="30" fill="#0ea5e9" opacity="0.3" />
          </g>

          {/* Robot Body */}
          <g>
            {/* Torso */}
            <rect x="150" y="200" width="100" height="120" fill="#e2e8f0" rx="15" />
            
            {/* Head */}
            <rect x="160" y="130" width="80" height="70" fill="#f1f5f9" rx="12">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 200 165"
                to="-5 200 165"
                dur="2s"
                repeatCount="indefinite"
                additive="sum"
              />
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="-5 200 165"
                to="5 200 165"
                begin="2s"
                dur="2s"
                repeatCount="indefinite"
                additive="sum"
              />
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="5 200 165"
                to="0 200 165"
                begin="4s"
                dur="2s"
                repeatCount="indefinite"
                additive="sum"
              />
            </rect>

            {/* Antenna */}
            <line x1="200" y1="130" x2="200" y2="110" stroke="#94a3b8" strokeWidth="3" />
            <circle cx="200" cy="105" r="5" fill="#0ea5e9">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Left Eye */}
            <circle cx="180" cy="155" r="10" fill="#0ea5e9">
              <animate
                attributeName="r"
                values="10;10;2;10"
                dur="5s"
                repeatCount="indefinite"
                keyTimes="0;0.4;0.5;1"
              />
            </circle>

            {/* Right Eye */}
            <circle cx="220" cy="155" r="10" fill="#0ea5e9">
              <animate
                attributeName="r"
                values="10;10;2;10"
                dur="5s"
                repeatCount="indefinite"
                keyTimes="0;0.4;0.5;1"
              />
            </circle>

            {/* Smile */}
            <path
              d="M 185 175 Q 200 185 215 175"
              fill="none"
              stroke="#64748b"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Left Arm */}
            <g>
              <rect x="130" y="230" width="20" height="60" fill="#cbd5e1" rx="8">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 140 230"
                  to="-20 140 230"
                  dur="1s"
                  repeatCount="indefinite"
                  additive="sum"
                />
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="-20 140 230"
                  to="0 140 230"
                  begin="1s"
                  dur="1s"
                  repeatCount="indefinite"
                  additive="sum"
                />
              </rect>
              {/* Hand */}
              <circle cx="140" cy="300" r="12" fill="#94a3b8">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  from="0 0"
                  to="-5 15"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  from="-5 15"
                  to="0 0"
                  begin="1s"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Right Arm */}
            <g>
              <rect x="250" y="230" width="20" height="60" fill="#cbd5e1" rx="8">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 260 230"
                  to="20 260 230"
                  dur="1s"
                  repeatCount="indefinite"
                  additive="sum"
                />
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="20 260 230"
                  to="0 260 230"
                  begin="1s"
                  dur="1s"
                  repeatCount="indefinite"
                  additive="sum"
                />
              </rect>
              {/* Hand */}
              <circle cx="260" cy="300" r="12" fill="#94a3b8">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  from="0 0"
                  to="5 15"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  from="5 15"
                  to="0 0"
                  begin="1s"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Accent Circles on Body */}
            <circle cx="200" cy="240" r="6" fill="#0ea5e9" />
            <circle cx="200" cy="270" r="6" fill="#0ea5e9" />
            <circle cx="200" cy="300" r="6" fill="#0ea5e9" />
          </g>
        </svg>
      </div>
    </div>
  );
}
