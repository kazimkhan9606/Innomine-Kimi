import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

export interface SortOption {
  value: string;
  label: string;
}

export interface SortDropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
}

export const SortDropdown = React.forwardRef<HTMLDivElement, SortDropdownProps>(
  ({ className, options, value, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value) || options[0];

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div ref={ref} className={cn("relative inline-block text-left", className)} {...props}>
        <div ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex w-full items-center justify-between gap-x-1.5 rounded-xl bg-surface px-4 py-2.5 text-sm font-medium text-text-primary shadow-surface ring-1 ring-inset ring-ring hover:bg-hover transition-colors"
          >
            Sort by: <span className="font-semibold">{selectedOption.label}</span>
            <ChevronDown className="h-4 w-4 text-text-muted" aria-hidden="true" />
          </button>
        </div>

        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl bg-popover shadow-floating ring-1 ring-ring focus:outline-none border border-border">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-2 text-sm text-left hover:bg-hover",
                    value === option.value
                      ? "text-primary font-semibold"
                      : "text-text-primary"
                  )}
                >
                  {option.label}
                  {value === option.value && <Check className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);
SortDropdown.displayName = "SortDropdown";
