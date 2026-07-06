import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, Clock, Search as SearchIcon } from "lucide-react";

export interface SearchSuggestionItem {
  id: string;
  label: string;
  type: "recent" | "trending" | "suggestion";
}

export interface SearchSuggestionsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  suggestions: SearchSuggestionItem[];
  onSelect?: (item: SearchSuggestionItem) => void;
}

export const SearchSuggestions = React.forwardRef<HTMLDivElement, SearchSuggestionsProps>(
  ({ className, suggestions, onSelect, ...props }, ref) => {
    if (!suggestions || suggestions.length === 0) return null;

    const getIcon = (type: string) => {
      switch (type) {
        case "recent":
          return <Clock className="h-4 w-4 text-slate-400" />;
        case "trending":
          return <TrendingUp className="h-4 w-4 text-blue-500" />;
        default:
          return <SearchIcon className="h-4 w-4 text-slate-400" />;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-full z-50 mt-2 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900",
          className
        )}
        {...props}
      >
        <ul className="flex flex-col py-2">
          {suggestions.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSelect && onSelect(item)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                {getIcon(item.type)}
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
SearchSuggestions.displayName = "SearchSuggestions";
