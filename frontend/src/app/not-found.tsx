"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-primary mb-4 tracking-tighter">404</h1>
        <h2 className="text-3xl font-bold mb-6 text-foreground">Innovation Not Found</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
          It looks like the page or product you&apos;re looking for doesn&apos;t exist yet, or it has been moved to a new dimension.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="rounded-full px-8">
            <Link href="/">Return Home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full px-8">
            <Link href="/explore">Explore Innovations</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
