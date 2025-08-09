# Replicate Hub - Global AI Hackathon

A pixel-perfect, production-ready landing site for Replicate Hub, built for the MIT Sloan × K-1000 Global AI Hackathon.

## Features

- 🎨 **Premium Design**: Glassmorphism UI with neon gradients and micro-interactions
- 📱 **Fully Responsive**: Mobile-first design with breakpoints for all devices
- ♿ **Accessibility First**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- ⚡ **Performance Optimized**: Fast loading with critical CSS and optimized assets
- 🎭 **Smooth Animations**: Delightful micro-interactions and parallax effects
- 🔧 **Production Ready**: TypeScript, ESLint, and modern build tooling

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

### Colors
- **Primary Gradient**: Violet (#7C3AED) to Cyan (#06B6D4)
- **Accent**: Neon Cyan (#00FFD1)
- **Background**: Dark Slate (#0B1020)
- **Surface**: Glassmorphism (rgba(255,255,255,0.06))

### Typography
- **Display Font**: Poppins ExtraBold for headlines
- **Body Font**: Inter (400/500/600) for readability
- **Scale**: 56px (H1), 36px (H2), 24px (H3), 16px (Body)

### Breakpoints
- **Mobile**: <768px
- **Tablet**: 768-1023px  
- **Laptop**: 1024-1439px
- **Desktop**: ≥1440px

## Components

### Core Components
- `Hero`: Dramatic membership-pass style hero with 3D card effects
- `Navigation`: Sticky nav with mobile hamburger and smooth transitions
- `Features`: Grid-based feature showcase with hover animations
- `Pricing`: Membership pass style pricing cards with toggle
- `CodeBlock`: Syntax-highlighted code with copy functionality
- `Newsletter`: Email signup with validation and success states

### Key Features
- **Membership Pass Cards**: Layered 3D design with parallax mouse tracking
- **Glassmorphism**: Backdrop blur effects throughout the design
- **Micro-interactions**: Hover states, button animations, and loading states
- **Dark Theme**: Optimized for dark mode with high contrast ratios

## Accessibility

- ✅ Keyboard navigation support
- ✅ Screen reader compatible
- ✅ High contrast ratios (4.5:1 for body text)
- ✅ Focus indicators on all interactive elements
- ✅ ARIA labels and semantic HTML

## Performance

- ✅ Critical CSS inlined
- ✅ Font preloading
- ✅ Responsive images with lazy loading
- ✅ Optimized bundle size
- ✅ Lighthouse score target: 90+ accessibility, 80+ performance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

### Testing Checklist
- [ ] Responsive design at 1440/1280/1024/768/375px
- [ ] Keyboard navigation flow
- [ ] Color contrast audit
- [ ] Performance metrics
- [ ] Interactive states (hover, focus, active)
- [ ] Membership card parallax effects
- [ ] Form validation and submission

## Deployment

The site is optimized for static hosting platforms:

```bash
# Build for production
npm run build

# Deploy dist/ folder to your hosting platform
```

## File Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx        # Hero section with membership cards
│   ├── Features.tsx    # Feature grid
│   ├── Pricing.tsx     # Pricing cards
│   ├── Docs.tsx        # Documentation section
│   ├── About.tsx       # About and partners
│   ├── Newsletter.tsx  # Email signup
│   └── Footer.tsx      # Footer links
├── types/              # TypeScript type definitions  
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and utilities
```

## Design Tokens

All design tokens are exported in `design-tokens.json` for easy handoff to designers and other developers.

## License

Built for the Global AI Hackathon - MIT Sloan × K-1000

---

## Developer Notes

### Customization
- Replace partner logos in `/public/` directory
- Update social links in `Footer.tsx`
- Modify color scheme in `tailwind.config.js`
- Replace placeholder content as needed

### Asset Placeholders
- `logo_mit.png` - MIT Sloan official logo
- `logo_k1000.png` - K-1000 partner logo
- `lottie_hero.json` - Hero animation file
- `social-preview.jpg` - Social media preview image (1200×630)

### Environment Setup
No environment variables required for basic functionality. Add analytics or form handling as needed.