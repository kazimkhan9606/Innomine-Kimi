import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";

export default function GuidelinesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <FadeIn>
        <SectionHeader 
          title="Innovation Guidelines" 
          subtitle="What qualifies as an innovation on Innomine?"
        />
      </FadeIn>
      
      <div className="prose prose-lg dark:prose-invert mt-8">
        <Reveal delay={0.1}>
          <p>
            Innomine is strictly dedicated to innovative physical products. We do not accept generic retail items, dropshipped white-label goods, or mass-market commodities. Every product must solve a problem in a novel way or introduce new technology.
          </p>
          
          <h3>What We Accept</h3>
          <ul>
            <li>Hardware inventions with patents (granted or pending).</li>
            <li>Products integrating novel AI or robotics.</li>
            <li>Sustainable alternatives that fundamentally change manufacturing processes.</li>
            <li>Unique smart devices and IoT solutions.</li>
            <li>Technologically advanced health and wellness tools.</li>
            <li>University-backed engineering prototypes ready for commercialization.</li>
          </ul>

          <h3>What We Do Not Accept</h3>
          <ul>
            <li>Generic clothing or apparel (unless it incorporates smart textiles/technology).</li>
            <li>Dropshipped products from Alibaba, AliExpress, or similar platforms.</li>
            <li>Software-only products (SaaS, apps) without a hardware component.</li>
            <li>Counterfeit goods or products infringing on intellectual property.</li>
          </ul>

          <h3>The Verification System</h3>
          <p>
            To build trust, we encourage all innovators to undergo our Innovation Verification System. This involves submitting patents, research papers, awards, or prototypes to our review team to earn the &quot;Verified Innovator&quot; badge.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
