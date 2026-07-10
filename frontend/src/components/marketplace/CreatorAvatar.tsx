import React from "react";
import { cn } from "@/lib/utils";

export interface CreatorAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  isVerified?: boolean;
}

export const CreatorAvatar = React.forwardRef<HTMLDivElement, CreatorAvatarProps>(
  ({ className, src, alt, size = "md", isVerified, ...props }, ref) => {
    const sizes = {
      sm: "h-8 w-8",
      md: "h-12 w-12",
      lg: "h-16 w-16",
      xl: "h-24 w-24",
    };

    return (
      <div ref={ref} className={cn("relative inline-block", className)} {...props}>
        <div className={cn("overflow-hidden rounded-full bg-surface border-2 border-background", sizes[size])}>
          <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        </div>
        {isVerified && (
          <div className="absolute bottom-0 right-0 rounded-full bg-background p-0.5">
            <svg
              className="h-4 w-4 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        )}
      </div>
    );
  }
);
CreatorAvatar.displayName = "CreatorAvatar";
