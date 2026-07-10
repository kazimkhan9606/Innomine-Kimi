import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: "line" | "segmented" | "pills";
  fullWidth?: boolean;
}

export function Tabs({
  items,
  activeId,
  onChange,
  className,
  variant = "line",
  fullWidth = false,
}: TabsProps) {
  
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = items.findIndex((item) => item.id === activeId);
    if (activeIndex !== -1 && tabsRef.current[activeIndex]) {
      const activeTab = tabsRef.current[activeIndex];
      if (activeTab) {
        setIndicatorStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
        });
      }
    }
  }, [activeId, items, variant]);

  if (variant === "segmented") {
    return (
      <div 
        className={cn(
          "relative flex items-center p-1 bg-surface rounded-xl", 
          fullWidth && "w-full",
          className
        )}
      >
        <div
          className="absolute bg-background rounded-lg shadow-sm transition-all duration-300 ease-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            height: 'calc(100% - 8px)',
            top: '4px',
          }}
        />
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => { tabsRef.current[idx] = el; }}
              onClick={() => !item.disabled && onChange(item.id)}
              disabled={item.disabled}
              className={cn(
                "relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                fullWidth && "flex-1",
                isActive 
                  ? "text-text-primary" 
                  : "text-text-secondary hover:text-text-primary",
                item.disabled && "opacity-50 cursor-not-allowed hover:text-text-muted"
              )}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </div>
    );
  }

  if (variant === "pills") {
    return (
      <div className={cn("flex flex-wrap items-center gap-2", fullWidth && "w-full", className)}>
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => !item.disabled && onChange(item.id)}
              disabled={item.disabled}
              className={cn(
                "flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all",
                fullWidth && "flex-1",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-text-secondary hover:bg-hover",
                item.disabled && "opacity-50 cursor-not-allowed hover:bg-surface"
              )}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </div>
    );
  }

  // default: line variant
  return (
    <div className={cn("relative border-b border-border", className)}>
      <div className={cn("flex items-center gap-6 overflow-x-auto no-scrollbar", fullWidth && "w-full")}>
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => { tabsRef.current[idx] = el; }}
              onClick={() => !item.disabled && onChange(item.id)}
              disabled={item.disabled}
              className={cn(
                "relative flex items-center justify-center gap-2 pb-3 pt-1 text-sm font-medium transition-colors whitespace-nowrap",
                fullWidth && "flex-1",
                isActive
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary",
                item.disabled && "opacity-50 cursor-not-allowed hover:text-text-muted"
              )}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        className="absolute bottom-0 h-0.5 bg-text-primary transition-all duration-300 ease-out"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      />
    </div>
  );
}
