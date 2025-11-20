# Dermacure Clinic - Professional Dermatology Website

A modern, accessible, and high-performance static website for a dermatology clinic, built with Next.js 16 and Tailwind CSS. This website showcases professional dermatological services, patient testimonials, and provides an excellent user experience across all devices.

## 🌟 Features

- **Modern Hero Section** with compelling call-to-action and trust indicators
- **Services Section** showcasing Medical Dermatology and Aesthetic treatments
- **Portfolio/About Section** highlighting credentials and expertise
- **Patient Reviews** featuring authentic testimonials
- **Contact Section** with embedded Google Maps for Dermacure Clinic location
- **Fully Responsive** design optimized for mobile, tablet, and desktop
- **Accessibility-First** approach following WCAG guidelines
- **SEO Optimized** with comprehensive metadata
- **Static Export** ready for GitHub Pages deployment

## 🎨 Design

The website features a professional, calming color palette based on soft teal/green tones that convey trust and medical expertise:

- **Primary Color**: Teal (`174 62% 47%`) - Professional and calming
- **Secondary Color**: Light Teal (`174 35% 92%`) - Soft backgrounds
- **Typography**: Clean, modern sans-serif fonts
- **Components**: Built with shadcn/ui for consistent, accessible UI elements

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) patterns
- **TypeScript**: Full type safety
- **Deployment**: Optimized for GitHub Pages (static export)

## 📁 Project Structure

```
dermatology-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page with hero section
├── components/
│   ├── ui/
│   │   ├── button.tsx       # Reusable button component
│   │   └── card.tsx         # Reusable card component
│   ├── services-section.tsx # Services showcase
│   ├── portfolio-section.tsx # About/credentials section
│   ├── reviews-section.tsx  # Patient testimonials
│   ├── cta-section.tsx      # Contact & map section
│   └── footer.tsx           # Site footer
├── lib/
│   └── utils.ts             # Utility functions (cn)
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dermatology-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

Build the static site:
```bash
npm run build
```

The output will be in the `out/` directory, ready for deployment.

## 📦 Deployment

This project is configured for static export and can be deployed to:

- **GitHub Pages** (recommended)
- Netlify
- Vercel
- Any static hosting service

### GitHub Pages Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages on every push to the `main` branch.

## ♿ Accessibility Features

- Semantic HTML5 elements (`<main>`, `<section>`, `<nav>`, `<footer>`)
- ARIA labels and attributes for screen readers
- Keyboard navigation support
- Proper heading hierarchy
- Descriptive alt text for all images
- Color contrast meeting WCAG AA standards
- Focus indicators for interactive elements

## 🎯 Key Sections

### 1. Hero Section
- Compelling headline and professional description
- Primary CTA button: "Book an Appointment"
- Trust indicators (15+ years, 5000+ patients, 5.0 rating)
- Professional imagery

### 2. Services
- **Medical Dermatology**: Acne treatment, skin cancer screening, eczema/psoriasis care
- **Aesthetic Dermatology**: Anti-aging treatments, laser procedures, medical-grade skincare

### 3. Portfolio/About
- Professional credentials and qualifications
- Board certification and experience highlights
- Patient success statistics

### 4. Patient Reviews
- 5 authentic testimonials
- 5-star rating display
- Treatment-specific feedback

### 5. Contact & Location
- Embedded Google Maps for Dermacure Clinic (Cavalry Ground, Lahore)
- Contact information (phone, email, address)
- Primary CTA to book appointments

## 🎨 Customization

### Colors
Edit `app/globals.css` to customize the color palette:

```css
:root {
  --primary: 174 62% 47%;        /* Main brand color */
  --secondary: 174 35% 92%;      /* Background accents */
  --foreground: 215 25% 27%;     /* Text color */
  /* ... */
}
```

### Content
Update section content in:
- `app/page.tsx` - Hero section
- `components/services-section.tsx` - Services
- `components/portfolio-section.tsx` - About/credentials
- `components/reviews-section.tsx` - Testimonials
- `components/cta-section.tsx` - Contact information

### Google Maps
Replace the iframe `src` in `components/cta-section.tsx` with your clinic's location embed URL.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO

Comprehensive metadata in `app/layout.tsx`:
- Title and description optimized for search engines
- Keywords targeting dermatology services
- Open Graph tags for social sharing
- Robots meta for proper indexing

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a portfolio project. For any suggestions or issues, please contact the repository owner.

## 📞 Support

For questions or support, please reach out through the repository issues or contact Dermacure Clinic directly.

---

**Built with ❤️ using Next.js and Tailwind CSS**
