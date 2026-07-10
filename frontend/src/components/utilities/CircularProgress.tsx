import React from "react";
import { cn } from "@/lib/utils";

export interface CircularProgressProps {
  value?: number; // if undefined, it's indeterminate
  size?: "sm" | "md" | "lg" | "xl";
  trackColor?: string;
  indicatorColor?: string;
  className?: string;
}

export function CircularProgress({
  value,
  size = "md",
  trackColor = "text-surface",
  indicatorColor = "text-primary",
  className,
}: CircularProgressProps) {
  
  const isIndeterminate = value === undefined;
  const percentage = isIndeterminate ? 0 : Math.min(100, Math.max(0, value));

  const sizeStyles = {
    sm: { svg: "w-4 h-4", strokeWidth: 3 },
    md: { svg: "w-8 h-8", strokeWidth: 4 },
    lg: { svg: "w-12 h-12", strokeWidth: 4 },
    xl: { svg: "w-16 h-16", strokeWidth: 5 },
  };

  const { svg, strokeWidth } = sizeStyles[size];
  const radius = 20 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = isIndeterminate ? 0 : circumference - (percentage / 100) * circumference;

  return (
    <div
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <svg
        className={cn(svg, isIndeterminate && "animate-spin")}
        viewBox="0 0 40 40"
      >
        <circle
          className={trackColor}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx="20"
          cy="20"
        />
        <circle
          className={cn(
            indicatorColor,
            isIndeterminate ? "opacity-75" : "transition-all duration-300 ease-in-out"
          )}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isIndeterminate ? circumference * 0.25 : offset}
          r={radius}
          cx="20"
          cy="20"
          transform="rotate(-90 20 20)"
        />
      </svg>
    </div>
  );
}
