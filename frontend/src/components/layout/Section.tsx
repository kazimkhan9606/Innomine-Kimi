import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "none";
  children: React.ReactNode;
}

const spacingClasses = {
  none: "",
  sm: "py-16", // 64px
  md: "py-24", // 96px
  lg: "py-32 md:py-40", // 128px to 160px
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, spacing = "md", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(spacingClasses[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
