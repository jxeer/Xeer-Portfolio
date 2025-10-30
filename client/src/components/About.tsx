import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import profileImage from "@assets/selfie-icon_1761795041032.jpg";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white dark:bg-slate-950"
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
                I'm Julian Xeer, a full stack developer and computer engineer based
                in São Paulo, Brazil.
              </p>

              <p data-testid="text-about-experience">
                I have been working in software development for web, desktop, and
                embedded systems for the last 13 years.
              </p>

              <p data-testid="text-about-background">
                During this time, I have worked on systems across various business
                sectors, but I have spent most of this time developing web and
                embedded applications for civil aviation.
              </p>

              <p data-testid="text-about-education">
                I graduated with a degree in Computer Engineering from UFABC in
                2016. My journey into the world of programming began in childhood,
                driven by a keen interest in game development. This early passion for
                creating games sparked my pursuit of a tech career. Although I don't
                work as a game developer, I occasionally participate in game jams.
              </p>

              <p data-testid="text-about-philosophy">
                My focus is always on seeking solutions to challenges through
                technology. It doesn't matter if the challenge comes from an
                individual or a company. It doesn't matter if the solution will be
                hardware or software.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
