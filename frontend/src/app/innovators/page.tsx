import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";

export default function InnovatorsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <FadeIn>
        <SectionHeader 
          title="Verified Innovators" 
          subtitle="Meet the brilliant minds building the future."
          centered
        />
      </FadeIn>
      
      <Reveal delay={0.1}>
        <div className="mt-12 text-center text-muted-foreground">
          <p>Innovators page content coming in Stage 2B.</p>
        </div>
      </Reveal>
    </div>
  );
}
