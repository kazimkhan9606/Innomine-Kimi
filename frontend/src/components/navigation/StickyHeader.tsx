import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface StickyHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  offset?: number;
  glass?: boolean;
}

export function StickyHeader({
  children,
  className,
  offset = 0,
  glass = true,
  ...props
}: StickyHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-200",
        isSticky && glass && "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm",
        isSticky && !glass && "bg-background border-b border-border shadow-sm",
        !isSticky && "bg-transparent border-transparent",
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}
