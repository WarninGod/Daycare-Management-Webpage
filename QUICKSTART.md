# Quick Start Guide

Get CentraCare running on your machine in 5 minutes! ⚡

## 🚀 Super Quick Start

```bash
# 1. Clone and navigate
git clone https://github.com/WarninGod/Daycare-Management-Webpage.git
cd Daycare-Management-Webpage

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open your browser to `http://localhost:3000` 🎉

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run type-check` | Check TypeScript types without building |
| `npm run clean` | Clean build cache and artifacts |

## 🎯 What's Next?

After getting the site running:

1. **Explore the Code**
   - Check out `App.tsx` for the main structure
   - Look at `components/` for reusable UI elements
   - Browse `sections/` for page sections

2. **Read the Docs**
   - 📖 [Development Guide](./DEVELOPMENT.md) - Detailed dev setup
   - 🛠️ [Capabilities](./CAPABILITIES.md) - What I can help you with
   - 🤝 [Contributing](./CONTRIBUTING.md) - How to contribute

3. **Make Changes**
   - Edit any file and see changes instantly (HMR)
   - All TypeScript files in `components/` and `sections/`
   - Styles use Tailwind CSS utility classes

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Vite will auto-assign next available port
# Or manually specify:
npm run dev -- --port 3001
```

### Dependencies Issue
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check for errors
npm run type-check
```

### Build Fails
```bash
# Clean build cache
npm run clean
npm run build
```

## 💡 Pro Tips

- **Fast Refresh**: Edit components and see changes without losing state
- **Console**: Check browser console for errors/warnings
- **DevTools**: Install React DevTools browser extension
- **Vite Config**: See `vite.config.ts` for build customization

## 📱 Testing Responsive Design

1. **In Browser**:
   - Chrome DevTools: `F12` → Toggle device toolbar
   - Test mobile, tablet, desktop views

2. **On Device**:
   - Get your local IP: `ifconfig` or `ipconfig`
   - Access from phone: `http://YOUR_IP:3000`

## 🌐 Language Switching

The site supports 3 languages:
- 🇬🇧 English
- 🇳🇱 Dutch (Nederlands)
- 🇫🇷 French (Français)

Use the language switcher in the header to test.

## 🎨 Customization Ideas

Want to customize the site? Try these:

- **Colors**: Edit Tailwind classes (e.g., `bg-sky-600` → `bg-blue-600`)
- **Content**: Edit text in section components
- **Layout**: Modify component structure
- **Features**: Add new sections to `App.tsx`

## 📚 Learn More

- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **Vite**: https://vite.dev/
- **Tailwind CSS**: https://tailwindcss.com/

## 🆘 Need Help?

- 📖 Check [CAPABILITIES.md](./CAPABILITIES.md) to see what I can help with
- 🐛 [Report a bug](https://github.com/WarninGod/Daycare-Management-Webpage/issues)
- 💡 [Request a feature](https://github.com/WarninGod/Daycare-Management-Webpage/issues)

---

**Happy coding!** 🚀

Now go explore `components/` and `sections/` to see how everything works!
