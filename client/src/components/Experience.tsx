import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { timelineEvents } from "@/data/timeline";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-gradient-to-br from-brand-cyan via-cyan-500 to-blue-500"
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
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
            data-testid="text-experience-heading"
          >
            Experience
          </h2>
          <p className="text-xl text-slate-800 max-w-2xl mx-auto">
            My journey through technology and development
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute top-[88px] left-0 right-0 h-1 bg-slate-800/30" />

              <div className="grid grid-cols-6 gap-6 relative z-10">
                {timelineEvents.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <motion.div
                      key={event.id}
                      initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
                      animate={
                        prefersReducedMotion
                          ? {}
                          : isInView
                          ? { opacity: 1, y: 0 }
                          : {}
                      }
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="flex flex-col items-center text-center"
                      data-testid={`container-timeline-${event.id}`}
                    >
                      <div className="bg-slate-900 rounded-full w-16 h-16 flex items-center justify-center shadow-xl border-4 border-brand-cyan relative z-20">
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <div className="text-xl font-bold text-slate-900 mt-3 relative z-20"
                        data-testid={`text-year-${event.id}`}
                      >
                        {event.year}
                      </div>

                      <div className="mt-12 space-y-2">
                        <div
                          className="text-base font-semibold text-slate-800"
                          data-testid={`text-title-${event.id}`}
                        >
                          {event.title}
                        </div>

                        <p
                          className="text-xs text-slate-700 leading-relaxed"
                          data-testid={`text-description-${event.id}`}
                        >
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.id}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : isInView
                      ? { opacity: 1, x: 0 }
                      : {}
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-6"
                  data-testid={`container-timeline-mobile-${event.id}`}
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-slate-900 rounded-full w-12 h-12 flex items-center justify-center shadow-xl border-4 border-brand-cyan flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="w-1 flex-1 bg-slate-800/30 mt-2" />
                    )}
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="space-y-2 mb-3">
                      <div className="text-xl font-bold text-slate-900">
                        {event.year} | {event.title}
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
