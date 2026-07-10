"use client";

import React, { useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Text } from "@/components/typography/Text";

interface FilterSidebarProps {
  categories: { id: string; name: string }[];
}

export function FilterSidebar({ categories }: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname + "?" + createQueryString("category", e.target.value));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname + "?" + createQueryString("sort", e.target.value));
  };

  const handleVerifiedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(pathname + "?" + createQueryString("verified", e.target.checked ? "true" : ""));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    let min = "";
    let max = "";
    if (val === "0-100") { min = "0"; max = "100"; }
    else if (val === "100-500") { min = "100"; max = "500"; }
    else if (val === "500+") { min = "500"; max = ""; }
    
    const params = new URLSearchParams(searchParams.toString());
    if (min) params.set("minPrice", min); else params.delete("minPrice");
    if (max) params.set("maxPrice", max); else params.delete("maxPrice");
    
    router.push(pathname + "?" + params.toString());
  };

  const currentCategory = searchParams.get("category") || "";
  const currentSort = searchParams.get("sort") || "";
  const currentVerified = searchParams.get("verified") === "true";
  
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  let currentPrice = "";
  if (minPrice === "0" && maxPrice === "100") currentPrice = "0-100";
  else if (minPrice === "100" && maxPrice === "500") currentPrice = "100-500";
  else if (minPrice === "500") currentPrice = "500+";

  return (
    <div className="flex flex-col gap-6 p-6 bg-surface/50 rounded-2xl border border-border">
      <div>
        <Text variant="label" className="block mb-2 text-text-primary">Category</Text>
        <select 
          value={currentCategory} 
          onChange={handleCategoryChange}
          className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">All Categories</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      <div>
        <Text variant="label" className="block mb-2 text-text-primary">Price</Text>
        <select 
          value={currentPrice} 
          onChange={handlePriceChange}
          className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Any Price</option>
          <option value="0-100">Under $100</option>
          <option value="100-500">$100 - $500</option>
          <option value="500+">Over $500</option>
        </select>
      </div>

      <div>
        <Text variant="label" className="block mb-2 text-text-primary">Sort By</Text>
        <select 
          value={currentSort} 
          onChange={handleSortChange}
          className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Featured</option>
          <option value="newest">Newest</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <input 
          type="checkbox" 
          id="verified" 
          checked={currentVerified}
          onChange={handleVerifiedChange}
          className="w-4 h-4 rounded border-border text-primary focus:ring-primary bg-background"
        />
        <label htmlFor="verified" className="text-sm font-medium text-text-primary cursor-pointer">
          Verified Creators Only
        </label>
      </div>
    </div>
  );
}
