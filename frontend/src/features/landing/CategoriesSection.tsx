import { MOCK_CATEGORIES } from "@/constants/mock-data";
import { CategoryCard } from "@/components/custom/CategoryCard";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn } from "@/components/providers/MotionProvider";

export function CategoriesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeader 
            title="Explore by Category" 
            subtitle="Find exactly what you&apos;re looking for across our curated innovation categories."
          />
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_CATEGORIES.map((category, index) => (
            <FadeIn key={category.id} delay={0.1 * (index + 1)}>
              <CategoryCard category={category} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
