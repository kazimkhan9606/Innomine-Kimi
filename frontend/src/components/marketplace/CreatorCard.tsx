import React from "react";
import { cn } from "@/lib/utils";
import { CreatorAvatar } from "./CreatorAvatar";
import { CreatorInfo } from "./CreatorInfo";

export interface CreatorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  coverUrl?: string;
  bio?: string;
  isVerified?: boolean;
  followers?: number;
}

export const CreatorCard = React.forwardRef<HTMLDivElement, CreatorCardProps>(
  ({ className, id, name, handle, avatarUrl, coverUrl, bio, isVerified, followers, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex flex-col overflow-hidden rounded-2xl bg-card shadow-surface transition-all hover:shadow-raised border border-border",
          className
        )}
        {...props}
      >
        <div className="h-24 w-full bg-surface overflow-hidden relative">
          {coverUrl && (
            <img src={coverUrl} alt="Cover" className="h-full w-full object-cover opacity-80" loading="lazy" />
          )}
        </div>
        
        <div className="relative px-5 pb-5 pt-0 flex-1 flex flex-col">
          <div className="-mt-8 mb-3">
            <CreatorAvatar src={avatarUrl} alt={name} size="lg" isVerified={isVerified} className="border-4 border-card" />
          </div>
          
          <CreatorInfo
            name={name}
            handle={handle}
            bio={bio}
            followers={followers}
            isVerified={isVerified}
            className="flex-1"
          />
          
          <button className="mt-4 w-full rounded-lg bg-secondary py-2 text-sm font-semibold text-text-primary transition-colors hover:bg-hover">
            View Profile
          </button>
        </div>
      </div>
    );
  }
);
CreatorCard.displayName = "CreatorCard";
