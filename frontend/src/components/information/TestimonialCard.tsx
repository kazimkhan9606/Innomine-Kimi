import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { CardHover } from "@/components/motion";

export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorRole,
  authorAvatar,
  className,
}) => {
  return (
    <CardHover
      className={cn(
        "p-8 rounded-xl bg-card/70 backdrop-blur-md border border-border shadow-sm relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-6 text-6xl text-text-muted select-none leading-none opacity-20 font-serif">
        &quot;
      </div>
      <p className="text-lg text-text-secondary font-medium leading-relaxed mb-8 relative z-10">
        &quot;{quote}&quot;
      </p>
      <div className="flex items-center gap-4 relative z-10">
        {authorAvatar ? (
          <Image src={authorAvatar}
            alt={authorName}
            className="w-12 h-12 rounded-full object-cover border border-border"
           fill sizes="(max-width: 768px) 100vw, 50vw" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-text-secondary font-bold">
            {authorName.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-text-primary">
            {authorName}
          </div>
          {authorRole && (
            <div className="text-sm text-text-muted">
              {authorRole}
            </div>
          )}
        </div>
      </div>
    </CardHover>
  );
};
