export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  targetClients: string[];
}

export const services: Service[] = [
  {
    id: "full-stack-mvp",
    title: "Full-Stack MVP Development",
    description:
      "Transform your idea into a working product. I'll build a complete web application with modern tech stack, database design, user authentication, and responsive UI that your users will love.",
    priceRange: "$5,000 - $15,000",
    targetClients: ["Startups", "Entrepreneurs", "Small Businesses"],
  },
  {
    id: "web3-dapp",
    title: "Web3 & Smart Contract Integration",
    description:
      "Bring your blockchain project to life with secure smart contracts and intuitive dApps. Specializing in Solidity development, wallet integration, and seamless Web3 user experiences.",
    priceRange: "$8,000 - $20,000",
    targetClients: ["Crypto Projects", "DAOs", "NFT Platforms"],
  },
  {
    id: "custom-web-app",
    title: "Custom Web Application",
    description:
      "Need something unique? I'll design and build a tailored web application that fits your specific needs, from complex dashboards to interactive platforms with real-time features.",
    priceRange: "$6,000 - $18,000",
    targetClients: ["Non-Profits", "Educators", "Enterprises"],
  },
  {
    id: "api-backend",
    title: "API & Backend Development",
    description:
      "Robust, scalable backend solutions with RESTful or GraphQL APIs. Includes database architecture, authentication, data validation, and comprehensive documentation for your team.",
    priceRange: "$4,000 - $12,000",
    targetClients: ["Mobile Apps", "SaaS Companies", "Tech Teams"],
  },
  {
    id: "ui-redesign",
    title: "UI/UX Redesign & Frontend",
    description:
      "Breathe new life into your existing application with a modern, accessible interface. I'll rebuild your frontend with React, ensuring smooth animations and delightful user interactions.",
    priceRange: "$3,000 - $10,000",
    targetClients: ["Artists", "Creators", "Existing Products"],
  },
  {
    id: "tech-consulting",
    title: "Technical Consulting & Code Review",
    description:
      "Get expert guidance on architecture decisions, performance optimization, or security best practices. Includes comprehensive code review and actionable recommendations.",
    priceRange: "$150 - $300/hour",
    targetClients: ["Dev Teams", "CTOs", "Growing Startups"],
  },
];
