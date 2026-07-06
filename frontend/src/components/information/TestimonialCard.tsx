import React from "react";
import { cn } from "@/lib/utils";
import { CardHover } from "@/components/motion";

export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorRole,
  authorAvatar,
  className,
}) => {
  return (
    <CardHover
      className={cn(
        "p-8 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-6 text-6xl text-slate-100 dark:text-slate-800 select-none leading-none opacity-50 font-serif">
        "
      </div>
      <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-8 relative z-10">
        "{quote}"
      </p>
      <div className="flex items-center gap-4 relative z-10">
        {authorAvatar ? (
          <img
            src={authorAvatar}
            alt={authorName}
            className="w-12 h-12 rounded-full object-cover border border-slate-100 dark:border-slate-800"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold">
            {authorName.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-slate-900 dark:text-white">
            {authorName}
          </div>
          {authorRole && (
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {authorRole}
            </div>
          )}
        </div>
      </div>
    </CardHover>
  );
};
