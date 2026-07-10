import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface PopoverProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
  trigger?: "click" | "hover";
}

export function Popover({
  content,
  children,
  position = "bottom",
  className,
  trigger = "click",
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger === "hover") return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, trigger]);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div 
      className="relative inline-block"
      ref={popoverRef}
      onMouseEnter={trigger === "hover" ? () => setIsOpen(true) : undefined}
      onMouseLeave={trigger === "hover" ? () => setIsOpen(false) : undefined}
    >
      <div 
        onClick={trigger === "click" ? () => setIsOpen(!isOpen) : undefined}
        className="cursor-pointer inline-block"
      >
        {children}
      </div>
      
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 w-64 p-4 bg-popover border border-border rounded-xl shadow-dropdown animate-in fade-in zoom-in-95 duration-200",
            positionClasses[position],
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
