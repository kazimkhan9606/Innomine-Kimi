import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { CardHover } from "@/components/motion";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <CardHover className={cn("p-6 rounded-xl bg-card border border-border", className)}>
      <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-text-secondary" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </CardHover>
  );
};
