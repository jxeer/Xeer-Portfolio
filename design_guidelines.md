# Design Guidelines: Julian Xeer Portfolio

## Design Approach
**Reference-Based Approach** - Modern portfolio aesthetic inspired by Linear's clean interface with glassmorphic elements and dark theme. Focus on bold typography, smooth animations, and gradient-heavy visual treatment.

## Core Design Elements

### Typography
- **Display/Headings**: Inter or Poppins - large, friendly, bold weights
- **Body Text**: system-ui or Inter with generous line-height (1.6-1.8)
- **Code Elements**: Monospace font for code-style labels (e.g., `$. /welcome`)
- **Hierarchy**: Big impactful headings, clear content hierarchy throughout

### Color Palette
**Gradient System** (Dark theme base):
- Primary gradient: teal (#0f9ba8) → indigo (#4b5bdc) → purple (#6a31d9)
- Accent: cyan (#12b2d6) for timeline section
- Background: Dark gradients (radial/angled) with glossy finish
- Cards: White/light cards on dark backgrounds OR dark cards with subtle borders
- Text: White/light text with sufficient contrast

### Layout System
**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
**Container**: max-w-7xl centered with px-6 to px-12 responsive padding
**Section Padding**: py-20 to py-32 on desktop, py-12 to py-16 on mobile
**Cards**: rounded-2xl with soft shadows (shadow-lg, shadow-xl)

### Component Library

**Navigation**
- Sticky translucent dark bar at top
- Brand at left: "FIRSTNAME LASTNAME" (last name tinted with gradient color)
- Right-aligned links: About, Expertise, Projects, Experience, Blog, Contact
- Active section: subtle underline (2-3px, gradient color)
- Mobile: hamburger menu with slide-in panel overlay
- Z-index: 50 to stay above content

**Hero Section**
- Full viewport height (min-h-screen)
- Radial/angled gradient background (teal→indigo→purple)
- Left alignment: code label (`$. /welcome`), big headline, CTA buttons
- Right: Animated robot (Lottie or CSS fallback with float + blink)
- CTAs: "View Projects" (solid gradient), "Contact" (outline)
- Subtle parallax: background moves slower on scroll

**About Section**
- Two-column layout (lg:grid-cols-2)
- Left: square portrait with rounded-xl corners, subtle border/ring
- Right: "About me" heading + 3-5 short paragraphs
- Wide margins, airy whitespace
- Mobile: stack image above text

**Expertise Section**
- Left column: vertical category pills (Back-end, Front-end, DevOps, Engineering)
  - Tall rounded tiles with gradient backgrounds and icons
- Right: grid of skill cards (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
  - Each card: white/light background, skill icon, title, subtle shadow
  - Hover: lift (translate-y-1) + ring outline (ring-1 ring-white/10)

**Projects Section**
- Feature panels for each project (3+ projects):
  - Left: large mock images (phones/screens) on purple gradient panel
  - Right: title, description (2-3 sentences), tech tag chips, "View on GitHub" button
  - Tech tags: small rounded pills with dark background
  - GitHub button: outline style with icon
- Carousel navigation: prev/next arrows or dot indicators
- Transitions: fade/slide between projects (Framer Motion)

**Experience Timeline**
- Wide horizontal layout with 4-6 milestones
- Connected icon circles with horizontal line between them
- Each milestone: year | title above, short paragraph below
- Bright cyan gradient panel background (#12b2d6 tones)
- Dark text for contrast, generous padding (py-16 to py-24)

**Contact Section**
- "Let's Connect" big heading
- Three large circular icon buttons centered in row
  - LinkedIn, Email, GitHub icons
  - White circles on dark gradient background
  - Hover: glowing ring effect (ring-4, shadow-lg with brand colors)

**Footer**
- Minimal dark footer with copyright and small nav links

### Animations
**Scroll Reveals**:
- Fade-up effect (opacity 0→1, translateY 80px→0)
- Staggered children (50-100ms delay between elements)
- Trigger at 10-20% into viewport

**Interactions**:
- Buttons: subtle scale (scale-105) + shadow increase on hover
- Cards: lift (translate-y-1 to -translate-y-2) + ring outline on hover
- Robot: gentle float (translateY -10px to 10px, 10-12s ease-in-out loop) + blink animation
- Smooth scroll behavior for anchor links
- All animations respect `prefers-reduced-motion`

### Responsiveness
**Breakpoints**:
- Mobile-first approach (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- Hero: stack content vertically on mobile, side-by-side on lg+
- About: single column mobile, two-column lg+
- Expertise: single column categories/skills on mobile, side-by-side lg+
- Projects: stack content vertically mobile, side-by-side lg+
- Timeline: vertical scroll on mobile, horizontal on md+
- Contact: stack icons vertically on mobile, row on sm+

### Accessibility
- Semantic HTML5 landmarks (header, nav, main, section, footer)
- Skip-to-content link at top
- Alt text placeholders for all images
- Focus rings on interactive elements (ring-2 ring-offset-2)
- Sufficient color contrast (WCAG AA minimum)
- ARIA labels for icon-only buttons
- Keyboard navigation support

### Images
**Hero Section**: Animated robot (Lottie JSON or PNG/SVG with CSS animation) positioned on right side, approximately 400-500px size
**About Section**: Square portrait photo (400x400px minimum), professionally shot or illustrated avatar
**Projects Section**: Multiple device mockups (3 phone screens or laptop/tablet combinations) showing app interfaces, positioned on gradient panels
**Skills Icons**: Simple line icons or filled icons for each technology (32x32px to 48x48px)
**Timeline Icons**: Small circular icons (24x24px) for each milestone marker