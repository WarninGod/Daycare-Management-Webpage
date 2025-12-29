# Development Guide

This guide will help you get started with developing the CentraCare Daycare Management Webpage.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- A modern code editor (VS Code recommended)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/WarninGod/Daycare-Management-Webpage.git
cd Daycare-Management-Webpage
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies listed in `package.json`:
- React 19.2.3
- TypeScript 5.8.2
- Vite 6.2.0
- Lucide React (icons)
- i18next & react-i18next (internationalization)

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the next available port).

The dev server includes:
- ⚡ Hot Module Replacement (HMR) - Changes reflect instantly
- 🔥 Fast refresh for React components
- 📦 Optimized dev builds

## 🏗️ Project Architecture

### Directory Structure

```
/
├── components/           # Reusable UI components
│   ├── Button.tsx       # Button component with variants
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Footer component
│   └── SectionDivider.tsx  # SVG wave dividers
├── sections/            # Page sections
│   ├── Hero.tsx         # Landing hero section
│   ├── Features.tsx     # Features showcase
│   ├── Solutions.tsx    # Solutions section
│   ├── Pricing.tsx      # Pricing tiers
│   ├── Security.tsx     # Security & compliance
│   ├── Resources.tsx    # Resources section
│   ├── CTA.tsx          # Call-to-action
│   └── CookieBanner.tsx # GDPR cookie consent
├── locales/             # Translation files (EN/NL/FR)
├── App.tsx              # Main application component
├── index.tsx            # React entry point
├── index.html           # HTML template
├── types.ts             # TypeScript type definitions
├── i18n.ts              # i18n configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

### Key Technologies

**Frontend Framework:**
- React 19.2.3 with TypeScript
- Functional components with hooks
- No state management library (yet)

**Build Tool:**
- Vite 6.2.0 - Modern, fast build tool
- ESM-first development
- Optimized production builds

**Styling:**
- Tailwind CSS via CDN (in index.html)
- Utility-first CSS framework
- Responsive design utilities

**Icons:**
- Lucide React - Beautiful, consistent icons
- Tree-shakeable imports

## 🎨 Component Development

### Creating a New Component

1. Create a new file in `components/` or `sections/`
2. Follow this template:

```typescript
import React from 'react';

interface MyComponentProps {
  title: string;
  description?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div className="container mx-auto px-4">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default MyComponent;
```

3. Import and use in `App.tsx` or parent component

### Component Guidelines

- Use TypeScript interfaces for props
- Keep components small and focused
- Use semantic HTML elements
- Follow responsive-first design
- Add proper ARIA labels for accessibility

## 🌐 Internationalization

The project uses `react-i18next` for translations.

### Adding a Translation

1. Edit translation files in `locales/`:
   - `locales/en.json` - English
   - `locales/nl.json` - Dutch
   - `locales/fr.json` - French

2. Use translations in components:

```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('hero.title')}</h1>;
};
```

### Language Switcher

The header includes a language switcher. Users can toggle between EN/NL/FR.

## 🏗️ Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory:
- Minified JavaScript and CSS
- Optimized assets
- Source maps for debugging

### Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

## 🧪 Testing

### Current State
The project doesn't have a testing setup yet.

### Recommended Setup
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **@testing-library/user-event** - User interaction testing

To add testing:
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

## 🎯 Best Practices

### Code Style

- Use TypeScript for all components
- Use functional components with hooks
- Avoid inline styles (use Tailwind classes)
- Keep files under 300 lines
- Export one main component per file

### Git Workflow

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Commit with clear messages: `git commit -m "Add new feature"`
4. Push and create a pull request

### Performance

- Use React.memo() for expensive components
- Implement lazy loading for large sections
- Optimize images before adding them
- Monitor bundle size

## 🐛 Debugging

### Development Tools

**React Developer Tools:**
- Install browser extension for React debugging
- Inspect component hierarchy
- Check props and state

**VS Code Extensions:**
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense

### Common Issues

**Port Already in Use:**
```bash
# Vite will automatically use the next available port
# Or specify a port:
npm run dev -- --port 3001
```

**TypeScript Errors:**
```bash
# Check TypeScript errors
npx tsc --noEmit
```

**Module Not Found:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📦 Adding Dependencies

### Install a Package

```bash
npm install package-name
```

### Install Dev Dependency

```bash
npm install -D package-name
```

### Security Check

Always check for vulnerabilities:
```bash
npm audit
npm audit fix
```

## 🚀 Deployment

### GitHub Pages

The project can be deployed to GitHub Pages:

1. Update `vite.config.ts` with base path
2. Run `npm run build`
3. Deploy `dist/` folder to gh-pages branch

### Other Platforms

- **Vercel**: Connect GitHub repo, auto-deploy
- **Netlify**: Drag & drop `dist/` folder
- **AWS S3**: Upload `dist/` to S3 bucket

## 🔧 Configuration Files

### vite.config.ts
- Build configuration
- Plugin setup
- Dev server settings
- Base path for deployment

### tsconfig.json
- TypeScript compiler options
- Path aliases
- Include/exclude patterns

### package.json
- Dependencies
- Scripts
- Project metadata

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

## 💬 Getting Help

- Open an issue on GitHub
- Check existing issues for solutions
- Review pull requests for examples

---

Happy coding! 🎉
