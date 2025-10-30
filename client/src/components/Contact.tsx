import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const contactLinks = [
    {
      id: "linkedin",
      icon: Linkedin,
      href: "https://linkedin.com/in/julianxeer",
      label: "LinkedIn",
      ariaLabel: "Connect on LinkedIn",
    },
    {
      id: "email",
      icon: Mail,
      href: "mailto:julian@example.com",
      label: "Email",
      ariaLabel: "Send an email",
    },
    {
      id: "github",
      icon: Github,
      href: "https://github.com/julianxeer",
      label: "GitHub",
      ariaLabel: "View GitHub profile",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-brand-indigo to-brand-purple relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
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
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            data-testid="text-contact-heading"
          >
            Let's Connect
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0 }}
                animate={
                  prefersReducedMotion
                    ? {}
                    : isInView
                    ? { opacity: 1, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                data-testid={`link-contact-${link.id}`}
                aria-label={link.ariaLabel}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                
                <div className="relative bg-white rounded-full w-28 h-28 md:w-32 md:h-32 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] group-hover:ring-4 group-hover:ring-white/30">
                  <Icon className="h-12 w-12 md:h-14 md:w-14 text-brand-indigo group-hover:text-brand-purple transition-colors duration-300" />
                </div>

                <div className="mt-4 text-center">
                  <span className="text-white font-semibold text-lg">
                    {link.label}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
