"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { CategoryCard } from "@/components/discovery/CategoryCard";
import { Grid } from "@/components/layout/Grid";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function CategoriesPage() {
  return (
    <div className="bg-background min-h-screen">
      <Container>
        <Section spacing="md">
          <FadeIn>
            <SectionHeader 
              title="Categories" 
              subtitle="Browse innovations by category."
              centered
            />
          </FadeIn>
          
          <Reveal delay={0.1}>
            <Grid cols={3} gap="lg" className="mt-12">
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
      </Container>
    </div>
  );
}
