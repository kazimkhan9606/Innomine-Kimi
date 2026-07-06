import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MOCK_FAQS } from "@/constants/mock-data";

export default function FaqPage() {
  const categories = Array.from(new Set(MOCK_FAQS.map(faq => faq.category)));

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <FadeIn>
        <SectionHeader 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about buying and selling on Innomine."
          centered
        />
      </FadeIn>
      
      <div className="mt-12 space-y-12">
        {categories.map((category, index) => {
          const categoryFaqs = MOCK_FAQS.filter(faq => faq.category === category);
          
          return (
            <Reveal key={category} delay={0.1 * (index + 1)}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{category}</h3>
              <Accordion type="single" collapsible className="w-full">
                {categoryFaqs.map(faq => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
