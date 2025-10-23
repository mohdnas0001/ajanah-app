'use client';

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockParticipants = [
  {
    id: "P001",
    name: "Nasir Muhd",
    email: "nasir@startup.com",
    company: "StartUp Ventures",
    role: "CEO",
    registrationDate: "2025-09-15",
    status: "confirmed",
    checkIn: "Checked In",
  },
  {
    id: "P002",
    name: "Alamin S",
    email: "almin@startup.com",
    company: "Innovate Solution",
    role: "CTO",
    registrationDate: "2025-09-18",
    status: "confirmed",
    checkIn: "Checked In",
  },
  {
    id: "P003",
    name: "Nazy Ajanah",
    email: "Nazy@startup.com",
    company: "Digital Nigeria",
    role: "Designer",
    registrationDate: "2025-09-20",
    status: "pending",
    checkIn: "Checked In",
  },
  {
    id: "P004",
    name: "Ibrahim Muhd",
    email: "Ibrahim@startup.com",
    company: "Enterprise System",
    role: "Developer",
    registrationDate: "2025-09-22",
    status: "confirmed",
    checkIn: "Checked In",
  },
  {
    id: "P005",
    name: "Yusuf",
    email: "yusuf@startup.com",
    company: "TechCorp Inc",
    role: "Designer",
    registrationDate: "2025-09-25",
    status: "confirmed",
    checkIn: "Checked In",
  },
  // Duplicate entries to simulate more data
  ...Array.from({ length: 25 }, (_, i) => ({
    id: `P${i + 6}`,
    name: `Participant ${i + 6}`,
    email: `participant${i + 6}@example.com`,
    company: "Event Co",
    role: "Attendee",
    registrationDate: "2025-09-30",
    status: i % 2 === 0 ? "confirmed" : "pending",
    checkIn: "Checked In",
  })),
];

export default function ParticipantsPageContent() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filtered = useMemo(() => {
    return mockParticipants.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const visibleRows = filtered.slice(startIdx, endIdx);

  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return (
    <div className="space-y-6">
      {/* Search & Actions */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
          <Input
            placeholder="Search Participant"
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add participant
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-lg bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Registration Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Check-in</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleRows.map((participant) => (
              <TableRow key={participant.id}>
                <TableCell className="font-medium">{participant.id}</TableCell>
                <TableCell>{participant.name}</TableCell>
                <TableCell className="text-muted-foreground">{participant.email}</TableCell>
                <TableCell>{participant.company}</TableCell>
                <TableCell>{participant.role}</TableCell>
                <TableCell>{participant.registrationDate}</TableCell>
                <TableCell>
                  <Badge
                    variant={participant.status === "confirmed" ? "default" : "secondary"}
                    className={
                      participant.status === "confirmed"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    }
                  >
                    {participant.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className="text-green-800 bg-green-100 hover:bg-green-100">
                    {participant.checkIn}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-1">
        <p className="text-sm text-muted-foreground">
          Showing {startIdx + 1}–{Math.min(endIdx, filtered.length)} of {filtered.length} participants
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
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
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
