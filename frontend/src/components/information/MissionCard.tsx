import React from "react";
import { cn } from "@/lib/utils";

export interface MissionCardProps {
  mission: string;
  className?: string;
}

export const MissionCard: React.FC<MissionCardProps> = ({
  mission,
  className,
}) => {
  return (
    <div className={cn("px-8 py-12 md:px-16 md:py-20 rounded-xl bg-primary text-primary-foreground text-center flex items-center justify-center relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
      <h2 className="text-3xl md:text-5xl font-bold leading-tight md:leading-tight relative z-10 max-w-4xl tracking-tight">
        {mission}
      </h2>
    </div>
  );
};
