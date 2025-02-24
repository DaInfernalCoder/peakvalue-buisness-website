# Technical Context

## Development Environment
### Core Technologies
- Node.js
- Next.js 14.0.4
- React 18
- Bootstrap 5.3.2

### Package Dependencies
#### UI Components & Animation
- react-bootstrap: UI component library
- animate.css: Animation library
- swiper: Carousel/slider component
- react-tabs: Tab component
- react-accessible-accordion: Accordion component
- lightbox.js-react: Image lightbox
- react-modal-video: Video modal component
- react-countup: Number animation

#### Development Tools
- ESLint: Code linting
- Next.js ESLint config

## Development Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Planned Integrations
### Calendly
- Purpose: Consultation booking system
- Integration Method: Embedded widget
- Requirements: Calendly account and API access

### Supabase
- Purpose: Contact form and waitlist management
- Integration Method: Supabase client library
- Requirements: 
  - Supabase project setup
  - Database schema design
  - API keys configuration

## Technical Constraints
### Performance
- Server-side rendering for SEO
- Image optimization
- Responsive design requirements

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browser optimization

### Security
- Form validation
- API key protection
- Data encryption for sensitive information

## Dependencies Management
### Version Control
- Git for source control
- .gitignore configuration for large files
- Branch management strategy

### Build Process
- Next.js build optimization
- Asset optimization
- Environment variable management

## Deployment
### Requirements
- Node.js runtime
- Environment variables configuration
- SSL certificate
- Domain setup

### Monitoring
- Error tracking
- Performance monitoring
- Analytics integration
