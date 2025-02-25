# CLAUDE.md - Development Guide

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting
- `npm run lint --fix` - Fix auto-fixable lint issues

## Code Style
- **Imports**: Group imports by: 1) React/Next.js, 2) Third-party, 3) Local components, 4) Assets
- **Components**: Use functional components with named exports
- **State Management**: Prefer React hooks (`useState`, `useEffect`)
- **Naming**: 
  - Components: PascalCase (e.g., `NavBar.js`)
  - Functions/variables: camelCase
  - Files: kebab-case for pages, PascalCase for components
- **File Structure**: Follow Next.js App Router conventions with page.js files
- **Comments**: Use TODO format for pending work items
- **Paths**: Use `@/*` alias for src directory imports when possible
- **Images**: Import and reference image assets directly in components

## Supabase Integration
The project uses Supabase for backend functionality. Follow established patterns when working with the Supabase client.