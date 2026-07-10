import React from "react";
import { cn } from "@/lib/utils";
import { SlidersHorizontal, X } from "lucide-react";

export interface FilterDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const FilterDrawer = React.forwardRef<HTMLDivElement, FilterDrawerProps>(
  ({ className, isOpen, onClose, children, ...props }, ref) => {
    return (
      <>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />
        )}
        
        {/* Drawer */}
        <div
          ref={ref}
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-full max-w-xs transform bg-card p-6 shadow-floating transition-transform duration-300 ease-in-out sm:max-w-sm border-l border-border",
            isOpen ? "translate-x-0" : "translate-x-full",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-text-primary">
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </h2>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-text-muted hover:bg-hover hover:text-text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-full overflow-y-auto pb-20">
            {children}
          </div>
          
          <div className="absolute bottom-0 left-0 w-full bg-card p-4 border-t border-border">
            <div className="flex gap-3">
              <button className="flex-1 rounded-xl border border-border bg-surface py-3 text-sm font-semibold text-text-primary hover:bg-hover transition-colors">
                Reset
              </button>
              <button className="flex-1 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-hover transition-colors" onClick={onClose}>
                Apply
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
);
FilterDrawer.displayName = "FilterDrawer";
