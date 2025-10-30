import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SectionArrow from "./SectionArrow";
import profileImage from "@assets/selfie-icon_1761795041032.jpg";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-white dark:bg-slate-950"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 80 }}
          animate={
            prefersReducedMotion
              ? {}
              : isInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal to-brand-purple rounded-2xl blur-xl opacity-20" />
              <img
                src={profileImage}
                alt="Julian Xeer portrait"
                className="relative w-80 h-80 object-cover rounded-2xl border-2 border-white/10 shadow-2xl"
                data-testid="img-profile"
              />
            </div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 80 }}
            animate={
              prefersReducedMotion
                ? {}
                : isInView
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white"
              data-testid="text-about-heading"
            >
              About me
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p data-testid="text-about-intro">
                I'm Julian Xeer, a full stack developer and creative technologist based
                in New York City.
              </p>

              <p data-testid="text-about-experience">
                I enjoy working on high-impact projects that I believe will shape the
                future of the web and the world.
              </p>

              <p data-testid="text-about-background">
                I love creating digital platforms for artists, musicians, non-profits, educators, small businesses, and spiritual practitioners—helping people and organizations share their message with the world. 
              </p>

              <p data-testid="text-about-education">
                Blending design, storytelling, and technology, I can turn ideas into meaningful digital experiences that empower communities and support social change and holistic evolution.


              </p>

              <p data-testid="text-about-philosophy">
                Whether architecting inclusive user interfaces, integrating data-driven tools for nonprofit operations, or leading cross-functional Web3   teams toward mission-aligned outcomes, Julian brings both creative vision and executional rigor to build technology that empowers communities and elevates the user experience.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <SectionArrow targetSection="#expertise" variant="light" />
    </section>
  );
}
