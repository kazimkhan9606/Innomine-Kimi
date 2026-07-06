import { MOCK_TESTIMONIALS } from "@/constants/mock-data";
import { TestimonialCard } from "@/components/custom/TestimonialCard";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn } from "@/components/providers/MotionProvider";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeader 
            title="What the Community Says" 
            subtitle="Hear from innovators, early adopters, and industry experts about their experience on Innomine."
            centered
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {MOCK_TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={0.1 * (index + 1)}>
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
