import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = "top",
  delay = 200,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            "absolute z-50 px-2.5 py-1.5 text-xs font-medium text-text-primary bg-popover border border-border rounded-md shadow-floating whitespace-nowrap animate-in fade-in zoom-in-95 duration-150",
            positionClasses[position],
            className
          )}
        >
          {content}
          <div 
            className={cn(
              "absolute w-2 h-2 bg-popover border-border rotate-45",
              position === "top" && "bottom-[-5px] left-1/2 -translate-x-1/2 border-b border-r",
              position === "bottom" && "top-[-5px] left-1/2 -translate-x-1/2 border-t border-l",
              position === "left" && "right-[-5px] top-1/2 -translate-y-1/2 border-t border-r",
              position === "right" && "left-[-5px] top-1/2 -translate-y-1/2 border-b border-l"
            )}
          />
        </div>
      )}
    </div>
  );
}
