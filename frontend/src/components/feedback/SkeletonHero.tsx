import React from "react";
import { cn } from "@/lib/utils";

export const SkeletonHero: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("w-full h-[500px] md:h-[600px] bg-slate-100 dark:bg-slate-800 animate-pulse rounded-2xl flex flex-col justify-center px-8 md:px-16", className)}>
      <div className="w-24 h-8 bg-slate-200 dark:bg-slate-700 rounded-full mb-6"></div>
      <div className="w-3/4 md:w-1/2 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4"></div>
      <div className="w-2/3 md:w-2/5 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg mb-8"></div>
      <div className="w-full md:w-1/2 h-20 bg-slate-200 dark:bg-slate-700 rounded-lg mb-8"></div>
      <div className="flex gap-4">
        <div className="w-32 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
        <div className="w-32 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl"></div>
      </div>
    </div>
  );
};
