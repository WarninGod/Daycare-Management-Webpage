# CentraCare - Multi-Site Childcare Management

<div align="center">

![CentraCare](https://img.shields.io/badge/CentraCare-SaaS%20Platform-0284c7?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)

**A professional SaaS landing page for multi-location childcare management**

[Live Demo](https://warningod.me/Daycare-Management-Webpage/) • [Report Bug](https://github.com/WarninGod/Daycare-Management-Webpage/issues) • [Request Feature](https://github.com/WarninGod/Daycare-Management-Webpage/issues)

</div>

---

## 📋 Overview

CentraCare is a modern, responsive landing page designed for multi-site childcare organizations in Belgium and the EU. The platform centralizes compliance, operations, and reporting across all daycare locations, making it easier for childcare networks to manage their operations efficiently.

## ✨ Features

### 🎯 Core Sections
- **Hero Section** - Compelling value proposition with CTA buttons
- **Features** - 6 key features (Multi-Site Management, Compliance, Scheduling, etc.)
- **Solutions** - Highlights for multi-location complexity
- **Pricing** - 3 pricing tiers (Starter, Professional, Enterprise)
- **Security** - GDPR compliance and security certifications
- **Resources** - Documentation, community, and case studies
- **CTA** - Final conversion section

### 🛠️ Technical Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Multi-language support (EN/NL/FR)
- ✅ GDPR-compliant cookie banner
- ✅ Smooth scrolling navigation
- ✅ Interactive hover effects
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Hot module replacement (HMR)

## 📚 Documentation

- 🚀 **[Quick Start Guide](./QUICKSTART.md)** - Get running in 5 minutes
- 📖 **[Development Guide](./DEVELOPMENT.md)** - Detailed development documentation
- 🛠️ **[Capabilities](./CAPABILITIES.md)** - What we can help you with
- 🤝 **[Contributing Guide](./CONTRIBUTING.md)** - How to contribute to the project

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/WarninGod/Daycare-Management-Webpage.git
   cd Daycare-Management-Webpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
centracare/
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with links
│   └── SectionDivider.tsx   # SVG wave divider
├── App.tsx                  # Main application
├── index.tsx                # React entry point
├── index.html               # HTML template
├── types.ts                 # TypeScript interfaces
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎨 Tech Stack

- **Framework:** React 19.2.3
- **Language:** TypeScript 5.8.2
- **Build Tool:** Vite 6.2.0
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 🎯 Component Overview

### Button Component
4 variants: `primary`, `secondary`, `outline`, `ghost`  
3 sizes: `sm`, `md`, `lg`

### Header Component
- Fixed navigation with scroll effects
- Language switcher (EN/NL/FR)
- Mobile hamburger menu
- Login & Demo CTA buttons

### Footer Component
- Company information
- Quick links
- Contact details
- Social media icons

## 🌐 Language Support

The site supports three languages:
- **EN** - English
- **NL** - Dutch (Nederlands)
- **FR** - French (Français)

> Note: Language switcher UI is functional. Connect to an i18n library (like react-i18next) for full translation support.

## 🔒 Security & Compliance

- GDPR Compliant
- ISO 27001 Certified
- EU Data Centers (Frankfurt)
- 256-bit AES Encryption
- 99.9% Uptime SLA

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**WarninGod**
- GitHub: [@WarninGod](https://github.com/WarninGod)

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms
- Built with ❤️ for childcare organizations
- Icons by [Lucide](https://lucide.dev/)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ for better childcare management

</div>
