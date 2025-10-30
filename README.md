# Julian Xeer Portfolio

A modern, single-page portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features a dark gradient theme with smooth animations, scroll-based navigation, and a fully responsive design.

## Features

- 🎨 **Dark Gradient Theme**: Beautiful teal → indigo → purple gradients throughout
- ✨ **Smooth Animations**: Scroll-reveal animations with Framer Motion
- 📱 **Fully Responsive**: Mobile-first design with hamburger menu
- ♿ **Accessible**: Semantic HTML, focus rings, skip-to-content link
- 🎭 **Animated Robot**: CSS-animated robot hero with float and blink effects
- 🔄 **Project Carousel**: Browse through featured projects with smooth transitions
- 📍 **Active Navigation**: Automatic section highlighting based on scroll position

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5000`

## Customization Guide

### 1. Personal Information

**Name and Branding**: Update the navbar brand in `client/src/components/Navbar.tsx`:
```tsx
// Line ~50
<a href="#hero">
  JULIAN <span>XEER</span>  {/* Change to YOUR LASTNAME */}
</a>
```

**Hero Section**: Edit `client/src/components/Hero.tsx`:
```tsx
// Line ~50
<h1>Hi, I'm Julian Xeer</h1>  {/* Change to your name */}
<p>Full Stack Developer</p>     {/* Change to your title */}
```

### 2. About Section

Edit `client/src/components/About.tsx` to replace the placeholder content with your own biography.

**Replace the profile image** (line ~29):
```tsx
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Your Name portrait"
/>
```

### 3. Skills & Expertise

Update `client/src/data/skills.ts`:

- Modify `skillCategories` to change category names/icons
- Update `skills` array with your tech stack
- Add new icons by importing from `react-icons/si` and updating the `iconMap` in `Expertise.tsx`

### 4. Projects

Edit `client/src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "your-project-id",
    title: "Your Project Name",
    description: "Your project description (2-3 sentences)",
    tags: ["Technology", "Stack", "Used"],
    githubUrl: "https://github.com/yourusername/your-repo",
    images: ["placeholder"],  // Will be replaced with actual images
  },
  // Add more projects...
];
```

**Project Images**: Replace the gradient placeholder in `client/src/components/Projects.tsx` (line ~60) with actual project screenshots.

### 5. Experience Timeline

Update `client/src/data/timeline.ts`:

```typescript
export const timelineEvents: TimelineEvent[] = [
  {
    id: "event-id",
    year: "2024",
    title: "Event Title",
    description: "Event description",
    icon: Star,  // Choose from lucide-react icons
  },
  // Add more events...
];
```

### 6. Contact Links

Edit `client/src/components/Contact.tsx` (line ~9):

```tsx
const contactLinks = [
  {
    id: "linkedin",
    href: "https://linkedin.com/in/YOUR_USERNAME",  // Your LinkedIn
  },
  {
    id: "email",
    href: "mailto:YOUR_EMAIL@example.com",  // Your email
  },
  {
    id: "github",
    href: "https://github.com/YOUR_USERNAME",  // Your GitHub
  },
];
```

### 7. Colors & Fonts

**Brand Colors**: Edit `tailwind.config.ts`:
```typescript
brand: {
  teal: "#0f9ba8",     // Change these hex values
  indigo: "#4b5bdc",
  purple: "#6a31d9",
  cyan: "#12b2d6",
}
```

**Fonts**: The site uses Inter and Poppins from Google Fonts. To change fonts, update:
1. `client/index.html` (Google Fonts import)
2. `client/src/index.css` (CSS variables)
3. `tailwind.config.ts` (font family configuration)

### 8. Robot Animation

The robot is an SVG animation in `client/src/components/Robot.tsx`.

**To replace with a Lottie animation**:
1. Get a Lottie JSON file (from LottieFiles.com)
2. Install Lottie player: `npm install @lottiefiles/react-lottie-player`
3. Replace the Robot component with a Lottie player

**To use a static image**:
```tsx
// In Hero.tsx, replace <Robot /> with:
<img src="/path/to/your/robot.png" alt="Robot" className="animate-float" />
```

### 9. SEO & Metadata

Edit `client/index.html`:
```html
<title>Your Name - Your Title</title>
<meta name="description" content="Your custom description" />
```

Add Open Graph tags for social media sharing:
```html
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="URL_to_preview_image" />
```

### 10. Blog Section

The navbar includes a "Blog" link that currently points to `#blog`. To add a blog:

1. Create a new section in `client/src/components/Blog.tsx`
2. Add it to `client/src/pages/home.tsx`
3. Or remove it from the navbar if not needed

## Accessibility Features

- ✅ Semantic HTML5 landmarks
- ✅ Skip-to-content link
- ✅ ARIA labels on icon-only buttons
- ✅ Focus visible indicators
- ✅ Respects `prefers-reduced-motion`
- ✅ Sufficient color contrast

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons (Simple Icons)
- **UI Components**: shadcn/ui

## Deployment

Build for production:
```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Reduced motion support for accessibility

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub or contact the developer.

---

**Note**: This is a static portfolio site with no backend. All content is defined in the data files and components. If you need dynamic features (CMS, contact form backend, etc.), you'll need to add additional backend services.
