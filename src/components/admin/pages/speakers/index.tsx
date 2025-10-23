'use client';

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Building2, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const mockSpeakers = [
  {
    id: "S001",
    name: "Mr. Nazy Ajanah",
    title: "Designer Director",
    company: "Design Co",
    email: "nazy@design.co",
    bio: "Award-winning UX designer focused on accessibility and creative design systems.",
    sessions: ["Design Thinking Workshop", "Panel: Future of UX"],
  },
  {
    id: "S002",
    name: "Dr. Nasir Foster",
    title: "AI Research Lead",
    company: "Tech Innovations",
    email: "nasir@techinnovations.com",
    bio: "Expert in scalable AI systems and ethical machine learning practices.",
    sessions: ["AI in Everyday Life", "Ethics in Technology"],
  },
  {
    id: "S003",
    name: "Ms. Nazy Bello",
    title: "Product Manager",
    company: "NextGen Labs",
    email: "bello@nextgen.com",
    bio: "Focuses on product-led growth and agile design processes.",
    sessions: ["Scaling with DesignOps", "Team Collaboration"],
  },
  ...Array.from({ length: 22 }, (_, i) => ({
    id: `S${i + 4}`,
    name: `Speaker ${i + 4}`,
    title: "Event Speaker",
    company: "Innovation Hub",
    email: `speaker${i + 4}@event.com`,
    bio: "Experienced speaker passionate about innovation and growth.",
    sessions: ["Future of Events", "Tech in 2025"],
  })),
];

export default function SpeakersPageContent() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const filtered = useMemo(() => {
    return mockSpeakers.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const visibleSpeakers = filtered.slice(startIdx, endIdx);

  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
        <Input
          placeholder="Search speakers"
          className="pl-10"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Speaker Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleSpeakers.map((speaker, index) => (
          <Card key={index}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground">{speaker.title}</p>
                </div>
                <Badge variant="secondary" className="bg-gray-100">
                  {speaker.id}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="w-4 h-4" />
                  {speaker.company}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  {speaker.email}
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{speaker.bio}</p>

              <div>
                <p className="mb-2 text-sm font-medium">
                  Sessions ({speaker.sessions.length}):
                </p>
                <div className="flex flex-wrap gap-2">
                  {speaker.sessions.map((session, idx) => (
                    <Badge key={idx} variant="outline" className="font-normal">
                      {session}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1">
                  Edit
                </Button>
                <Button variant="outline" className="flex-1">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-1">
        <p className="text-sm text-muted-foreground">
          Showing {startIdx + 1}–{Math.min(endIdx, filtered.length)} of{" "}
          {filtered.length} speakers
        </p>

        <div className="flex items-center gap-4">
          {/* Rows per page selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Rows per page:</span>
            <Select
              value={rowsPerPage.toString()}
              onValueChange={(value) => {
                setRowsPerPage(Number(value));
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="h-8 w-[70px] text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="24">24</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Page controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="w-8 h-8"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="w-8 h-8"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
