import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <FadeIn>
        <SectionHeader 
          title="Privacy Policy" 
          subtitle="How we collect, use, and protect your data."
        />
      </FadeIn>
      
      <div className="prose prose-lg dark:prose-invert mt-8">
        <Reveal delay={0.1}>
          <p className="text-muted-foreground">Last updated: October 2026</p>
          
          <h3>1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you create or modify your account, request support, make purchases, or communicate with us. This information may include your name, email, payment information, and shipping address.
          </p>
          
          <h3>2. How We Use Information</h3>
          <p>
            We use the information we collect to deliver the services you request, process transactions, send related information (including confirmations and receipts), provide customer support, and communicate with you about products, services, offers, and events.
          </p>

          <h3>3. Sharing of Information</h3>
          <p>
            We may share your information with Innovators (Sellers) to fulfill your orders, and with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
          </p>

          <h3>4. Security</h3>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
