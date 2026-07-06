import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/providers/MotionProvider";

export function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
            Ready to Discover the Future?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join thousands of early adopters and visionaries. Explore the latest innovations or launch your own.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full" asChild>
              <Link href="/explore">Start Exploring</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/register">Create an Account</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
