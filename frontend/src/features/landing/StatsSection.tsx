import { MOCK_STATS } from "@/constants/mock-data";
import { AnimatedCounter } from "@/components/custom/AnimatedCounter";
import { FadeIn } from "@/components/providers/MotionProvider";

export function StatsSection() {
  return (
    <section className="py-20 border-y border-border bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {MOCK_STATS.map((stat, index) => (
            <FadeIn key={stat.id} delay={0.1 * index}>
              <div className="flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                  />
                </div>
                <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
