import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <FadeIn>
        <SectionHeader 
          title="Terms of Service" 
        />
      </FadeIn>
      
      <div className="prose prose-lg dark:prose-invert mt-8">
        <Reveal delay={0.1}>
          <p className="text-muted-foreground">Last updated: October 2026</p>
          
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using the Innomine platform, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the platform.
          </p>
          
          <h3>2. Marketplace Role</h3>
          <p>
            Innomine acts as a marketplace that allows users (Buyers) to purchase innovative products directly from verified creators (Innovators). Innomine is not a party to the transactions between Buyers and Innovators, and is not responsible for the products sold.
          </p>

          <h3>3. Innovator Verification</h3>
          <p>
            While we require Innovators to undergo a verification process to ensure the authenticity of their innovations, we do not guarantee the quality, safety, or legality of the products listed. Buyers should exercise their own judgment when making purchases.
          </p>

          <h3>4. Content and Reels</h3>
          <p>
            Users may upload content, including videos (Reels). You retain ownership of your content, but grant Innomine a license to use, display, and distribute it on the platform for promotional purposes.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
