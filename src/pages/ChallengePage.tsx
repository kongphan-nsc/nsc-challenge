import React from "react";
import Layout from "@/components/templates/Layout";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Text from "@/components/atoms/Text";
import OptimizationCard from "@/components/organisms/OptimizationCard";

const challengeData = {
  requirements: {
    icon: "🎯",
    title: "Challenge Requirements",
    subtitle: "The core goals and constraints of the project.",
    features: [
      "Build a simple landing page with several key components.",
      "Use ReactJS, TypeScript, and Tailwind CSS.",
      "Content must be managed via Sanity.io.",
      "The final project must be deployed to Vercel.",
      "Code must be clean, maintainable, and follow Atomic Design.",
    ],
  },
  architecture: {
    icon: "🏗️",
    title: "Project Architecture",
    subtitle: "Built using the Atomic Design methodology.",
    features: [
      "Atoms: The smallest, indivisible UI elements (Button, Image).",
      "Molecules: Simple components composed of atoms (ImageAndText).",
      "Organisms: Complex components composed of molecules (Header, Carousel).",
      "Templates & Pages: The final layout and structure of the application.",
    ],
  },
  techStack: {
    icon: "💻",
    title: "Technology Stack",
    subtitle: "The tools and libraries used to build this project.",
    features: [
      "ReactJS & TypeScript for the core application logic.",
      "Vite as the build tool for a fast development experience.",
      "Tailwind CSS for utility-first styling.",
      "Sanity.io as the headless CMS for dynamic content.",
      "Embla Carousel for a lightweight, performant carousel.",
      "React Router for client-side navigation.",
    ],
  },
  features: {
    icon: "✨",
    title: "Features Implemented",
    subtitle: "A summary of all the key features built.",
    features: [
      "Fully Responsive Navigation and Layout",
      "Dynamic Carousel with Autoplay and Controls",
      "Reusable Image, Text, and Image & Text Components",
      "Content fully integrated with Sanity.io",
      "Polished Skeleton Loading State for a great UX",
      "Performance and Challenge summary pages",
    ],
  },
  deployment: {
    icon: "☁️",
    title: "Deployment Status",
    subtitle: "The project is configured for a seamless Vercel deployment.",
    features: [
      "Frontend and Sanity Studio deployed from a single repository.",
      "Environment variables configured for production builds.",
      "CORS configured for secure communication between services.",
      "Ready to go live!",
    ],
  },
};

const ChallengePage: React.FC = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <div className="container mx-auto px-4 py-16 space-y-12">
        <Text as="h1" className="text-center font-bold">
          Project Challenge Overview
        </Text>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <OptimizationCard {...challengeData.requirements} />
          <OptimizationCard {...challengeData.architecture} />
          <OptimizationCard {...challengeData.techStack} />
          <OptimizationCard {...challengeData.features} />
          <OptimizationCard {...challengeData.deployment} />
        </div>
      </div>
    </Layout>
  );
};

export default ChallengePage;
