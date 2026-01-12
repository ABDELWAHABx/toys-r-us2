# AGENTS.md

This document provides guidelines for agentic coding agents working in this repository.

## Project Overview

This is a Vite + React + TypeScript project for a "Duck Savior" landing page using Tailwind CSS for styling and Supabase for backend services.

## Build Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint

# Run type checking
npm run typecheck
```

**Single file/type checking:**
```bash
# Type check specific file
npx tsc --noEmit --project tsconfig.app.json src/App.tsx

# Lint specific file
npx eslint src/App.tsx
```

## Code Style Guidelines

### TypeScript
- Enable `strict: true` in TypeScript config
- Always define explicit interfaces for component props
- Use TypeScript generics where appropriate
- Enable `noUnusedLocals: true` and `noUnusedParameters: true`
- Prefer interfaces over types for object definitions
- Use proper typing for event handlers (React.FormEvent, React.ChangeEvent, etc.)

### React
- Use functional components with TypeScript interfaces for props
- Export components as default exports
- Use named exports for utilities and hooks
- Follow React Hooks rules (only call hooks at top level)
- Use optional chaining (?.) and nullish coalescing (??) for safe access
- Use `React.FC<Props>` or explicit function signature for component typing

### Imports
- Use absolute imports (configured via TypeScript path aliases if present)
- Group imports in this order:
  1. React imports
  2. Third-party library imports
  3. Relative imports (components, utilities)
- Use named imports for libraries: `import { useState } from 'react'`
- Avoid default imports for icon libraries: `import { Menu, X } from 'lucide-react'`

### Naming Conventions
- **Components**: PascalCase (Header, ProductComponents)
- **Files**: PascalCase for components (Header.tsx), camelCase for utilities
- **Variables/Constants**: camelCase
- **Interfaces**: PascalCase with "Props" suffix for component props
- **Event handlers**: prefix with "on" or "handle" (onClick, handleSubmit)
- **Boolean variables**: use prefix like isOpen, hasError, canSubmit

### Formatting
- Use Prettier with default settings (2 spaces, single quotes)
- Use Tailwind CSS class ordering:布局 → 位置 → 尺寸 → 颜色 → 字体 → 其他
- Keep lines under 100 characters when reasonable
- Use template literals for string concatenation
- Destructure props in component signatures

### Tailwind CSS
- Use consistent color palette defined in tailwind.config.js
- Use responsive prefixes (sm:, md:, lg:, xl:)
- Use hover/focus states for interactive elements
- Prefer utility classes over custom CSS when possible
- Use `className` for React elements, not `class`

### Error Handling
- Use optional chaining for potential null/undefined values
- Implement proper error boundaries for component failures
- Use TypeScript non-null assertion (!) sparingly and only when value is guaranteed
- Handle promise rejections with try/catch in async functions
- Display user-friendly error messages in UI

### File Organization
- Components go in `src/components/` directory
- Use index.ts for barrel exports when appropriate
- Keep related files close together
- Main entry point: `src/main.tsx`
- App component: `src/App.tsx`

### Best Practices
- Keep components small and focused on single responsibility
- Extract reusable logic into custom hooks
- Use React.memo() for expensive components
- Follow DRY principle (Don't Repeat Yourself)
- Write self-documenting code; add comments only for complex logic
- Avoid premature optimization; profile first

## Linting & Type Checking

The project uses ESLint with TypeScript-ESLint plugin. Key rules:
- `react-hooks/exhaustive-deps` for hook dependencies
- `react-refresh/only-export-components` for HMR compatibility
- `noUnusedLocals` and `noUnusedParameters` enabled
- `noFallthroughCasesInSwitch` enabled

Run `npm run lint` before committing to catch issues early.

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Backend**: Supabase JS client
- **Lint**: ESLint 9 with TypeScript support
- **Type Checking**: TypeScript 5 strict mode
