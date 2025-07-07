import React from "react";
import Text from "@/components/atoms/Text";

type MetricCardProps = {
  label: string;
  value: string;
  target: string;
};

const MetricCardComponent: React.FC<MetricCardProps> = ({
  label,
  value,
  target,
}) => {
  return (
    <div className="bg-surface p-4 rounded-lg shadow-lg flex flex-col gap-2">
      <Text as="h3" className="text-lg text-on-surface/80">
        {label}
      </Text>
      <div className="flex justify-between items-baseline">
        <Text as="p" className="text-3xl font-bold text-on-surface">
          {value}
        </Text>
        <Text as="p" className="text-sm text-on-surface/60">
          {target}
        </Text>
      </div>
    </div>
  );
};

export const MetricCard = React.memo(MetricCardComponent);
export default MetricCard;
