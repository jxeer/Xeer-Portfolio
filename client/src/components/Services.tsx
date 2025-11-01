import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { services } from "@/data/services";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import SectionArrow from "./SectionArrow";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SERVICES_PER_PAGE = 6;

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(services.length / SERVICES_PER_PAGE);
  const startIndex = (currentPage - 1) * SERVICES_PER_PAGE;
  const endIndex = startIndex + SERVICES_PER_PAGE;
  const currentServices = services.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-visible"
      style={{
        background: "linear-gradient(to bottom, rgb(2 6 23), rgb(15 23 42))",
      }}
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
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            data-testid="text-services-heading"
          >
            Freelance Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Insights on web development, best practices, and tech trends
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {currentServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
              animate={
                prefersReducedMotion
                  ? {}
                  : isInView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              data-testid={`card-service-${service.id}`}
            >
              <Card className="h-full flex flex-col overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="p-6 flex flex-col flex-1">
                  <h3 
                    className="text-xl font-display font-bold text-white mb-3 line-clamp-2"
                    data-testid={`text-service-title-${service.id}`}
                  >
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-cyan-400 mb-4">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-medium">{service.priceRange}</span>
                  </div>

                  <p className="text-gray-400 mb-4 flex-1 line-clamp-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {service.targetClients.map((client) => (
                      <Badge
                        key={client}
                        variant="secondary"
                        className="text-xs bg-white/10 text-gray-300 border-white/20 hover:bg-white/20"
                        data-testid={`badge-client-${client.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {client}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={
              prefersReducedMotion
                ? {}
                : isInView
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <Button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              variant="outline"
              size="icon"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              data-testid="button-services-prev"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      document
                        .querySelector("#services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    className={
                      currentPage === page
                        ? "w-10 h-10 bg-cyan-500 hover:bg-cyan-600 text-white"
                        : "w-10 h-10 bg-white/5 border-white/10 text-white hover:bg-white/10"
                    }
                    data-testid={`button-page-${page}`}
                  >
                    {page}
                  </Button>
                )
              )}
            </div>

            <Button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              variant="outline"
              size="icon"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              data-testid="button-services-next"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        )}

        {totalPages > 1 && (
          <div className="text-center mt-8 text-sm text-gray-400">
            Page {currentPage} of {totalPages} ({services.length} services total)
          </div>
        )}
      </div>
      <SectionArrow targetSection="#contact" variant="dark" />
    </section>
  );
}
