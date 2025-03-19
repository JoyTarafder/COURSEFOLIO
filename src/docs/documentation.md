# Course Folio - Project Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Architecture](#project-architecture)
3. [Component Structure](#component-structure)
4. [Theming System](#theming-system)
5. [Data Management](#data-management)
6. [Routing](#routing)
7. [UI/UX Design System](#uiux-design-system)
8. [Component Documentation](#component-documentation)
9. [Development Guide](#development-guide)
10. [Performance Optimization](#performance-optimization)
11. [Deployment](#deployment)
12. [Future Enhancements](#future-enhancements)

---

## 1. Project Overview

Course Folio is a modern web application built with React and TypeScript that serves as a platform for educational resources. The application provides a centralized hub for:

- **Course Files**: Access to educational course materials and resources
- **Academic Books**: Collection of reference books and reading materials
- **Source Code**: Programming examples and starter projects for developers

The application features a responsive design with a dark/light theme toggle, search functionality, and a user-friendly interface designed for both desktop and mobile users.

### Key Features

- **Responsive Layout**: Adapts to different screen sizes and devices
- **Theme Toggling**: Dark and light mode support
- **Resource Categories**: Organized sections for courses, books, and code
- **Search Functionality**: Find specific resources across all categories
- **Modern UI**: Clean and visually appealing interface with animations and transitions
- **Download Support**: Direct download links for resources

---

## 2. Project Architecture

The project is built with the following technology stack:

- **React**: UI library for building component-based interfaces
- **TypeScript**: Static typing for improved code quality and developer experience
- **TailwindCSS**: Utility-first CSS framework for styling
- **React Icons**: Icon library for UI elements
- **React Context API**: State management for theme and potentially other global states

### Project Structure

```
src/
├── components/           # UI components
├── context/              # React context for state management
├── data/                 # Static data and mock APIs
├── types/                # TypeScript type definitions
├── App.tsx               # Main application component
├── index.tsx             # Entry point
└── styles/               # Global styles and Tailwind configuration
```

---

## 3. Component Structure

The application follows a component-based architecture with several key structural elements:

### Layout Components

- **Layout**: Main wrapper component that applies global styles and structure
- **Header**: Navigation bar with logo, navigation links, and theme toggle
- **Footer**: Contains links, copyright info, and additional navigation

### Page Components

- **Hero**: Landing page banner with main call-to-action
- **Courses**: Display of featured course materials
- **Books**: Display of featured academic books
- **Cards**: Display of featured source code resources

### List Components

- **AllCourseFiles**: Complete listing of course materials
- **AllBooks**: Complete listing of academic books
- **AllCards**: Complete listing of source code resources

### UI Components

- **WelcomePopup**: Modal that appears when users first visit the site
- **Settings**: User preference controls including theme settings
- **SearchResults**: Display component for search functionality

---

## 4. Theming System

The application implements a theming system using React Context API to provide dark and light mode options.

### ThemeContext

Located in `src/context/ThemeContext.tsx`, this context handles:

- Theme state management (dark/light)
- User preference persistence using local storage
- Theme toggle functionality
- Automatic theme detection based on system preferences

### Theme Implementation

The theming utilizes Tailwind CSS dark mode, which is applied using the `dark:` prefix in class names. When the theme is toggled, the `dark` class is added to the HTML document root element.

---

## 5. Data Management

The application uses static data files structured with TypeScript interfaces for type safety.

### Data Structure

- **`courseFilesData.ts`**: Contains information about course materials
- **`booksData.ts`**: Contains information about academic books
- **`cardsData.ts`**: Contains information about source code examples
- **`searchData.ts`**: Provides search functionality across all data

### Data Models

Each data file implements specific TypeScript interfaces to ensure data consistency:

```typescript
// Example from cardsData.ts
export interface Card {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
  technologies: string[];
  fileType: string;
  lastUpdated: string;
  size: string;
  downloadUrl: string;
}
```

---

## 6. Routing

The application uses a simple custom routing system based on React state rather than a dedicated router library.

### State-Based Routing

Routing is managed through the `currentPage` state in `App.tsx`:

```typescript
const [currentPage, setCurrentPage] = useState<string>("home");

// Function to navigate between pages
const navigateTo = (page: string) => {
  setCurrentPage(page);
  // Scroll to top when navigating between pages
  window.scrollTo(0, 0);
};
```

This function is passed to components that need navigation capabilities, allowing them to trigger route changes.

### Available Routes

- **`/`**: Home page with featured sections
- **`/courses`**: Complete course files listing
- **`/books`**: Complete books listing
- **`/source-code`**: Complete source code listing

---

## 7. UI/UX Design System

The application implements a consistent design system with several key elements:

### Color Palette

- **Primary Colors**: Blue and indigo gradient (`from-blue-600 to-indigo-600`)
- **Accent Colors**: Purple (`purple-500`) for interactive elements
- **Background**: White (light mode) / Dark blue-gray (dark mode)
- **Text**: Dark gray (light mode) / White and light gray (dark mode)

### Typography

- **Headings**: Font sizes ranging from text-xl to text-5xl with font-bold
- **Body Text**: Base text size with text-gray-600 (light) / text-gray-300 (dark)
- **Special Text**: Gradient text for emphasis

### Animation System

The application uses several animation classes:

- **`animate-fade-in`**: Fade-in animations with delays
- **`animate-blob`**: Subtle movement for decorative elements
- **`animate-pulse`**: Pulsing effect for icons and attention areas
- **`transition-all`**: Smooth transitions for hover effects

### UI Components

- **Cards**: Consistent card design with hover effects and shadow transitions
- **Buttons**: Gradient backgrounds with hover states
- **Badges**: Small pill-shaped indicators for tags and statuses
- **Icons**: React Icons (primarily Font Awesome) used consistently

---

## 8. Component Documentation

### Cards Component

The Cards component displays featured source code resources on the home page.

**File**: `src/components/Cards.tsx`

**Props**:

- `navigateTo: (page: string) => void`: Function to navigate to different pages

**Key Features**:

- Displays the first 3 source code cards from the data
- Each card shows technologies, file type, last updated info
- Includes icon rendering with dynamic color handling
- Implements hover animations and transitions
- "Browse All" button to navigate to the full source code listing

**Visual Elements**:

- Decorative blob animations in the background
- Grid pattern for texture
- Glass-morphism effect on cards
- Gradient accents for visual interest

**Usage Example**:

```tsx
<Cards navigateTo={navigateTo} />
```

### Header Component

**File**: `src/components/Header.tsx`

Header contains navigation links, search functionality, and theme toggle.

### Hero Component

**File**: `src/components/Hero.tsx`

Hero section serves as the main banner for the application with a call to action.

### Layout Component

**File**: `src/components/Layout.tsx`

Wrapper component that provides consistent layout structure for all pages.

---

## 9. Development Guide

### Setup and Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/username/course-folio.git
   cd course-folio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

### Development Workflow

1. **Component Creation**

   - Create new components in the `src/components` directory
   - Follow the established design system for consistency
   - Implement TypeScript interfaces for props

2. **Adding Data**

   - Extend data files in the `src/data` directory
   - Ensure new data follows established interfaces

3. **Styling Guidelines**

   - Use Tailwind utility classes for styling
   - Follow established color schemes and spacing
   - Implement responsive design using Tailwind's breakpoint system
   - Maintain dark/light theme compatibility with `dark:` prefixed classes

4. **Theme Integration**
   - Ensure all new components support both light and dark themes
   - Test appearance in both theme modes

---

## 10. Performance Optimization

The application implements several performance optimization techniques:

### Code Optimization

- **Component Memoization**: Where appropriate to prevent unnecessary re-renders
- **Conditional Rendering**: Only render components when needed
- **Lazy Loading**: For larger component sections

### Asset Optimization

- **SVG Icons**: Using React Icons for vector-based, scalable icons
- **Resource Management**: Limiting initial load to featured items
- **Animation Performance**: Using CSS transitions instead of JavaScript for animations
- **CSS Utility Classes**: Leveraging Tailwind's tree-shaking for minimal CSS

---

## 11. Deployment

The application is designed to be deployed as a static site to platforms like Vercel or Netlify.

### Build Process

1. **Create production build**

   ```bash
   npm run build
   ```

2. **Test the production build locally**

   ```bash
   npx serve -s build
   ```

3. **Deploy to hosting platform**

   The project includes configuration for automatic deployment via GitHub integration with Vercel.

---

## 12. Future Enhancements

Potential future improvements for the application:

### Functionality Enhancements

- **Authentication**: User accounts and personalized experiences
- **Backend Integration**: Moving from static data to API-driven content
- **Favorites**: Allow users to bookmark or favorite resources
- **Comment System**: Enable discussions on resources
- **Resource Upload**: Allow authorized users to contribute resources

### Technical Enhancements

- **State Management**: Integration of a more robust state management solution for scaling
- **Testing**: Comprehensive test suite with Jest and React Testing Library
- **Accessibility**: Enhanced a11y support including screen reader optimizations
- **Internationalization**: Multi-language support
- **PWA Features**: Offline support and installability

---

## Support and Contact

For support or questions, contact the developer:

- **Developer**: Joy Tarafder
- **Portfolio**: [https://my-protfolio-jt.vercel.app/](https://my-protfolio-jt.vercel.app/)

---

_Documentation created: June 2023_
_Last updated: October 2023_
