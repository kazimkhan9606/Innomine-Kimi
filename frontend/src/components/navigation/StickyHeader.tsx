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
        isSticky && glass && "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm",
        isSticky && !glass && "bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm",
        !isSticky && "bg-transparent border-transparent",
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}
