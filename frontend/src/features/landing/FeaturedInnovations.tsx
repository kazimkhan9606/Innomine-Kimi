import { MOCK_PRODUCTS } from "@/constants/mock-data";
import { ProductCard } from "@/components/custom/ProductCard";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn } from "@/components/providers/MotionProvider";

export function FeaturedInnovations() {
  const featured = MOCK_PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeader 
            title="Featured Innovations" 
            subtitle="Discover groundbreaking products vetted by our experts and loved by early adopters."
          />
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <FadeIn key={product.id} delay={0.1 * (index + 1)}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
