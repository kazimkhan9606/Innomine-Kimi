import React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showOn?: "mobile" | "tablet" | "desktop" | "all";
  hideOn?: "mobile" | "tablet" | "desktop" | "none";
}

export const ResponsiveWrapper = React.forwardRef<HTMLDivElement, ResponsiveWrapperProps>(
  ({ children, className, showOn = "all", hideOn = "none", ...props }, ref) => {
    
    const visibilityClasses = cn(
      // Show logic
      showOn === "mobile" && "block sm:hidden",
      showOn === "tablet" && "hidden sm:block lg:hidden",
      showOn === "desktop" && "hidden lg:block",
      
      // Hide logic
      hideOn === "mobile" && "hidden sm:block",
      hideOn === "tablet" && "block sm:hidden lg:block",
      hideOn === "desktop" && "block lg:hidden",
    );

    return (
      <div
        ref={ref}
        className={cn(visibilityClasses, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ResponsiveWrapper.displayName = "ResponsiveWrapper";
