import { HeroSection } from "@/features/landing/HeroSection";
import { FeaturedInnovations } from "@/features/landing/FeaturedInnovations";
import { CategoriesSection } from "@/features/landing/CategoriesSection";
import { WhyInnomine } from "@/features/landing/WhyInnomine";
import { HowItWorks } from "@/features/landing/HowItWorks";
import { StatsSection } from "@/features/landing/StatsSection";
import { TestimonialsSection } from "@/features/landing/TestimonialsSection";
import { CtaSection } from "@/features/landing/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StatsSection />
      <FeaturedInnovations />
      <WhyInnomine />
      <CategoriesSection />
      <HowItWorks />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
