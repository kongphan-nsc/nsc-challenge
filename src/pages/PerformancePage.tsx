import React from "react";
import Layout from "@/components/templates/Layout";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Text from "@/components/atoms/Text";
import MetricCard from "@/components/molecules/MetricCard";
import OptimizationCard from "@/components/organisms/OptimizationCard";

const performanceData = {
  metrics: [
    { label: "Lighthouse Performance", value: "90+", target: "Target: > 85" },
    {
      label: "First Contentful Paint",
      value: "< 1.5s",
      target: "Target: < 2.0s",
    },
    {
      label: "Largest Contentful Paint",
      value: "< 2.5s",
      target: "Target: < 3.0s",
    },
    { label: "Time to Interactive", value: "< 3.0s", target: "Target: < 4.0s" },
  ],
  optimizations: [
    {
      icon: "🖼️",
      title: "Image Optimization",
      subtitle: "Serving optimized images via Sanity.io",
      features: [
        "Next-gen WebP format delivery",
        "On-the-fly image resizing and quality adjustments",
        "Native browser lazy loading for offscreen images",
        "Eager loading for critical above-the-fold images",
      ],
    },
    {
      icon: "🧩",
      title: "Component Memoization",
      subtitle: "Preventing unnecessary re-renders with React.memo",
      features: [
        "Wrapped key components in React.memo",
        "Prevents re-renders when props have not changed",
        "Improves UI responsiveness on complex pages",
      ],
    },
    {
      icon: "✂️",
      title: "Code Splitting",
      subtitle: "Reducing initial bundle size with React.lazy",
      features: [
        "Route-based code splitting implemented",
        "Users only download the code for the page they visit",
        "Faster initial page load and time to interactive",
        "Utilizes Suspense for a smooth loading experience",
      ],
    },
    {
      icon: "⚡️",
      title: "Asset Delivery",
      subtitle: "Optimized delivery via Production Hosting",
      features: [
        "Automatic text compression (Gzip/Brotli) on Vercel",
        "Assets served via a global CDN for low latency",
        "Optimized HTTP/2 protocol for parallel requests",
        "Fine-tuned caching headers for static assets",
      ],
    },
  ],
};

const PerformancePage: React.FC = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <div className="container mx-auto px-4 py-16 space-y-12">
        <div className="space-y-4">
          <Text as="h1" className="text-center font-bold">
            Performance Optimizations
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceData.metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {performanceData.optimizations.map((opt) => (
            <OptimizationCard key={opt.title} {...opt} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PerformancePage;
