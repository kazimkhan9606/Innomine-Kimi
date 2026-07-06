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
          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{name}</h4>
          {isVerified && <Badge variant="verified">Verified</Badge>}
        </div>
        <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">@{handle}</div>
        
        {bio && <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{bio}</p>}
        
        {followers !== undefined && (
          <div className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            {followers.toLocaleString()} <span className="font-normal text-slate-500">followers</span>
          </div>
        )}
      </div>
    );
  }
);
CreatorInfo.displayName = "CreatorInfo";
