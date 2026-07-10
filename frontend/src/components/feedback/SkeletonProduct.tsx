import React from "react";
import { cn } from "@/lib/utils";

export const SkeletonProduct: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex flex-col group animate-pulse", className)}>
      <div className="w-full aspect-[4/5] bg-surface rounded-xl mb-4"></div>
      <div className="flex justify-between items-start mb-2">
        <div className="w-2/3 h-5 bg-surface rounded"></div>
        <div className="w-1/4 h-5 bg-surface rounded"></div>
      </div>
      <div className="w-1/3 h-4 bg-surface rounded mb-3"></div>
      <div className="w-full h-10 bg-surface rounded-xl mt-auto"></div>
    </div>
  );
};
