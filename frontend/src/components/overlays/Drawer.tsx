import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  side?: "left" | "right";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  hideCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
}

export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
  side = "right",
  size = "md",
  hideCloseButton = false,
  closeOnOutsideClick = true,
}: DrawerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOutsideClick && e.target === overlayRef.current) {
      onClose();
    }
  };

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full",
  };

  const animationClasses = side === "right" 
    ? "animate-in slide-in-from-right duration-300"
    : "animate-in slide-in-from-left duration-300";

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity"
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          "fixed top-0 bottom-0 flex flex-col bg-background shadow-modal w-full",
          side === "right" ? "right-0" : "left-0",
          sizeClasses[size],
          animationClasses,
          className
        )}
      >
        {(title || !hideCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            {title ? (
              <h2 className="text-lg font-semibold text-text-primary">
                {title}
              </h2>
            ) : (
              <div />
            )}
            {!hideCloseButton && (
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-text-muted hover:text-text-primary rounded-full hover:bg-hover transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
        
        <div className="flex-1 overflow-y-auto p-6">{children}</div>

        {footer && (
          <div className="px-6 py-4 border-t border-border bg-surface flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
