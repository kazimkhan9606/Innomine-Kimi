import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (query: string) => void;
  onClear?: () => void;
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onSearch, onClear, onChange, value, ...props }, ref) => {
    const [localValue, setLocalValue] = useState(value || "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
      if (onChange) onChange(e);
    };

    const handleClear = () => {
      setLocalValue("");
      if (onClear) onClear();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(localValue as string);
      }
    };

    return (
      <div className={cn("relative flex w-full max-w-2xl items-center", className)}>
        <Search className="absolute left-4 h-5 w-5 text-text-muted" />
        <input
          ref={ref}
          type="text"
          value={localValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="h-14 w-full rounded-full border-none bg-surface/80 pl-12 pr-12 text-base text-text-primary shadow-surface backdrop-blur-md transition-all placeholder:text-text-placeholder focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
          {...props}
        />
        {localValue && (
          <button
            onClick={handleClear}
            className="absolute right-4 flex h-6 w-6 items-center justify-center rounded-full text-text-muted hover:bg-hover hover:text-text-primary"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";
