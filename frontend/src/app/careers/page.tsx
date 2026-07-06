import { SectionHeader } from "@/components/custom/SectionHeader";
import { FadeIn, Reveal } from "@/components/providers/MotionProvider";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const openings = [
    { id: 1, title: "Senior Full Stack Engineer", dept: "Engineering", location: "Remote / San Francisco" },
    { id: 2, title: "Product Designer (UI/UX)", dept: "Design", location: "Remote / New York" },
    { id: 3, title: "Innovation Curator & Verifier", dept: "Operations", location: "Remote" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <FadeIn>
        <SectionHeader 
          title="Join Our Team" 
          subtitle="Help us build the stage for the world&apos;s greatest innovations."
          centered
        />
      </FadeIn>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-foreground">Open Positions</h3>
        
        <div className="space-y-4">
          {openings.map((job, index) => (
            <Reveal key={job.id} delay={0.1 * index}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-card border border-border rounded-2xl shadow-sm hover:border-primary/50 transition-colors">
                <div className="mb-4 sm:mb-0">
                  <h4 className="text-xl font-bold mb-2">{job.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="bg-muted px-2 py-1 rounded-md">{job.dept}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <Button variant="outline">View Role</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
