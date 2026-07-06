import React from "react";
import { cn } from "@/lib/utils";

export interface HighlightCardProps {
  title: string;
  highlightText: string;
  description: string;
  className?: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  highlightText,
  description,
  className,
}) => {
  return (
    <div className={cn("p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/20", className)}>
      <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
        {title}
      </h3>
      <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
        {highlightText}
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};
