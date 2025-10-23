"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Calendar,
  Clock,
  MapPin,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const mockAgendaItems = [
  {
    time: "09:00 - 10:00",
    speaker: "Mr. Nazy Ajanah",
    title: "An inspiring look at where artificial intelligence is heading",
    date: "2025-10-20",
    timeSlot: "09:00 - 10:00",
    location: "Main Hall A",
    type: "keynote",
    session: "Design Thinking Workshop",
  },
  {
    time: "10:00 - 11:00",
    speaker: "Dr. Hadiza Lawal",
    title: "Design for everyone: accessibility and innovation",
    date: "2025-10-20",
    timeSlot: "10:00 - 11:00",
    location: "Main Hall B",
    type: "workshop",
    session: "UX and Accessibility",
  },
  {
    time: "11:00 - 11:30",
    speaker: "-",
    title: "Networking Coffee Break",
    date: "2025-10-20",
    timeSlot: "11:00 - 11:30",
    location: "Exhibition Lounge",
    type: "break",
    session: "Networking",
  },
  {
    time: "11:30 - 12:30",
    speaker: "Mr. Samuel Ade",
    title: "The power of collaboration in tech ecosystems",
    date: "2025-10-20",
    timeSlot: "11:30 - 12:30",
    location: "Main Hall A",
    type: "panel",
    session: "Tech Ecosystems",
  },
  {
    time: "01:00 - 02:00",
    speaker: "Aisha Musa",
    title: "Building scalable apps with modern design systems",
    date: "2025-10-20",
    timeSlot: "01:00 - 02:00",
    location: "Room 204",
    type: "workshop",
    session: "Frontend Engineering",
  },
];

const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    keynote: "bg-purple-100 text-purple-800 hover:bg-purple-100",
    break: "bg-gray-100 text-gray-800 hover:bg-gray-100",
    workshop: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    panel: "bg-green-100 text-green-800 hover:bg-green-100",
  };
  return colors[type] || "bg-gray-100 text-gray-800";
};

const AgendaPageContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(mockAgendaItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = mockAgendaItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
      <div className="space-y-6">
    
        {/* Search and Add */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
            <Input placeholder="Search agenda" className="pl-10" />
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Agenda Item
          </Button>
        </div>

        {/* Agenda List */}
        <div className="space-y-4">
          {currentItems.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-1 gap-4">
                    <div className="text-sm font-medium min-w-[80px]">
                      {item.time}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="mb-1 font-semibold">{item.speaker}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.title}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {item.timeSlot}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>

                      <div>
                        <Badge variant="outline" className="font-normal">
                          {item.session}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge className={getTypeColor(item.type)}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Duplicate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t rounded-md bg-muted/30">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1}–
            {Math.min(startIndex + itemsPerPage, mockAgendaItems.length)} of{" "}
            {mockAgendaItems.length} agenda items
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Prev
            </Button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
  );
};

export default AgendaPageContent;
