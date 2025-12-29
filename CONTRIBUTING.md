# Contributing to CentraCare

Thank you for your interest in contributing to the CentraCare Daycare Management Webpage! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

We welcome contributions from everyone! Here are some ways you can help:

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Enhance UI/UX
- 🔧 Fix issues
- ✨ Add new features

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/Daycare-Management-Webpage.git
cd Daycare-Management-Webpage
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/WarninGod/Daycare-Management-Webpage.git
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features (e.g., `feature/add-testimonials`)
- `fix/` - Bug fixes (e.g., `fix/header-mobile-menu`)
- `docs/` - Documentation (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/button-component`)
- `style/` - Styling changes (e.g., `style/improve-responsive-design`)

### 5. Make Your Changes

Follow the guidelines in this document when making changes.

### 6. Test Your Changes

```bash
npm run dev
```

Test your changes thoroughly:
- Check all screen sizes (mobile, tablet, desktop)
- Test in different browsers
- Verify no console errors
- Check accessibility

### 7. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "Add testimonials section with customer feedback"
```

Commit message format:
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Keep first line under 72 characters
- Add detailed description if needed

Examples:
```
Add testimonials section to homepage

- Add Testimonials component with 6 customer reviews
- Include star ratings and customer photos
- Make fully responsive for mobile devices
```

### 8. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 9. Create a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template with details
5. Submit the pull request

## 📋 Pull Request Guidelines

### PR Title

Use a clear, descriptive title:
- ✅ "Add dark mode toggle to header"
- ✅ "Fix mobile menu not closing on navigation"
- ❌ "Update"
- ❌ "Changes"

### PR Description

Include:
1. **What** - What changes did you make?
2. **Why** - Why were these changes necessary?
3. **How** - How did you implement the changes?
4. **Testing** - How did you test the changes?
5. **Screenshots** - Include before/after screenshots for UI changes

Example:
```markdown
## Description
Added a testimonials section to showcase customer feedback.

## Motivation
Users requested social proof to build trust in the platform.

## Changes Made
- Created new Testimonials component
- Added 6 sample customer reviews
- Implemented responsive grid layout
- Added animations on scroll

## Testing
- Tested on Chrome, Firefox, Safari
- Verified responsive design on mobile/tablet
- Checked accessibility with screen reader
- No console errors

## Screenshots
[Before/After screenshots]
```

## 🎯 Code Standards

### TypeScript

- Use TypeScript for all new components
- Define interfaces for props
- Avoid `any` type unless absolutely necessary
- Use proper types for functions and variables

```typescript
// ✅ Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  // ...
};

// ❌ Bad
const Button = (props: any) => {
  // ...
};
```

### React Components

- Use functional components
- Use hooks (useState, useEffect, etc.)
- Keep components focused and small
- Export one main component per file

```typescript
// ✅ Good
import React, { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

### Styling

- Use Tailwind CSS utility classes
- Follow responsive-first approach
- Use semantic color names
- Keep consistent spacing

```typescript
// ✅ Good
<div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
    Title
  </h2>
</div>

// ❌ Bad - inline styles
<div style={{ padding: '20px', marginTop: '10px' }}>
  <h2 style={{ fontSize: '24px' }}>Title</h2>
</div>
```

### File Organization

```
components/
  ComponentName.tsx        # One component per file
  
sections/
  SectionName.tsx          # One section per file
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `Header.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase (e.g., `userName`, `isActive`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`, `API_URL`)
- **Interfaces**: PascalCase with descriptive names (e.g., `ButtonProps`, `UserData`)

## 🧪 Testing

Currently, the project doesn't have automated tests, but we plan to add them.

When testing your changes manually:

1. **Visual Testing**
   - Check all screen sizes
   - Verify colors and spacing
   - Test hover/active states

2. **Functional Testing**
   - Click all buttons
   - Test all links
   - Verify form validation
   - Check navigation

3. **Browser Testing**
   - Chrome
   - Firefox
   - Safari
   - Edge

4. **Accessibility Testing**
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast
   - ARIA labels

## 📝 Documentation

When adding features:

- Update README.md if needed
- Add JSDoc comments for complex functions
- Update DEVELOPMENT.md for new setup steps
- Include inline comments for non-obvious code

Example:
```typescript
/**
 * Formats a date string into a human-readable format
 * @param dateString - ISO date string
 * @returns Formatted date (e.g., "Jan 15, 2025")
 */
const formatDate = (dateString: string): string => {
  // Implementation
};
```

## 🚫 What Not to Do

- Don't commit `node_modules/` or `dist/`
- Don't include personal config files (.env, .vscode)
- Don't use `console.log()` in production code
- Don't copy code without attribution
- Don't make unrelated changes in the same PR
- Don't break existing functionality
- Don't ignore TypeScript errors

## 🐛 Reporting Bugs

### Before Reporting

1. Check if the bug has already been reported
2. Try to reproduce it consistently
3. Test in multiple browsers

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14]
- Device: [e.g., iPhone 15]
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
## Feature Description
Clear description of the feature

## Motivation
Why is this feature needed?

## Proposed Solution
How should it work?

## Alternatives Considered
Other approaches you've thought about

## Additional Context
Screenshots, mockups, examples
```

## 🎨 Design Contributions

If you're contributing designs:

1. Follow the existing design system
2. Use consistent colors, fonts, and spacing
3. Ensure accessibility (contrast, font size)
4. Provide mockups or prototypes
5. Consider mobile-first approach

## 🔍 Code Review Process

1. **Automated Checks** - PRs must pass any automated checks
2. **Maintainer Review** - A maintainer will review your PR
3. **Feedback** - Address any feedback or requested changes
4. **Approval** - Once approved, your PR will be merged
5. **Celebration** - You're now a contributor! 🎉

## ⚖️ Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment.

### Expected Behavior

- Be respectful and considerate
- Accept constructive criticism gracefully
- Focus on what's best for the project
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Publishing others' private information
- Other unprofessional conduct

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes for significant contributions
- README acknowledgments

## 📧 Contact

Questions? Reach out:
- Open an issue for discussion
- Contact: [@WarninGod](https://github.com/WarninGod)

---

Thank you for contributing to CentraCare! 🎉

Every contribution, no matter how small, makes a difference.
