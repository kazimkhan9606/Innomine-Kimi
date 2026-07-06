import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <FadeIn>
        <SectionHeader 
          title="About Innomine" 
          subtitle="We are building the future of commerce by connecting visionary creators with early adopters."
          centered
        />
      </FadeIn>
      
      <div className="prose prose-lg dark:prose-invert mx-auto mt-12">
        <Reveal delay={0.1}>
          <h3>Our Mission</h3>
          <p>
            Innomine exists to remove the barriers that prevent innovative products from reaching customers. By providing a premium marketplace with integrated marketing, product storytelling, and advanced commerce tools, we enable innovators to focus on building exceptional products.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <h3>The Problem We&apos;re Solving</h3>
          <p>
            Many inventors, startups, university research groups, and hardware companies build exceptional products but lack the resources to market them effectively. Traditional marketplaces are optimized for high-volume retail, making it difficult for newly launched innovations to gain exposure.
          </p>
          <p>
            Customers interested in innovation also face challenges. There is no dedicated marketplace where they can confidently explore emerging technologies, compare inventions, learn about creators, and purchase from verified founders.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <h3>Our Solution</h3>
          <p>
            Innomine is designed as a specialized digital marketplace focused exclusively on innovation. We combine premium e-commerce functionality with modern content-driven discovery to create an ecosystem where innovative products can thrive.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
