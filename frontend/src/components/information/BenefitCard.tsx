import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { CardHover } from "@/components/motion";

export interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <CardHover className={cn("p-6 flex gap-4 rounded-xl bg-card border border-border", className)}>
      <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-text-primary mb-1">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </CardHover>
  );
};
