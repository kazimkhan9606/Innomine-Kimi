import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn } from "@/components/providers/MotionProvider";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discover via Reels",
      description: "Scroll through our Innovation Feed to see products in action, explained by the founders themselves."
    },
    {
      number: "02",
      title: "Learn & Verify",
      description: "Dive deep into detailed product pages, review verification badges, and read authentic community feedback."
    },
    {
      number: "03",
      title: "Secure Purchase",
      description: "Buy directly with confidence through our secure checkout, and get early access to groundbreaking tech."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeader 
            title="How It Works" 
            subtitle="The easiest way to discover and purchase the future."
            centered
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-border z-0" />
          
          {steps.map((step, index) => (
            <FadeIn key={index} delay={0.2 * (index + 1)} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center text-3xl font-extrabold text-muted-foreground mb-6 shadow-sm">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
