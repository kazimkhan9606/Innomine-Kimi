import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
}

export function Chip({
  className,
  onRemove,
  icon,
  children,
  disabled = false,
  ...props
}: ChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm bg-surface text-text-primary border border-transparent transition-colors",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && onRemove && "hover:bg-hover",
        className
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0 text-text-muted">{icon}</span>}
      <span className="font-medium">{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) onRemove();
          }}
          disabled={disabled}
          className="ml-1 p-0.5 -mr-1 rounded-full text-text-muted hover:text-text-primary hover:bg-hover focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Remove"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
