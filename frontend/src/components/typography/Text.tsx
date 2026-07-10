import React from "react";
import { cn } from "@/lib/utils";

export type TextVariant = 
  | "subtitle"
  | "body-l"
  | "body-m"
  | "body-s"
  | "caption"
  | "label"
  | "mono";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  children: React.ReactNode;
  variant?: TextVariant;
  as?: "p" | "span" | "div";
}

const variantClasses: Record<TextVariant, string> = {
  "subtitle": "text-lg md:text-xl text-text-secondary font-medium",
  "body-l": "text-lg text-text-secondary",
  "body-m": "text-base text-text-secondary",
  "body-s": "text-sm text-text-secondary",
  "caption": "text-xs text-text-muted",
  "label": "text-sm font-medium text-text-primary uppercase tracking-wider",
  "mono": "font-mono text-sm text-text-primary",
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, className, variant = "body-m", as = "p", ...props }, ref) => {
    const Component = as;
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

Text.displayName = "Text";
