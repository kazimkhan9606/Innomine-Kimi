import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/providers/MotionProvider";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
      <div className="absolute top-20 -left-40 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-8 text-sm font-medium border border-border">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            The New Era of Product Discovery
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-8 leading-[1.1] text-foreground">
            Where Innovation Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Commerce</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            The world&apos;s first marketplace dedicated exclusively to breakthrough hardware, smart devices, and physical innovations.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full" asChild>
            <Link href="/explore">Explore Innovations</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full" asChild>
            <Link href="/become-an-innovator">Apply as Innovator</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
