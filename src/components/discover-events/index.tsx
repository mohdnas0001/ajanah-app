"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { EventCard } from "@/components/discover-events/events-card";
import { FilterSidebar } from "@/components/discover-events/filter-sidebar";

const sampleEvents = [
  {
    id: "1",
    title: "Digital Healthcare Summit 2025",
    date: "October 10 2025",
    type: "Conference",
    location: "Lagos, Nigeria",
    price: "Free",
    imageUrl: "/api/placeholder/400/300",
    organizer: "ONDI",
    attendees: 150,
  },
  {
    id: "2",
    title: "Digital Nigeria 2025",
    date: "November 24 2025",
    type: "Networking",
    location: "Lagos, Nigeria",
    price: "$15.00",
    imageUrl: "/api/placeholder/400/300",
    organizer: "NITDA",
    attendees: 245,
  },
  {
    id: "3",
    title: "Digital Nigeria 2025",
    date: "November 24 2025",
    type: "Networking",
    location: "Lagos, Nigeria",
    price: "$10.00",
    imageUrl: "/api/placeholder/400/300",
    organizer: "NITDA",
    attendees: 189,
  },
  {
    id: "4",
    title: "Digital Healthcare Summit 2025",
    date: "October 10 2025",
    type: "Conference",
    location: "Lagos, Nigeria",
    price: "Free",
    imageUrl: "/api/placeholder/400/300",
    organizer: "ONDI",
    attendees: 120,
  },
  {
    id: "5",
    title: "Digital Nigeria 2025",
    date: "November 24 2025",
    type: "Networking",
    location: "Lagos, Nigeria",
    price: "$5.00",
    imageUrl: "/api/placeholder/400/300",
    organizer: "NITDA",
    attendees: 98,
  },
  {
    id: "6",
    title: "Digital Nigeria 2025",
    date: "November 24 2025",
    type: "Networking",
    location: "Lagos, Nigeria",
    price: "$20.00",
    imageUrl: "/api/placeholder/400/300",
    organizer: "NITDA",
    attendees: 312,
  },
];

const DiscoverEventsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">

      {/* Navigation Tabs */}
      <div className="p-1 border-b border-border bg-card">
        <div className="px-6 mx-auto max-w-9xl">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-transparent border-b-0">
              <TabsTrigger
                value="all"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="my-events"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                My Events
              </TabsTrigger>
              <TabsTrigger
                value="bookmarks"
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                Bookmarks
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-6 py-8 mx-auto max-w-9xl">
        <div className="flex flex-col gap-4 mb-8 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
            <Input
              placeholder="Search Events"
              className="pl-10 bg-card"
            />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
            <Input
              placeholder="Locations"
              className="pl-10 bg-card"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Search
          </Button>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar />
          </aside>

          {/* Events Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2 "
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {sampleEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverEventsSection ;