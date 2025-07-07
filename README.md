# NCS Challenge: Fictitious Company Landing Page

This project is a fictitious company landing page built as part of an interview challenge. It demonstrates a high-quality frontend application built with a modern tech stack and following best practices for code structure and maintainability.

## ✨ Features

-   **Responsive Layout**: A fully responsive design that works on all screen sizes.
-   **Component-Based Architecture**: Built with a clear, scalable Atomic Design structure.
-   **Dynamic Content**: All page content is managed through a headless CMS (Sanity.io).
-   **Key Components**:
    -   Simple Navigation Element
    -   Carousel / Hero Section
    -   Reusable Image & Text Components
    -   Standard Footer

## 🛠 Tech Stack

-   **Frontend**: ReactJS, TypeScript
-   **Styling**: Tailwind CSS
-   **Build Tool**: Vite
-   **CMS**: Sanity.io
-   **Deployment**: Vercel (Next Step)

## 🚀 Getting Started

There are two parts to this project: the **React frontend** and the **Sanity Studio CMS**. Both need to be running for local development.

### 1. Frontend

The frontend is a standard Vite-powered React application.

```bash
# Navigate to the project root
# cd ncs-challenge

# Install dependencies
yarn install

# Run the development server (usually on http://localhost:5173)
yarn dev
```

### 2. Sanity Studio (CMS)

The Sanity Studio is a separate application within the `studio/` directory for managing the website's content.

```bash
# Navigate to the studio directory
cd studio

# Install dependencies
yarn install

# Run the studio development server (usually on http://localhost:3333)
yarn dev
```

### 3. Connecting Sanity to the Frontend

For the frontend to fetch data from the CMS, you must authorize your local development URL.

1.  **Go to your Sanity Project API settings:** [https://www.sanity.io/manage](https://www.sanity.io/manage)
2.  Select your project and go to the **API** tab.
3.  Under **CORS Origins**, add the URL of your running frontend (e.g., `http://localhost:5173`) and save.

## 🏗 Project Structure

The project follows the **Atomic Design** methodology to ensure components are organized, reusable, and easy to maintain.

```
src
├── components
│   ├── atoms       # Smallest reusable components (Button, Image, Text)
│   ├── molecules   # Combinations of atoms (ImageAndText, CarouselSlide)
│   ├── organisms   # Larger sections (Header, Footer, Carousel)
│   └── templates   # Page layouts (Layout)
├── pages           # Main application pages (LandingPage)
└── sanity          # Sanity client configuration
```

## 🚀 Performance Optimizations

This project includes a suite of performance optimizations to ensure a fast and smooth user experience, targeting a Lighthouse score of 90+.

-   **Image Optimization**:
    -   Leverages Sanity.io's image pipeline to serve perfectly sized images.
    -   Delivers next-gen formats like WebP for smaller file sizes.
    -   Implements native lazy loading for offscreen images to speed up initial load.

-   **Code Splitting**:
    -   Uses `React.lazy` and `Suspense` to split code by route.
    -   Reduces the initial JavaScript bundle size, improving Time to Interactive.

-   **Component Memoization**:
    -   Utilizes `React.memo` on key components to prevent unnecessary re-renders.
    -   Improves runtime performance and UI responsiveness.

-   **Production-Ready Asset Delivery**:
    -   The application is configured to be deployed on Vercel, which automatically handles:
        -   Text compression (Gzip/Brotli).
        -   Global CDN for low-latency asset delivery.
        -   Optimized HTTP protocols and caching.

## ✅ Next Steps

The final step of the challenge is to deploy the entire project to **Vercel**. Vercel can be configured to deploy both the frontend application and the Sanity Studio from the same repository.
