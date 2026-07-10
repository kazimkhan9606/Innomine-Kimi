import React from "react";
import { cn } from "@/lib/utils";

export interface StatisticCardProps {
  value: string | number;
  label: string;
  description?: string;
  className?: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  value,
  label,
  description,
  className,
}) => {
  return (
    <div className={cn("p-6 rounded-xl bg-surface text-center flex flex-col justify-center", className)}>
      <div className="text-4xl font-bold tracking-tight text-text-primary mb-2">
        {value}
      </div>
      <div className="text-sm font-medium text-text-secondary mb-1">
        {label}
      </div>
      {description && (
        <p className="text-xs text-text-muted">
          {description}
        </p>
      )}
    </div>
  );
};
