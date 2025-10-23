"use client";
 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Send, Download, QrCode, CheckCircle2, Clock } from "lucide-react";
import { StatCard } from "../../stats-card";

const mockETags = [
  {
    id: "E001",
    name: "Mr. Nazy Ajanah",
    title: "Designer Director",
    userType: "Participant",
    userId: "E001",
    qrCode: "QR-E001-2025",
    status: "Issued",
  },
  {
    id: "E002",
    name: "Mr. Nazy Ajanah",
    title: "Designer Director",
    userType: "Speaker",
    userId: "E001",
    qrCode: "QR-E001-2025",
    status: "Issued",
  },
  {
    id: "E003",
    name: "Mr. Nazy Ajanah",
    title: "Designer Director",
    userType: "Exhibitor",
    userId: "E001",
    qrCode: "QR-E001-2025",
    status: "Issued",
  },
  {
    id: "E004",
    name: "Mr. Nazy Ajanah",
    title: "Designer Director",
    userType: "Participant",
    userId: "E001",
    qrCode: "QR-E001-2025",
    status: "Pending",
  },
];

const getUserTypeColor = (type: string) => {
  switch (type) {
    case "Participant":
      return "bg-blue-100 text-blue-700";
    case "Speaker":
      return "bg-purple-100 text-purple-700";
    case "Exhibitor":
      return "bg-teal-100 text-teal-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const ETagsPageContent = () => {
  const totalETags = mockETags.length;
  const issuedETags = mockETags.filter((tag) => tag.status === "Issued").length;
  const pendingETags = mockETags.filter((tag) => tag.status === "Pending").length;

  return (
      <div className="space-y-6">
        

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard
            title="Total E-Tags"
            value={totalETags.toString()}
            subtitle="All generated e-tags"
            icon={QrCode}
          />
          <StatCard
            title="Total E-Tags"
            value={issuedETags.toString()}
            subtitle="Issued e-tags"
            icon={CheckCircle2}
          />
          <StatCard
            title="Total E-Tags"
            value={pendingETags.toString()}
            subtitle="Pending e-tags"
            icon={Clock}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="relative w-full sm:w-96">
            <Search className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
            <Input
              placeholder="Search agenda"
              className="pl-10"
            />
          </div>
          <div className="flex w-full gap-2 sm:w-auto">
            <Button variant="outline" className="flex-1 sm:flex-none">
              <Send className="w-4 h-4 mr-2" />
              Send All
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="flex-1 sm:flex-none">
              + Generate E-Tag
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockETags.map((tag) => (
            <Card key={tag.id}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{tag.name}</h3>
                    <p className="text-sm text-muted-foreground">{tag.title}</p>
                  </div>
                  <Badge
                    variant={tag.status === "Issued" ? "default" : "secondary"}
                    className={
                      tag.status === "Issued"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                    }
                  >
                    {tag.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">User Type:</span>
                    <Badge variant="secondary" className={getUserTypeColor(tag.userType)}>
                      {tag.userType}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">User ID:</span>
                    <span className="font-medium">{tag.userId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">QR Code:</span>
                    <span className="font-medium">{tag.qrCode}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
                  <QrCode className="w-24 h-24 text-gray-400" />
                </div>

                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  );
};

export default ETagsPageContent;
