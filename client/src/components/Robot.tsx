import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Robot() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className={`relative w-full max-w-[500px] ${
          prefersReducedMotion ? "" : "animate-float"
        }`}
      >
        <img
          src="/attached_assets/Screenshot 2025-10-29 at 10.43.05 PM_1761792196606.png"
          alt="Robot sitting at desk typing on laptop"
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
