"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  Users,
  Bookmark,
  Mail,
  Phone,
  Globe,
  VideoIcon,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

const EventDetail = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none">
            <rect x="100" y="50" width="80" height="80" fill="currentColor" transform="rotate(45 140 90)" />
            <rect x="300" y="150" width="60" height="60" fill="currentColor" transform="rotate(30 330 180)" />
            <rect x="500" y="80" width="70" height="70" fill="currentColor" transform="rotate(60 535 115)" />
            <rect x="800" y="200" width="90" height="90" fill="currentColor" transform="rotate(15 845 245)" />
            <rect x="1100" y="100" width="75" height="75" fill="currentColor" transform="rotate(50 1137 137)" />
            <rect x="1300" y="250" width="65" height="65" fill="currentColor" transform="rotate(25 1332 282)" />
          </svg>
        </div>
        
        <div className="relative px-6 py-12 mx-auto max-w-7xl">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/user/discover-events")}
            className="mb-8 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-3 mb-6">
            <Badge className="bg-primary-light text-primary hover:bg-success/90">
              October 10 2025
            </Badge>
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
              Conference
            </Badge>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Digital Healthcare Summit Nigeria 2025
          </h1>

          <p className="max-w-4xl mb-6 text-lg text-white/90">
            Leading healthcare professionals gather to discuss the future of digital transformation in medical technology and patient care.
          </p>

          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-success" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-success" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 mx-auto max-w-7xl">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            <Button
              onClick={() => router.push("/user/register")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Register Now
            </Button>
            <Button variant="outline" size="icon">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="justify-start w-full h-auto p-0 mb-8 bg-transparent border-b rounded-none">
              <TabsTrigger 
                value="overview"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="agenda"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3"
              >
                Agenda
              </TabsTrigger>
              <TabsTrigger 
                value="speakers"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3"
              >
                Speakers
              </TabsTrigger>
              <TabsTrigger 
                value="venue"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3"
              >
                Venue
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="p-8 space-y-8 border bg-card rounded-xl">
              <div>
                <h2 className="mb-4 text-2xl font-bold">
                  About This Event
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Join us for Digital Health Summit Nigeria 2025, the
                  premier conference bringing together healthcare
                  professionals, technology leaders, and policy makers to
                  explore the transformative power of digital health
                  solutions in Nigeria and across Africa.
                </p>
                <p className="mb-4 text-muted-foreground">
                  This year&apos;s theme focuses on practical implementations of
                  telemedicine, electronic health records, AI-driven
                  diagnostics, and mobile health applications that are
                  making real differences in patient outcomes across the
                  continent.
                </p>

                <div className="mt-6">
                  <h3 className="mb-3 font-semibold">What You&apos;ll Learn:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-success">•</span>
                      <span>Latest trends in digital health technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-success">•</span>
                      <span>Successful case studies from across Africa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-success">•</span>
                      <span>Regulatory frameworks and compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-success">•</span>
                      <span>
                        Implementation strategies for healthcare
                        organizations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-success">•</span>
                      <span>
                        Funding opportunities for health-tech startups
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-bold">Event Highlights</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 mb-3 text-success" />
                    <div>
                      <h3 className="font-medium">50+ Expert Speakers</h3>
                      <p className="text-muted-foreground">
                        Industry leaders and innovators
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="w-8 h-8 mb-3 text-success" />
                    <div>
                      <h3 className="font-medium">15+ Countries</h3>
                      <p className="text-muted-foreground">
                        International participation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <VideoIcon className="w-8 h-8 mb-3 text-success" />
                    <div>
                      <h3 className="font-medium">Live Streaming</h3>
                      <p className="text-muted-foreground">
                        Hybrid attendance options
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-bold">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 mt-1 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Date & Time</h3>
                      <p className="text-muted-foreground">
                        October 10, 2025
                      </p>
                      <p className="text-muted-foreground">
                        9:00 AM - 5:00 PM WAT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">
                        Transcorp Hilton Lagos
                      </p>
                      <p className="text-muted-foreground">
                        1 Aguyi Ironsi Street, Lagos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-5 h-5 mt-1 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium">Capacity</h3>
                      <p className="text-muted-foreground">
                        2,000 attendees
                      </p>
                      <p className="text-muted-foreground">
                        1,247 registered
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-bold">Organized By</h2>
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold rounded-full bg-primary text-primary-foreground">
                      O
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">ONDI</h3>
                      <p className="text-sm text-muted-foreground">
                        Healthcare Technology
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>info@ondi.org</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>+234 803 123 4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>ondi.org</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="agenda">
              <div className="py-12 text-center text-muted-foreground">
                Agenda details coming soon...
              </div>
            </TabsContent>

            <TabsContent value="speakers">
              <div className="py-12 text-center text-muted-foreground">
                Speaker information coming soon...
              </div>
            </TabsContent>

            <TabsContent value="venue">
              <div className="py-12 text-center text-muted-foreground">
                Venue information coming soon...
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;