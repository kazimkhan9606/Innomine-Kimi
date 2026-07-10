import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface CreatorInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  handle: string;
  bio?: string;
  isVerified?: boolean;
  followers?: number;
}

export const CreatorInfo = React.forwardRef<HTMLDivElement, CreatorInfoProps>(
  ({ className, name, handle, bio, isVerified, followers, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col", className)} {...props}>
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-lg font-semibold text-text-primary">{name}</h4>
          {isVerified && <Badge variant="verified">Verified</Badge>}
        </div>
        <div className="text-sm font-medium text-text-secondary mb-2">@{handle}</div>
        
        {bio && <p className="text-sm text-text-muted line-clamp-2">{bio}</p>}
        
        {followers !== undefined && (
          <div className="mt-2 text-sm font-medium text-text-primary">
            {followers.toLocaleString()} <span className="font-normal text-text-secondary">followers</span>
          </div>
        )}
      </div>
    );
  }
);
CreatorInfo.displayName = "CreatorInfo";
