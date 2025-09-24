import { Button } from "@/components/ui/button";

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16">
      {/* Illustration */}
      <div className="relative mb-8">
        {/* Calendar stack illustration */}
        <div className="relative">
          {/* Back calendars */}
          <div className="absolute w-16 h-20 transform rounded-lg -top-2 -left-2 bg-neutral-dark opacity-30 rotate-12"></div>
          <div className="absolute w-16 h-20 transform rounded-lg opacity-50 -top-1 -left-1 bg-neutral rotate-6"></div>
          
          {/* Front calendar */}
          <div className="relative w-16 h-20 border-2 rounded-lg bg-card border-border">
            {/* Calendar header */}
            <div className="h-3 rounded-t-lg bg-neutral"></div>
            
            {/* Calendar grid */}
            <div className="p-2 grid grid-cols-7 gap-0.5">
              {Array.from({ length: 28 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-neutral-hover opacity-60"></div>
              ))}
            </div>
            
            {/* Ring binding */}
            <div className="absolute w-1 h-2 rounded-full -top-1 left-2 bg-neutral-darker"></div>
            <div className="absolute w-1 h-2 rounded-full -top-1 right-2 bg-neutral-darker"></div>
          </div>
        </div>
      </div>
      
      {/* Empty state text */}
      <h3 className="mb-4 text-xl font-semibold font-neue-regrade text-foreground">
        There&apos;s nothing to see here
      </h3>
      
      {/* Call to action */}
      <Button className="font-medium bg-primary hover:bg-primary-hover text-primary-foreground font-neue-regrade">
        + Browse Events
      </Button>
    </div>
  );
};