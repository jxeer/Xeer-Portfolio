export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  targetClients: string[];
}

export const services: Service[] = [
  {
    id: "basic-landing",
    title: "Basic Landing Page",
    description:
      "A single-scroll page designed to establish your online presence fast — modern, mobile-ready, and beautifully branded. Perfect for artists, coaches, healers, or events who need a simple digital home with essential contact and call-to-action features.",
    priceRange: "$750 – $1,200",
    targetClients: ["Artists", "Coaches", "Healers", "Events"],
  },
  {
    id: "enhanced-landing",
    title: "Enhanced Landing Page",
    description:
      "A refined version of the basic package, adding multiple sections, stronger branding, and integrated analytics. Ideal for musicians, small businesses, and consultants ready to convert visitors into followers, clients, or donors through a polished digital presence.",
    priceRange: "$1,200 – $2,000",
    targetClients: ["Musicians", "Small Businesses", "Consultants"],
  },
  {
    id: "standard-website",
    title: "Standard Website",
    description:
      "A complete multi-page website with CMS (WordPress or headless), SEO setup, and clean navigation. Tailored for nonprofits, educators, and professional portfolios who want to publish content, manage updates easily, and build credibility online.",
    priceRange: "$2,000 – $3,500",
    targetClients: ["Nonprofits", "Educators", "Portfolios"],
  },
  {
    id: "advanced-website",
    title: "Advanced Website",
    description:
      "A scalable site with deeper functionality — CRM or booking integrations, blog or course sections, and stronger SEO optimization. Designed for growing organizations, wellness practices, and small-to-mid-size companies building community and engagement online.",
    priceRange: "$3,500 – $5,000",
    targetClients: ["Organizations", "Wellness", "Companies"],
  },
  {
    id: "custom-web-app",
    title: "Custom Web App (MVP)",
    description:
      "A fully interactive web application built with React, Vite, and modern backend tools (Firebase or Supabase). Includes user accounts, data dashboards, and automation. Ideal for startups, digital platforms, or social enterprises ready to launch a proof-of-concept or pilot product.",
    priceRange: "$5,000 – $10,000",
    targetClients: ["Startups", "Digital Platforms", "Social Enterprises"],
  },
  {
    id: "enterprise-platform",
    title: "Enterprise Web Platform",
    description:
      "A bespoke, full-stack digital ecosystem — APIs, custom databases, analytics dashboards, Stripe integration, and long-term technical support. Built for funded startups, tech nonprofits, and organizations scaling their digital infrastructure for national or global impact.",
    priceRange: "$10,000 – $20,000+",
    targetClients: ["Funded Startups", "Tech Nonprofits", "Scaling Orgs"],
  },
];
