import React from "react";
import Text from "@/components/atoms/Text";

type OptimizationCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  features: string[];
};

const OptimizationCard: React.FC<OptimizationCardProps> = ({
  icon,
  title,
  subtitle,
  features,
}) => {
  return (
    <div className="bg-surface p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <Text as="span" className="text-2xl">
          {icon}
        </Text>
        <div>
          <Text as="h3" className="text-xl font-bold">
            {title}
          </Text>
          <Text as="p" className="text-on-surface/60">
            {subtitle}
          </Text>
        </div>
      </div>
      <ul className="space-y-2 list-disc list-inside">
        {features.map((feature, index) => (
          <li key={index} className="text-on-surface/80">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizationCard;
