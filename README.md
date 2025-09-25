# NC(SMC)² - Math Competition Platform

A modern, full-stack web application for the **North Carolina School of Science and Mathematics Math Club Competition**, an annual mathematics competition that brings together middle school students across North Carolina. This platform serves as the complete digital hub for registration, competition management, practice materials, and results.

## 🎯 Project Overview

NC(SMC)² (pronounced "NC-SMC-squared") is a comprehensive competition management system built to handle all aspects of a statewide academic competition. The platform demonstrates modern web development practices, responsive design, and scalable architecture for handling hundreds of participants.

### Key Features

- **Dynamic Competition Management**: Real-time registration system with participant tracking
- **Interactive Practice Portal**: PDF-based problem sets with navigation and year selection
- **Responsive Design**: Mobile-first approach ensuring accessibility across all devices
- **Competition Day Interface**: Live competitor listings with search functionality
- **Administrative Dashboard**: CSV-based participant management and team assignments
- **Sponsor Integration**: Professional sponsor showcase and partnership management

## 🏗️ Architecture & Technology Stack

### Frontend

- **Next.js 15.5** with App Router for modern React development
- **TypeScript** for type safety and developer experience
- **Tailwind CSS 4.1** for utility-first styling and custom theming
- **React PDF** for interactive document viewing
- **React Responsive Masonry** for dynamic layout management

### Backend & Data

- **Server-Side Rendering** with Next.js API routes
- **CSV Processing** with `csv-parse` for participant data management
- **File System Operations** for dynamic content serving

### Development Tooling

- **ESLint & Prettier** with pre-commit hooks via Husky
- **Turbopack** for fast development builds
- **TypeScript strict mode** for enhanced code quality

### Deployment & Infrastructure

- **Docker containerization** with multi-stage builds
- **Kubernetes deployment** with rolling updates
- **Nginx** reverse proxy configuration
- **Custom domain** with SSL/TLS termination

## 🎨 Design System

The application features a carefully crafted design system with:

- **Custom Color Palette**:
    - Primary Blue (`#346094`) - Main brand color
    - Secondary colors for visual hierarchy (Yellow `#f4c300`, Orange `#d57e00`, Purple `#853175`)
- **Typography**: Geist font family for modern, readable text
- **Responsive Layout**: Mobile-first design with breakpoint-specific optimizations
- **Accessibility**: High contrast ratios and semantic HTML structure

## 📱 Key Components & Features

### Competition Registration System

- Google Forms integration for seamless registration
- Team-based registration with automatic ID generation
- Email validation and parent contact management
- Registration deadline enforcement

### Practice Materials Portal

- Multi-year problem set archive (2023, 2025)
- Interactive PDF viewers with page navigation
- Problem categories: Speed Round, Accuracy Round, Team Round, Solutions
- Downloadable resources for offline practice

### Live Competition Interface

- Real-time participant search and filtering
- Team assignment display
- Zoom integration for virtual competition management
- Competition schedule with detailed timing

### Administrative Features

- CSV-based participant data management
- Automated team shuffling for fairness
- Competition statistics and reporting
- Sponsor management and display

## 🔧 Technical Highlights

### Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Splitting**: Automatic code splitting for optimal loading
- **Server-Side Rendering**: Fast initial page loads with SEO benefits
- **Static Asset Optimization**: Efficient caching strategies

### Development Experience

- **Hot Module Replacement**: Instant development feedback
- **TypeScript Integration**: Full type safety across the application
- **Code Quality**: Automated linting and formatting
- **Git Hooks**: Pre-commit validation for code quality

### Scalability Features

- **Containerized Deployment**: Docker for consistent environments
- **Kubernetes Orchestration**: Scalable container management
- **Load Balancing**: Nginx configuration for high availability
- **Database-Ready**: Architecture prepared for future database integration

## 📊 Competition Metrics

The platform successfully manages:

- **150+ participants** from across North Carolina
- **Multiple competition rounds**: Speed (30 problems), Accuracy (10 problems), Team (20 problems)
- **Sponsor partnerships**: Jane Street, Art of Problem Solving
- **Prize distribution**: Trophies, coupons, branded merchandise

## 🎓 Educational Impact

This project demonstrates proficiency in:

- **Full-Stack Development**: End-to-end application architecture
- **Modern React Patterns**: Hooks, Server Components, App Router
- **DevOps Practices**: Containerization, CI/CD, monitoring
- **UI/UX Design**: User-centered design principles
- **Project Management**: Real-world client requirements and deadlines
- **Performance Engineering**: Optimization for scale and speed

The NC(SMC)² platform showcases the ability to build production-ready applications that serve real educational communities, combining technical excellence with meaningful social impact in STEM education.
