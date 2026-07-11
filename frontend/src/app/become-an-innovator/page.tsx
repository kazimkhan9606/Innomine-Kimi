import { Button } from "@/components/ui/button";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";
import { Rocket, Video, ShieldCheck, TrendingUp } from "lucide-react";

export default function BecomeInnovatorPage() {
  const benefits = [
    { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Targeted Audience", desc: "Reach early adopters and tech enthusiasts actively looking for the next big thing." },
    { icon: <Video className="w-8 h-8 text-primary" />, title: "Video Commerce", desc: "Use short-form reels to demonstrate your product's functionality and tell your founder story." },
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "Build Trust", desc: "Earn the Verified Innovator badge to instantly validate your technology." },
    { icon: <Rocket className="w-8 h-8 text-primary" />, title: "Lower CAC", desc: "Stop wasting money on social media ads. Let our innovation feed drive organic discovery." },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Launch Your Innovation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Stop struggling to sell groundbreaking tech on generic marketplaces. Join the platform built specifically for founders, inventors, and hardware startups.
          </p>
          <Button size="lg" className="rounded-full px-10 h-14 text-lg">Apply Now</Button>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
        {benefits.map((benefit, i) => (
          <Reveal key={i} delay={0.1 * i} className="flex gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
