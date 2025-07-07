import React, { useEffect, useState } from "react";
import Layout from "@/components/templates/Layout";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ImageAndText from "@/components/molecules/ImageAndText";
import Text from "@/components/atoms/Text";
import Carousel from "@/components/organisms/Carousel";
import CarouselSlide from "@/components/molecules/CarouselSlide";
import { client } from "@/sanity/client";
import type { Image } from "@sanity/types";
import LandingPageSkeleton from "@/components/organisms/LandingPageSkeleton";

interface LandingPageData {
  title: string;
  carouselSlides: {
    title: string;
    description: string;
    image: Image;
  }[];
  contentBlocks: {
    title: string;
    description: string;
    image: Image;
    imagePosition: "left" | "right";
    ctaText?: string;
  }[];
}

const LandingPage: React.FC = () => {
  const [pageData, setPageData] = useState<LandingPageData | null>(null);

  useEffect(() => {
    const query = `*[_type == "landingPage"][0]{
      title,
      carouselSlides[]{
        title,
        description,
        image,
      },
      contentBlocks[]{
        title,
        description,
        image,
        imagePosition,
        ctaText,
      }
    }`;

    client.fetch(query).then((data: LandingPageData) => {
      setTimeout(() => setPageData(data), 1500); // Simulate network delay for testing
    });
  }, []);

  if (!pageData) {
    return <LandingPageSkeleton />;
  }

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <div className="container mx-auto px-4 py-16 flex flex-col gap-[16px]">
        <Text as="h1" className="text-center">
          {pageData.title}
        </Text>

        {pageData.carouselSlides && (
          <Carousel
            slides={pageData.carouselSlides.map((slide) => (
              <CarouselSlide
                key={slide.title}
                title={slide.title}
                description={slide.description}
                image={slide.image}
              />
            ))}
          />
        )}

        {pageData.contentBlocks &&
          pageData.contentBlocks.map((block, index) => (
            <ImageAndText
              key={index}
              title={block.title}
              description={block.description}
              image={block.image}
              imagePosition={block.imagePosition}
              ctaText={block.ctaText}
              onCtaClick={() => alert(`${block.ctaText} clicked!`)}
            />
          ))}
      </div>
    </Layout>
  );
};

export default LandingPage;
