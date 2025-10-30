export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "building-scalable-apps",
    title: "Building Scalable Web Applications with React and TypeScript",
    excerpt:
      "Explore best practices for building large-scale React applications with TypeScript, including component architecture, state management, and performance optimization.",
    content: "Full article content here...",
    date: "2024-03-15",
    tags: ["React", "TypeScript", "Architecture"],
    readTime: "8 min read",
  },
  {
    id: "mastering-tailwind",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt:
      "Learn advanced Tailwind CSS techniques to create beautiful, responsive designs faster. Includes custom configurations, plugins, and real-world examples.",
    content: "Full article content here...",
    date: "2024-03-01",
    tags: ["CSS", "Tailwind", "Design"],
    readTime: "6 min read",
  },
  {
    id: "microservices-nodejs",
    title: "Microservices Architecture with Node.js",
    excerpt:
      "A comprehensive guide to building microservices using Node.js, covering service communication, data management, and deployment strategies.",
    content: "Full article content here...",
    date: "2024-02-20",
    tags: ["Node.js", "Microservices", "Backend"],
    readTime: "12 min read",
  },
  {
    id: "postgresql-performance",
    title: "PostgreSQL Performance Tuning for Production",
    excerpt:
      "Optimize your PostgreSQL database for production workloads with these practical tips on indexing, query optimization, and configuration tuning.",
    content: "Full article content here...",
    date: "2024-02-05",
    tags: ["PostgreSQL", "Database", "Performance"],
    readTime: "10 min read",
  },
  {
    id: "ci-cd-best-practices",
    title: "CI/CD Best Practices for Modern Web Applications",
    excerpt:
      "Streamline your development workflow with effective CI/CD practices. Learn how to set up automated testing, deployment pipelines, and monitoring.",
    content: "Full article content here...",
    date: "2024-01-28",
    tags: ["DevOps", "CI/CD", "Automation"],
    readTime: "9 min read",
  },
  {
    id: "aws-serverless",
    title: "Building Serverless APIs with AWS Lambda",
    excerpt:
      "Discover how to build cost-effective, scalable APIs using AWS Lambda and API Gateway. Includes practical examples and deployment strategies.",
    content: "Full article content here...",
    date: "2024-01-15",
    tags: ["AWS", "Serverless", "Cloud"],
    readTime: "11 min read",
  },
  {
    id: "react-hooks-advanced",
    title: "Advanced React Hooks Patterns",
    excerpt:
      "Deep dive into advanced React Hooks patterns including custom hooks, composition patterns, and performance optimization techniques.",
    content: "Full article content here...",
    date: "2024-01-08",
    tags: ["React", "Hooks", "JavaScript"],
    readTime: "7 min read",
  },
  {
    id: "docker-kubernetes",
    title: "From Docker to Kubernetes: A Practical Guide",
    excerpt:
      "Learn how to containerize your applications with Docker and orchestrate them with Kubernetes for production-ready deployments.",
    content: "Full article content here...",
    date: "2023-12-20",
    tags: ["Docker", "Kubernetes", "DevOps"],
    readTime: "15 min read",
  },
  {
    id: "graphql-rest",
    title: "GraphQL vs REST: Choosing the Right API",
    excerpt:
      "A detailed comparison of GraphQL and REST APIs, helping you understand when to use each approach for your next project.",
    content: "Full article content here...",
    date: "2023-12-10",
    tags: ["GraphQL", "REST", "API Design"],
    readTime: "8 min read",
  },
  {
    id: "accessibility-web",
    title: "Web Accessibility: Building Inclusive Applications",
    excerpt:
      "Learn how to build accessible web applications that work for everyone. Covers WCAG guidelines, ARIA attributes, and testing strategies.",
    content: "Full article content here...",
    date: "2023-11-25",
    tags: ["Accessibility", "Web Development", "UX"],
    readTime: "10 min read",
  },
];
