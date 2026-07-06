import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ProductGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  alt?: string;
}

export const ProductGallery = React.forwardRef<HTMLDivElement, ProductGalleryProps>(
  ({ className, images, alt = "Product image", ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (!images || images.length === 0) {
      return (
        <div className={cn("aspect-square rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400", className)} {...props}>
          No images available
        </div>
      );
    }

    return (
      <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props}>
        <div className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
          <img
            src={images[activeIndex]}
            alt={`${alt} ${activeIndex + 1}`}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-800 opacity-0 shadow-sm backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-white dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-800 opacity-0 shadow-sm backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-white dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-900"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all",
                  activeIndex === idx
                    ? "border-blue-600 dark:border-blue-500"
                    : "border-transparent opacity-70 hover:opacity-100"
                )}
              >
                <img src={image} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);
ProductGallery.displayName = "ProductGallery";
