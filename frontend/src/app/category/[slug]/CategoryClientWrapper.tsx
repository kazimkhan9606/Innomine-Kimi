"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CategoryChips } from "@/components/discovery/CategoryChips";

export function CategoryClientWrapper({ 
  categories, 
  activeId 
}: { 
  categories: { id: string; label: string; slug?: string }[]; 
  activeId: string; 
}) {
  const router = useRouter();

  return (
    <CategoryChips 
      categories={categories}
      activeId={activeId}
      onSelect={(id) => {
        const cat = categories.find(c => c.id === id);
        if (cat?.slug) router.push(`/category/${cat.slug}`);
        else router.push(`/category/${id}`);
      }}
    />
  );
}
