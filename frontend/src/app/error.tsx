"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4">
      <div className="text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-foreground">System Malfunction</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
          We encountered an unexpected error while processing your request. Our engineering team has been notified.
        </p>
        <div className="flex gap-4">
          <Button size="lg" onClick={() => reset()} className="rounded-full px-8">
            Try Again
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.location.href = '/'} className="rounded-full px-8">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
