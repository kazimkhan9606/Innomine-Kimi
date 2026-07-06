import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <FadeIn>
        <SectionHeader 
          title="Contact Us" 
          subtitle="Have questions about purchasing an innovation, or want to partner with us? We'd love to hear from you."
          centered
        />
      </FadeIn>
      
      <Reveal delay={0.1}>
        <div className="bg-card border border-border rounded-2xl p-8 mt-8 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="John Doe" className="bg-muted/50" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-muted/50" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="How can we help?" className="bg-muted/50" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="Tell us more..." rows={5} className="bg-muted/50" />
            </div>
            <Button type="button" className="w-full">Send Message</Button>
          </form>
        </div>
      </Reveal>
    </div>
  );
}
