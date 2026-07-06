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
  "subtitle": "text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium",
  "body-l": "text-lg text-slate-700 dark:text-slate-300",
  "body-m": "text-base text-slate-700 dark:text-slate-300",
  "body-s": "text-sm text-slate-600 dark:text-slate-400",
  "caption": "text-xs text-slate-500 dark:text-slate-400",
  "label": "text-sm font-medium text-slate-900 dark:text-white uppercase tracking-wider",
  "mono": "font-mono text-sm text-slate-800 dark:text-slate-200",
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
