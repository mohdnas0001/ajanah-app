"use client";

import DiscoverEventsSection from "@/components/discover-events";

export default function DiscoverEventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-primary" style={{ backgroundImage: 'url("/images/hero-section-discover-events-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="z-10 flex items-center justify-center px-2 py-6 md:py-8 md:px-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-white font-neue-regrade">
              Discover Events
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-center font-neue-regrade text-primary-foreground/90">
              Our event management web app makes registration seamless, 
              ticketing effortless, and engagement unforgettable — all in one 
              platform.
            </p>
          </div>
        </div>
      </div>

      <div>
        {/* Discover Events Section */}
        <DiscoverEventsSection />
        
        {/* Footer */}
        <footer className="py-6 text-center border-t border-border">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-primary">
              <span className="text-xs text-primary-foreground">✓</span>
            </div>
            <span className="font-neue-regrade">Ajanah Events. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}