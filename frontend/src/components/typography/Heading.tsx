import React from "react";
import { cn } from "@/lib/utils";

export type HeadingVariant = 
  | "display-xl"
  | "display-l"
  | "display-m"
  | "h1"
  | "h2"
  | "h3"
  | "h4";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  variant?: HeadingVariant;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const variantClasses: Record<HeadingVariant, string> = {
  "display-xl": "text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary",
  "display-l": "text-4xl md:text-6xl font-bold tracking-tight text-text-primary",
  "display-m": "text-3xl md:text-5xl font-bold tracking-tight text-text-primary",
  "h1": "text-3xl md:text-4xl font-bold text-text-primary",
  "h2": "text-2xl md:text-3xl font-semibold text-text-primary",
  "h3": "text-xl md:text-2xl font-semibold text-text-primary",
  "h4": "text-lg md:text-xl font-medium text-text-primary",
};

const defaultTags: Record<HeadingVariant, "h1" | "h2" | "h3" | "h4"> = {
  "display-xl": "h1",
  "display-l": "h1",
  "display-m": "h1",
  "h1": "h1",
  "h2": "h2",
  "h3": "h3",
  "h4": "h4",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, variant = "h1", as, ...props }, ref) => {
    const Component = as || defaultTags[variant];
    return (
      <Component
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
