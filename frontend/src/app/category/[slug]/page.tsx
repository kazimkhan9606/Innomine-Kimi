import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Grid } from "@/components/layout/Grid";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CategoryClientWrapper } from "./CategoryClientWrapper";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const category = categories.find((c) => c.slug === slug);
  
  if (!category) {
    notFound();
  }
  
  const categoryProducts = products.filter((p) => p.categoryId === category.id);

  return (
    <div className="bg-background min-h-screen">
      <Container>
        <Section spacing="md">
          <FadeIn>
            <div className="mb-12">
              <SectionHeader 
                title={category.name} 
                subtitle={category.description}
              />
            </div>
            <div className="mb-8">
              <CategoryClientWrapper 
                categories={categories.map(c => ({ id: c.id, label: c.name, slug: c.slug }))}
                activeId={category.id}
              />
            </div>
          </FadeIn>
          
          <Reveal delay={0.1}>
            {categoryProducts.length > 0 ? (
              <Grid cols={4} gap="md">
                {categoryProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="block h-full">
                    <ProductCard
                      id={product.id}
                      title={product.title}
                      imageUrl={product.thumbnailUrl}
                      price={product.price}
                      category={category.name}
                      rating={product.reviews?.length > 0 ? product.reviews[0].rating : undefined}
                      reviews={product.reviews?.length || 0}
                      className="h-full"
                    />
                  </Link>
                ))}
              </Grid>
            ) : (
              <div className="text-center py-20 text-text-muted">
                <p>No products found in this category.</p>
              </div>
            )}
          </Reveal>
        </Section>
      </Container>
    </div>
  );
}
