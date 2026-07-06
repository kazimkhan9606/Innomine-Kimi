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
        <Search className="absolute left-4 h-5 w-5 text-slate-400" />
        <input
          ref={ref}
          type="text"
          value={localValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="h-14 w-full rounded-full border-none bg-slate-100/80 pl-12 pr-12 text-base text-slate-900 shadow-sm backdrop-blur-md transition-all placeholder:text-slate-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:bg-slate-800/80 dark:text-slate-50 dark:focus:bg-slate-900"
          {...props}
        />
        {localValue && (
          <button
            onClick={handleClear}
            className="absolute right-4 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";
