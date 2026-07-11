import React, { Suspense } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { innovators } from "@/data/innovators";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { FeaturedProductCard } from "@/components/marketplace/FeaturedProductCard";
import { CategoryCard } from "@/components/discovery/CategoryCard";
import { Grid } from "@/components/layout/Grid";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SearchInput } from "@/components/forms/SearchInput";
import { Text } from "@/components/typography/Text";
import { FilterSidebar } from "@/components/marketplace/FilterSidebar";

export default async function ExplorePage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const resolvedSearchParams = await searchParams;
  const q = resolvedSearchParams?.q?.toLowerCase() || "";
  const cat = resolvedSearchParams?.category || "";
  const minPrice = Number(resolvedSearchParams?.minPrice) || 0;
  const maxPrice = Number(resolvedSearchParams?.maxPrice) || Infinity;
  const sort = resolvedSearchParams?.sort || "";
  const verifiedOnly = resolvedSearchParams?.verified === "true";
  
  const featuredProduct = products[0];
  const featuredCreator = innovators.find((c) => c.id === featuredProduct?.creatorId)?.name || "Unknown Creator";
  
  // Filter products by all active params
  const displayProducts = products.filter(p => {
    // Search match
    let searchMatch = false;
    if (!q) {
      searchMatch = true;
    } else {
      const pCreator = innovators.find(c => c.id === p.creatorId);
      const pCategory = categories.find(c => c.id === p.categoryId);
      
      const inTitle = p.title.toLowerCase().includes(q);
      const inDesc = p.description.toLowerCase().includes(q);
      const inCreator = pCreator?.name.toLowerCase().includes(q) || false;
      const inCategory = pCategory?.name.toLowerCase().includes(q) || false;
      const inTags = p.tags ? p.tags.some(tag => tag.toLowerCase().includes(q)) : false;

      searchMatch = inTitle || inDesc || inCreator || inCategory || inTags;
    }

    // Category match
    const catMatch = !cat || p.categoryId === cat;
    // Price match
    const priceMatch = p.price >= minPrice && p.price <= maxPrice;
    // Verified match
    let verifiedMatch = true;
    if (verifiedOnly) {
      const creator = innovators.find(c => c.id === p.creatorId);
      // For mock data, let's say creators with >10k followers are "verified"
      verifiedMatch = (creator?.followerCount || 0) > 10000;
    }
    
    return searchMatch && catMatch && priceMatch && verifiedMatch;
  });

  // Sort
  if (sort === "newest") {
    displayProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else if (sort === "rating") {
    displayProducts.sort((a, b) => {
      const ratingA = a.reviews.length ? a.reviews.reduce((acc, r) => acc + r.rating, 0) / a.reviews.length : 0;
      const ratingB = b.reviews.length ? b.reviews.reduce((acc, r) => acc + r.rating, 0) / b.reviews.length : 0;
      return ratingB - ratingA;
    });
  } else if (sort === "popular") {
    displayProducts.sort((a, b) => b.reviews.length - a.reviews.length);
  }

  // If no filters and no search, we want the default explore view
  const isDefaultView = !q && !cat && minPrice === 0 && maxPrice === Infinity && !sort && !verifiedOnly;

  return (
    <div className="bg-background min-h-screen">
      <Container>
        <Section spacing="md">
          <FadeIn>
            <SectionHeader 
              title="Explore Innovations" 
              subtitle="Discover the latest hardware and smart devices from verified creators."
              centered
            />
            <div className="max-w-xl mx-auto mt-8">
              <form action="/explore" method="GET">
                <SearchInput 
                  name="q" 
                  placeholder="Search products, hardware, or AI devices..." 
                  defaultValue={resolvedSearchParams?.q}
                />
                {/* Preserve other params in hidden inputs */}
                {cat && <input type="hidden" name="category" value={cat} />}
                {resolvedSearchParams?.minPrice && <input type="hidden" name="minPrice" value={resolvedSearchParams.minPrice} />}
                {resolvedSearchParams?.maxPrice && <input type="hidden" name="maxPrice" value={resolvedSearchParams.maxPrice} />}
                {sort && <input type="hidden" name="sort" value={sort} />}
                {verifiedOnly && <input type="hidden" name="verified" value="true" />}
              </form>
            </div>
          </FadeIn>
          
          {isDefaultView && featuredProduct && (
            <Reveal delay={0.1}>
              <div className="mt-12">
                <Link href={`/product/${featuredProduct.id}`}>
                  <FeaturedProductCard
                    id={featuredProduct.id}
                    title={featuredProduct.title}
                    description={featuredProduct.description}
                    imageUrl={featuredProduct.thumbnailUrl}
                    price={featuredProduct.price}
                    category={categories.find(c => c.id === featuredProduct.categoryId)?.name || "Technology"}
                    creatorName={featuredCreator}
                    isInnovation={true}
                  />
                </Link>
              </div>
            </Reveal>
          )}
        </Section>

        <Section spacing="md" className="pt-0">
          <FadeIn>
            <div className="flex justify-between items-end mb-8">
              <SectionHeader 
                title={!isDefaultView ? `Search Results` : "Trending Now"}
                subtitle={!isDefaultView ? `Found ${displayProducts.length} innovations matching your criteria` : "The most popular hardware projects this week."}
              />
            </div>
          </FadeIn>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <Suspense fallback={<div className="h-64 bg-surface/50 animate-pulse rounded-2xl" />}>
                <FilterSidebar categories={categories} />
              </Suspense>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <Reveal delay={0.2}>
                {displayProducts.length > 0 ? (
                  <Grid cols={3} gap="md">
                    {(isDefaultView ? displayProducts.slice(1, 10) : displayProducts).map((product) => {
                      const categoryName = categories.find(c => c.id === product.categoryId)?.name || "Category";
                      return (
                        <Link key={product.id} href={`/product/${product.id}`} className="block h-full">
                          <ProductCard
                            id={product.id}
                            title={product.title}
                            imageUrl={product.thumbnailUrl}
                            price={product.price}
                            category={categoryName}
                            rating={product.reviews?.length > 0 ? product.reviews[0].rating : undefined}
                            reviews={product.reviews?.length || 0}
                            className="h-full"
                          />
                        </Link>
                      );
                    })}
                  </Grid>
                ) : (
                  <div className="py-12 text-center border border-dashed border-border rounded-xl">
                    <Text variant="body-l" className="text-text-muted">No products found matching your search.</Text>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </Section>

        {isDefaultView && (
          <Section spacing="md">
            <FadeIn>
              <SectionHeader 
                title="Browse by Category" 
                subtitle="Find exactly what you're looking for."
              />
            </FadeIn>
            
            <Reveal delay={0.3}>
              <Grid cols={3} gap="md" className="mt-8">
                {categories.map((category) => {
                  const count = products.filter(p => p.categoryId === category.id).length;
                  const firstProduct = products.find(p => p.categoryId === category.id);
                  const imageUrl = firstProduct?.thumbnailUrl || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400';
                  
                  return (
                    <Link key={category.id} href={`/category/${category.slug}`}>
                      <CategoryCard
                        id={category.id}
                        title={category.name}
                        imageUrl={imageUrl}
                        itemCount={count}
                      />
                    </Link>
                  );
                })}
              </Grid>
            </Reveal>
          </Section>
        )}
      </Container>
    </div>
  );
}
