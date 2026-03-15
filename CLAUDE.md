# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A college campus food map application built with React + Vite that helps students discover restaurants, get AI-powered recommendations, and track their food experiences.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # TypeScript type check
```

## Environment Variables (Optional)

Create `.env.local` with:
- `VITE_AMAP_KEY` - Amap (高德地图) JSAPI key (required for map)
- `VITE_AMAP_SECURITY_CODE` - Amap security key

Note: AI features are simulated (random selection), no API key required.

## Architecture

### Routing
Custom client-side routing using React state (`activeTab` in App.tsx). Pages are rendered conditionally based on the active tab state - no React Router needed.

### State Management
React built-in hooks (`useState`, `useEffect`). No external state library (Redux/Zustand) required. Data flows through props between components.

### Data Flow
- Static restaurant data in `src/data/restaurants.ts`
- Pages fetch/filter data locally - no API calls to backend
- AI features are simulated using random selection

### Pages Structure
Each page component in `src/pages/` is self-contained. They receive the active tab state and navigation callback via props from App.tsx.

### Key Dependencies
- **React 19** - UI framework
- **Vite 6** - Build tool
- **Tailwind CSS 4** - Styling
- **Motion** - Animations
- **Amap JSAPI Loader** - Map integration
- **Lucide React** - Icons

## Development Notes

- The app uses a custom tab-based navigation (not URL-based routing)
- Map component requires valid Amap API key to render
- AI features are simulated with random selection (no external API)
- Tailwind CSS v4 uses `@import "tailwindcss"` syntax in CSS

## Demo Design Philosophy

This is a **DEMO showcase project**. The goal is to demonstrate UI/UX concepts and feature ideas, not to implement production-ready logic. Therefore:

- **Simplified Data Logic**: Use static/hardcoded data or random generation instead of real filtering/recommendation algorithms
- **Mock AI Features**: AI-powered recommendations can use random selection or predefined results rather than actual API calls
- **No Backend Required**: All data is stored locally (static files or in-memory state)
- **Focus on UI**: Prioritize visual design and interactions over complex business logic

When implementing features, prefer simplicity over completeness - if a feature needs complex logic to work "properly", it's acceptable to simplify it with hardcoded data or random results for demo purposes.
