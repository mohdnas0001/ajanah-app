'use client';

import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EventCard from "@/components/events-card";
import HeroSection from "@/components/hero-section";
import Newsletter from "@/components/newsletter";
import { EmptyState } from "@/components/empty-state";
import EventScheduler from "@/components/calendar";

export default function DashboardPage() {
  const [hasEvents, setHasEvents] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample event data
  const events = [
    {
      title: "Digital Nigeria",
      description: "Leading healthcare professionals gather to discuss the future of digital transformation in medical...",
      date: "October 10 2025",
      location: "Abuja, Nigeria",
      image: "/images/image-1.svg",
      isFree: true
    },
    {
      title: "Gitex Nigeria 2025",
      description: "Leading healthcare professionals gather to discuss the future of digital transformation in medical...",
      date: "October 10 2025",
      location: "Lagos Nigeria",
      image: "/images/image-2.svg",
      isFree: true
    },
    {
      title: "GTA Conference",
      description: "Leading healthcare professionals gather to discuss the future of digital transformation in medical...",
      date: "October 10 2025",
      location: "Lagos, Nigeria",
      image: "/images/image-3.svg",
      price: "$10.00"
    }
  ];

  return (
    <div className="bg-background">
      <HeroSection />
      
      <div className="px-6 py-8">
        <div className="mx-auto max-w-8xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Left Sidebar */}
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center flex-1 space-x-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 font-neue-regrade"
                    />
                  </div>
                  <Button className="font-medium bg-primary hover:bg-primary-hover text-primary-foreground font-neue-regrade">
                    Search
                  </Button>
                </div>
              </div>
              <EventScheduler />
              <Newsletter />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              
              
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-neue-regrade text-foreground">My Events</h2>
                <div className="flex items-center space-x-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center space-x-2">
                        <span className="font-neue-regrade">Lagos</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Lagos</DropdownMenuItem>
                      <DropdownMenuItem>Abuja</DropdownMenuItem>
                      <DropdownMenuItem>Port Harcourt</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span className="font-neue-regrade">Recent</span>
                  </Button>
                </div>
              </div>
              
              {/* Events Content */}
              <div className="space-y-4">
                {hasEvents ? (
                  events.map((event, index) => (
                    <EventCard key={index} {...event} />
                  ))
                ) : (
                  <EmptyState />
                )}
              </div>
              
              {/* Toggle for demo purposes */}
              <div className="flex justify-center mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setHasEvents(!hasEvents)}
                  className="font-neue-regrade"
                >
                  {hasEvents ? "Show Empty State" : "Show Events"}
                </Button>
              </div>
              
              {hasEvents && (
                <div className="flex justify-end mt-8">
                  <Button variant="ghost" className="font-medium text-primary font-neue-regrade">
                    See All
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
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
  );
}