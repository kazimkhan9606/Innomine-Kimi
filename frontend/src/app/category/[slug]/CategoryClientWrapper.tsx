"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CategoryChips } from "@/components/discovery/CategoryChips";

export function CategoryClientWrapper({ 
  categories, 
  activeId 
}: { 
  categories: { id: string; label: string }[]; 
  activeId: string; 
}) {
  const router = useRouter();

  return (
    <CategoryChips 
      categories={categories}
      activeId={activeId}
      onSelect={(id) => router.push(`/category/${id}`)}
    />
  );
}
