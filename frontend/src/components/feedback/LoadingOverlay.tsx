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
        "absolute inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-[inherit]",
        className
      )}
    >
      <LoadingSpinner size="lg" className="text-primary" />
      {message && (
        <p className="mt-4 text-sm font-medium text-text-secondary">
          {message}
        </p>
      )}
    </div>
  );
};
