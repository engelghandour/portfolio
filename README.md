# Full-Stack Developer Portfolio Website

A modern, professional portfolio website showcasing business-focused software development expertise. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for professional animations and transitions
- **Dark Mode**: Full dark mode support with smooth transitions
- **Responsive Design**: Mobile-first approach, perfect on all devices
- **SEO Optimized**: Meta tags, Open Graph support, semantic HTML
- **Performance**: Optimized for fast loading and 60fps animations
- **Accessibility**: ARIA labels, keyboard navigation, semantic markup

## 📋 Sections

1. **Hero Section** - Animated introduction with typing effect and gradient background
2. **About** - Professional narrative focusing on business value and problem-solving
3. **Skills & Expertise** - Interactive skill cards organized by category
4. **Projects** - Featured projects with business impact metrics and filtering
5. **Services** - Comprehensive service offerings with ROI focus
6. **Contact** - Form with validation and social media links
7. **Footer** - Quick links and additional contact information

## 🛠️ Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **app/layout.tsx** - Update metadata (title, description, author)
2. **components/Hero.tsx** - Change the headline and tagline
3. **components/About.tsx** - Update the about text and differentiators
4. **components/Skills.tsx** - Modify skills and proficiency levels
5. **components/Projects.tsx** - Replace with your actual projects
6. **components/Contact.tsx** - Update email and social media links
7. **components/Footer.tsx** - Update name and links

### Images

Add your professional photo to `/public/images/` and update the reference in `components/About.tsx`.

### Colors

Modify the color scheme in `tailwind.config.ts` to match your branding.

### Contact Form

To enable the contact form, integrate with a service like:
- EmailJS
- SendGrid
- Formspree
- Custom API endpoint

Update the form submission logic in `components/Contact.tsx`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js applications.

## 📝 Environment Variables

Create a `.env.local` file for any environment variables:

```env
# Email Service (e.g., EmailJS)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support, email your.email@example.com or open an issue in the repository.

## ✨ Key Technologies

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel-ready

## 🎯 Performance

- Lighthouse Score: 90+
- 60fps animations
- Optimized images with lazy loading
- Code splitting
- Fast Time to Interactive (TTI)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

**Made with ❤️ by [Your Name]**
