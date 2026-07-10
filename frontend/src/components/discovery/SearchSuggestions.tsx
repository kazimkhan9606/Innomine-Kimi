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
          return <Clock className="h-4 w-4 text-text-muted" />;
        case "trending":
          return <TrendingUp className="h-4 w-4 text-primary" />;
        default:
          return <SearchIcon className="h-4 w-4 text-text-muted" />;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-full z-50 mt-2 w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-popover shadow-floating",
          className
        )}
        {...props}
      >
        <ul className="flex flex-col py-2">
          {suggestions.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSelect && onSelect(item)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-hover"
              >
                {getIcon(item.type)}
                <span className="text-sm font-medium text-text-primary">
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
