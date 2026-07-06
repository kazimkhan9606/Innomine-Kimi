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
    <CardHover className={cn("p-6 flex gap-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800", className)}>
      <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </CardHover>
  );
};
