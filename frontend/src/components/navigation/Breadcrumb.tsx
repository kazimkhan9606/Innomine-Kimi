import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link"; 

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  homeIcon?: boolean;
}

export function Breadcrumb({
  items,
  className,
  homeIcon = true,
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center space-x-1 sm:space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={index} className="flex items-center">
              {isFirst && homeIcon && !item.icon && (
                <Home className="w-4 h-4 mr-1 sm:mr-2 text-slate-400" />
              )}
              {item.icon && (
                <span className="mr-1 sm:mr-2 text-slate-400">{item.icon}</span>
              )}
              
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-sm font-medium text-slate-900 dark:text-white pointer-events-none">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight className="w-4 h-4 mx-1 sm:mx-2 text-slate-400 flex-shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
