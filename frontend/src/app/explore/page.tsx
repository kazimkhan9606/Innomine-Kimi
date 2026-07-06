import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <FadeIn>
        <SectionHeader 
          title="Explore Innovations" 
          subtitle="Discover the latest hardware and smart devices from verified creators."
          centered
        />
      </FadeIn>
      
      <Reveal delay={0.1}>
        <div className="mt-12 text-center text-muted-foreground">
          <p>Explore page content coming in Stage 2B.</p>
        </div>
      </Reveal>
    </div>
  );
}
