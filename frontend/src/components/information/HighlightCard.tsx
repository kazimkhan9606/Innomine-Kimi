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
    <div className={cn("p-8 rounded-xl bg-primary/10", className)}>
      <h3 className="text-xl font-medium text-text-primary mb-2">
        {title}
      </h3>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
        {highlightText}
      </div>
      <p className="text-text-secondary text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};
