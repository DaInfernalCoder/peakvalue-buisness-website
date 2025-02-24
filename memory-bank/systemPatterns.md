# System Patterns

## Architecture
- Next.js-based web application
- File-based routing structure
- Component-based architecture

## Technical Decisions
### Frontend Framework
- Next.js for server-side rendering and optimal performance
- React components for modular development
- CSS modules for component-specific styling

### Integration Points
- Calendly for consultation booking system
- Supabase for contact form and waitlist management
- Image optimization through Next.js Image component

### Component Structure
```
src/
├── app/         # Pages and routing
├── components/  # Reusable components
└── styles/      # Global styles
```

## Design Patterns
### Component Organization
- Page-level components in app/ directory
- Shared components in components/ directory
- Feature-specific components co-located with features

### State Management
- React hooks for local state
- Server-side data fetching where applicable
- Form state management for contact and consultation forms

### Layout System
- Consistent layout wrapper components
- Responsive design patterns
- Mobile-first approach

## Component Relationships
### Core Components
- Header/Navigation
- Footer
- Layout wrapper
- Page templates

### Feature Components
- Process steps
- Business listings
- Consultation booking
- Contact forms
- Company showcase

### Shared Components
- Buttons
- Form elements
- Section containers
- Loading states

## Best Practices
- Mobile-responsive design
- SEO optimization
- Performance optimization
- Accessibility standards
- Clean code structure
