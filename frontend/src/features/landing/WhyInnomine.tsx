import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";
import { ShieldCheck, Video, Rocket } from "lucide-react";

export function WhyInnomine() {
  const reasons = [
    {
      icon: <Video className="w-10 h-10 text-accent" />,
      title: "Content-Driven Discovery",
      description: "Don't just read specs. See innovations in action through high-quality short-form demonstration reels."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      title: "Verified Trust",
      description: "Every creator and product undergoes our stringent verification process. You know exactly who and what you&apos;re buying."
    },
    {
      icon: <Rocket className="w-10 h-10 text-accent" />,
      title: "Direct to Creator",
      description: "Bypass middlemen. Support founders directly and become an early adopter of the technologies shaping tomorrow."
    }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Why Innomine?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              We&apos;ve reimagined e-commerce specifically for innovative physical products.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <Reveal key={index} delay={0.1 * (index + 1)}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 h-full">
                <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
