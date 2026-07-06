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
            className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />
        )}
        
        {/* Drawer */}
        <div
          ref={ref}
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-full max-w-xs transform bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out dark:bg-slate-900 sm:max-w-sm border-l border-slate-100 dark:border-slate-800",
            isOpen ? "translate-x-0" : "translate-x-full",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-50">
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </h2>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-full overflow-y-auto pb-20">
            {children}
          </div>
          
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t border-slate-100 dark:bg-slate-900 dark:border-slate-800">
            <div className="flex gap-3">
              <button className="flex-1 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors">
                Reset
              </button>
              <button className="flex-1 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors" onClick={onClose}>
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
