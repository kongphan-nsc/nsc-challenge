import React from "react";
import Layout from "@/components/templates/Layout";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Skeleton from "@/components/atoms/Skeleton";

const ImageAndTextSkeleton: React.FC<{ imagePosition?: "left" | "right" }> = ({
  imagePosition = "left",
}) => {
  const image = <Skeleton className="w-full h-64 md:h-full" />;
  const text = (
    <div className="p-8 space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-10 w-32 mt-4" />
    </div>
  );

  const gridClasses =
    "grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface rounded-lg overflow-hidden shadow-xl";

  return (
    <div className={gridClasses}>
      {imagePosition === "left" ? (
        <>
          <div>{image}</div>
          {text}
        </>
      ) : (
        <>
          {text}
          <div className="order-first md:order-last">{image}</div>
        </>
      )}
    </div>
  );
};

const LandingPageSkeleton: React.FC = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <div className="container mx-auto px-4 py-16 flex flex-col gap-24">
        <Skeleton className="h-12 w-3/4 md:w-1/2 mx-auto" />
        <Skeleton className="h-96 w-full rounded-lg" />
        <ImageAndTextSkeleton />
        <ImageAndTextSkeleton imagePosition="right" />
      </div>
    </Layout>
  );
};

export default LandingPageSkeleton;
