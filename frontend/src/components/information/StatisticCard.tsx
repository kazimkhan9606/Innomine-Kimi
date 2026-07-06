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
    <div className={cn("p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-center flex flex-col justify-center", className)}>
      <div className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
        {value}
      </div>
      <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
        {label}
      </div>
      {description && (
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};
