import React from "react";
import { cn } from "@/lib/utils";

export const SkeletonProduct: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex flex-col group animate-pulse", className)}>
      <div className="w-full aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-2xl mb-4"></div>
      <div className="flex justify-between items-start mb-2">
        <div className="w-2/3 h-5 bg-slate-100 dark:bg-slate-800 rounded"></div>
        <div className="w-1/4 h-5 bg-slate-100 dark:bg-slate-800 rounded"></div>
      </div>
      <div className="w-1/3 h-4 bg-slate-100 dark:bg-slate-800 rounded mb-3"></div>
      <div className="w-full h-10 bg-slate-100 dark:bg-slate-800 rounded-xl mt-auto"></div>
    </div>
  );
};
