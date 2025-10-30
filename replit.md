# Julian Xeer Portfolio - Replit Configuration

## Overview

This is a modern, single-page portfolio website showcasing Julian Xeer's work as a Full Stack Developer. The application features a dark gradient theme (teal → indigo → purple), smooth scroll-based animations, and a fully responsive design. Built as a static single-page application with multiple sections including hero, about, expertise, projects, experience timeline, and contact.

**Tech Stack:**
- Frontend: React 18 with TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS with custom gradient theme
- Animations: Framer Motion
- UI Components: Radix UI primitives (shadcn/ui)
- Routing: Wouter (lightweight client-side routing)
- Backend: Express.js (minimal server for static file serving)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Component Structure:**
- Single-page application with section-based navigation
- Components organized into:
  - **Page Components** (`client/src/pages/`): Home page and 404 handler
  - **Feature Components** (`client/src/components/`): Navbar, Hero, About, Expertise, Projects, Experience, Contact, Footer, Robot
  - **UI Components** (`client/src/components/ui/`): Reusable shadcn/ui components built on Radix UI primitives

**State Management:**
- React hooks (useState, useEffect, useRef) for local component state
- Custom hooks: `useReducedMotion` for accessibility, `useIsMobile` for responsive behavior
- TanStack Query (React Query) configured but not actively used (queryClient setup present)
- Framer Motion's `useInView` for scroll-based animation triggers

**Design System:**
- Custom color palette defined in Tailwind config with brand colors (teal, indigo, purple, cyan)
- CSS custom properties in `index.css` for theming (light/dark mode support)
- Consistent spacing using Tailwind's spacing scale
- Typography: Inter and Poppins fonts loaded from Google Fonts
- Gradient-heavy aesthetic with glassmorphic elements

**Animation Strategy:**
- Scroll-reveal animations using Framer Motion with `useInView` hook
- Respects `prefers-reduced-motion` media query via custom hook
- CSS keyframe animations for Robot component (float and blink effects)
- Parallax effect on hero section background
- Smooth scrolling for anchor navigation

**Routing:**
- Wouter for lightweight client-side routing
- Two routes: Home (`/`) and 404 catch-all
- Smooth scroll navigation within single page using anchor links

### Backend Architecture

**Server Setup:**
- Express.js server with minimal configuration
- Development: Vite dev server with HMR (Hot Module Replacement)
- Production: Static file serving from `dist/public`
- Custom middleware for request logging and JSON parsing

**Storage Layer:**
- In-memory storage implementation (`MemStorage` class)
- Drizzle ORM configured for PostgreSQL but not actively used
- Schema defined in `shared/schema.ts` (users table) as placeholder
- Storage interface designed for future CRUD operations

**Build Process:**
- Vite builds client-side React application
- esbuild bundles server code for production
- Separate output directories: `dist/public` for client, `dist` for server
- TypeScript compilation with path aliases (`@/`, `@shared/`, `@assets/`)

### Data Architecture

**Static Data Sources:**
- `client/src/data/skills.ts`: Skill categories and individual skills with categorization
- `client/src/data/projects.ts`: Project showcase data (title, description, tags, GitHub links, images)
- `client/src/data/timeline.ts`: Career timeline/experience milestones

**Data Flow:**
- Static data imported directly into components
- No API calls in current implementation
- Projects carousel cycles through static project array
- Expertise section filters skills based on selected category

### Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels on interactive elements (buttons, links, navigation)
- Focus management with visible focus rings
- Skip-to-content link implied in design guidelines
- Reduced motion support throughout all animations
- Responsive design with mobile-first approach

### Responsive Design

- Breakpoint strategy using Tailwind's responsive prefixes (sm, md, lg, xl)
- Mobile navigation: Hamburger menu with slide-in panel
- Desktop navigation: Horizontal navbar with active section highlighting
- Grid layouts that stack on mobile (2-column → 1-column)
- Flexible spacing that adjusts per viewport size

## External Dependencies

### UI Component Library
- **Radix UI**: Complete suite of headless UI primitives (accordion, dialog, dropdown, popover, tooltip, etc.)
- **shadcn/ui**: Pre-styled component patterns built on Radix UI
- **class-variance-authority (cva)**: Variant-based component styling
- **Lucide React**: Icon library for consistent iconography

### Animation & Interaction
- **Framer Motion**: Declarative animations and scroll-based triggers
- **Embla Carousel**: Carousel/slider functionality for projects section

### Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **PostCSS**: CSS processing with autoprefixer
- **clsx & tailwind-merge**: Conditional class name utilities

### State & Data Management
- **TanStack Query (React Query)**: Server state management (configured, minimal usage)
- **React Hook Form**: Form validation (installed, not actively used)
- **Zod**: Schema validation for forms and data (installed, not actively used)

### Development Tools
- **TypeScript**: Type safety across entire stack
- **Vite**: Fast build tool and dev server with HMR
- **esbuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Runtime error modal, cartographer, dev banner for Replit environment

### Backend & Database
- **Express.js**: Web server framework
- **Drizzle ORM**: TypeScript ORM for PostgreSQL (configured but not actively used)
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation

### Fonts & Assets
- **Google Fonts**: Inter and Poppins font families
- External image sources: Unsplash (for placeholder portrait image)

### Session & Storage (Installed but Unused)
- **connect-pg-simple**: PostgreSQL session store for Express
- **nanoid**: Unique ID generation

**Note**: The application is configured with database support (Drizzle + PostgreSQL) but currently operates as a static portfolio without database persistence. The storage layer and user schema are placeholder implementations ready for future expansion.