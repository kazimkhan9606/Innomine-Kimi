import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) {
  
  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);
      
      let pages: (number | string)[] = [];
      
      if (startPage > 2) {
        pages = [1, '...', ...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)];
      } else {
        pages = Array.from({ length: endPage }, (_, i) => i + 1);
      }
      
      if (endPage < totalPages - 1) {
        pages = [...pages, '...', totalPages];
      } else {
        pages = [...pages, ...Array.from({ length: totalPages - endPage }, (_, i) => endPage + i + 1)];
      }
      
      return pages;
    }

    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  if (totalPages <= 1) return null;

  const pages = getPageNumbers();

  return (
    <nav aria-label="Pagination" className={cn("flex items-center justify-center space-x-1", className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((page, idx) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${idx}`} className="px-3 py-2 text-slate-500 flex items-center justify-center">
              <MoreHorizontal className="w-4 h-4" />
            </span>
          );
        }

        const pageNum = page as number;
        const isCurrent = pageNum === currentPage;

        return (
          <button
            key={idx}
            onClick={() => onPageChange(pageNum)}
            aria-current={isCurrent ? "page" : undefined}
            className={cn(
              "px-3.5 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500",
              isCurrent 
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm" 
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            )}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}
