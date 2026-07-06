import React from "react";
import { cn } from "@/lib/utils";

export interface TimelineCardProps {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  date,
  title,
  description,
  isLast = false,
  className,
}) => {
  return (
    <div className={cn("flex gap-6 relative", className)}>
      {!isLast && (
        <div className="absolute top-8 bottom-[-24px] left-[11px] w-0.5 bg-slate-100 dark:bg-slate-800" />
      )}
      <div className="w-6 h-6 shrink-0 mt-1 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600 dark:bg-blue-500 z-10" />
      <div className="pb-8">
        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
          {date}
        </div>
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
