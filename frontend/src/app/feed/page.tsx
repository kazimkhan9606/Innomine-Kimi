import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";

export default function FeedPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <FadeIn>
        <SectionHeader 
          title="Innovation Feed" 
          subtitle="Watch short-form reels of products in action."
          centered
        />
      </FadeIn>
      
      <Reveal delay={0.1}>
        <div className="mt-12 text-center text-muted-foreground">
          <p>Feed page content coming in Stage 2B.</p>
        </div>
      </Reveal>
    </div>
  );
}
