import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <FadeIn>
        <SectionHeader 
          title="Categories" 
          subtitle="Browse innovations by category."
          centered
        />
      </FadeIn>
      
      <Reveal delay={0.1}>
        <div className="mt-12 text-center text-muted-foreground">
          <p>Categories page content coming in Stage 2B.</p>
        </div>
      </Reveal>
    </div>
  );
}
