import Image from "next/image";
import { Testimonial } from "@/types/mock";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full bg-card border-border rounded-2xl p-2">
      <CardContent className="p-6 relative">
        <Quote className="absolute top-6 right-6 w-8 h-8 text-muted/30 rotate-180" />
        <p className="text-lg mb-8 leading-relaxed text-foreground relative z-10 italic">
          &quot;{testimonial.quote}&quot;
        </p>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <Image src={testimonial.avatarUrl} alt={testimonial.authorName} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-base">{testimonial.authorName}</h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.authorRole} {testimonial.company ? `· ${testimonial.company}` : ''}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
