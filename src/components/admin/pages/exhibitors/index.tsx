"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Download, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const mockExhibitors = [
  {
    id: "P001",
    companyName: "StartUP Ventures",
    contactPerson: "Nasir Muhd",
    email: "nasir@startup.com",
    phone: "+2348068608064",
    booth: "A-12",
    category: "Tech",
    status: "confirmed",
  },
  {
    id: "P002",
    companyName: "Enterprise System",
    contactPerson: "Ibrahim Muhd",
    email: "ibrahim@startup.com",
    phone: "+2348068608064",
    booth: "B-08",
    category: "Enterprise",
    status: "confirmed",
  },
  {
    id: "P003",
    companyName: "TechCorp Inc",
    contactPerson: "Yusuf",
    email: "yusuf@startup.com",
    phone: "+2348068608064",
    booth: "A-15",
    category: "AI",
    status: "pending",
  },
  {
    id: "P004",
    companyName: "Innovate Africa",
    contactPerson: "Suleiman Bello",
    email: "suleiman@innovate.com",
    phone: "+2348012345678",
    booth: "C-03",
    category: "Startups",
    status: "confirmed",
  },
  {
    id: "P005",
    companyName: "DevSpace Labs",
    contactPerson: "Aisha Musa",
    email: "aisha@devspace.com",
    phone: "+2348099999999",
    booth: "B-22",
    category: "Research",
    status: "pending",
  },
];

const ExhibitorPageContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(mockExhibitors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentExhibitors = mockExhibitors.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
      <div className="space-y-6">
       

        {/* Search and Actions */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
            <Input placeholder="Search Exhibitor" className="pl-10" />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <MapPin className="w-4 h-4" />
              Booth Map
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Exhibitor
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden border rounded-lg bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Company Name</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Booth</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentExhibitors.map((exhibitor) => (
                <TableRow key={exhibitor.id}>
                  <TableCell className="font-medium">{exhibitor.id}</TableCell>
                  <TableCell>{exhibitor.companyName}</TableCell>
                  <TableCell>{exhibitor.contactPerson}</TableCell>
                  <TableCell className="text-muted-foreground">{exhibitor.email}</TableCell>
                  <TableCell className="text-muted-foreground">{exhibitor.phone}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{exhibitor.booth}</Badge>
                  </TableCell>
                  <TableCell>{exhibitor.category}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        exhibitor.status === "confirmed" ? "default" : "secondary"
                      }
                      className={
                        exhibitor.status === "confirmed"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      }
                    >
                      {exhibitor.status}
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

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 border-t bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Showing {startIndex + 1}–
              {Math.min(startIndex + itemsPerPage, mockExhibitors.length)} of{" "}
              {mockExhibitors.length}
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
      </div>
  );
};

export default ExhibitorPageContent;
