import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { blogPosts } from "@/data/blog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      document.querySelector("#blog")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      document.querySelector("#blog")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="blog"
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
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4"
            data-testid="text-blog-heading"
          >
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights on web development, best practices, and tech trends
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
              animate={
                prefersReducedMotion
                  ? {}
                  : isInView
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              data-testid={`card-blog-${post.id}`}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:shadow-xl">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 
                    className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 line-clamp-2"
                    data-testid={`text-blog-title-${post.id}`}
                  >
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-tag-${tag.toLowerCase()}`}
                      >
                        {tag}
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
              data-testid="button-blog-prev"
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
                        .querySelector("#blog")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    className="w-10 h-10"
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
              data-testid="button-blog-next"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        )}

        <div className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
          Page {currentPage} of {totalPages} ({blogPosts.length} articles total)
        </div>
      </div>
    </section>
  );
}
