import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  status?: "online" | "offline" | "busy" | "away";
  className?: string;
}

export function Avatar({
  src,
  alt,
  initials,
  size = "md",
  status,
  className,
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
    "2xl": "w-24 h-24 text-2xl",
  };

  const statusColors = {
    online: "bg-success",
    offline: "bg-text-muted",
    busy: "bg-danger",
    away: "bg-warning",
  };

  const renderFallback = () => {
    if (initials) {
      return (
        <div className="flex w-full h-full items-center justify-center bg-surface text-text-primary font-medium">
          {initials.substring(0, 2).toUpperCase()}
        </div>
      );
    }
    return (
      <div className="flex w-full h-full items-center justify-center bg-surface text-text-muted">
        <User className="w-1/2 h-1/2" />
      </div>
    );
  };

  return (
    <div className={cn("relative inline-block rounded-full", sizes[size], className)}>
      <div className="w-full h-full overflow-hidden rounded-full border border-border bg-background">
        {src && !imgError ? (
          <img
            src={src}
            alt={alt || "User avatar"}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          renderFallback()
        )}
      </div>
      
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 block rounded-full ring-2 ring-background",
            statusColors[status],
            size === "sm" ? "w-2 h-2" : size === "2xl" ? "w-5 h-5 ring-4" : "w-3 h-3 ring-2"
          )}
        />
      )}
    </div>
  );
}
