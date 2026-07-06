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
    <CardHover className={cn("p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800", className)}>
      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </CardHover>
  );
};
