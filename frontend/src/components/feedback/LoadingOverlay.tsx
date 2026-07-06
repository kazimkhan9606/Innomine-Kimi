import React from "react";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "./LoadingSpinner";

export interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  className?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  message,
  className,
}) => {
  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-[inherit]",
        className
      )}
    >
      <LoadingSpinner size="lg" className="text-blue-600 dark:text-blue-500" />
      {message && (
        <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          {message}
        </p>
      )}
    </div>
  );
};
