'use client';

import { StatCard } from "@/components/admin/stats-card";
import { ActivityFeed } from "@/components/admin/activity-feed";
import { Users, Mic, Building2, UserCheck, Calendar, TrendingUp } from "lucide-react";

const stats = [
  { title: "Total participants", value: "1284", subtitle: "+13% from last event", icon: Users, iconColor: "text-primary-darker" },
  { title: "Speakers", value: "40", subtitle: "+8 confirmed", icon: Mic, iconColor: "text-primary-darker" },
  { title: "Exhibitors", value: "60", subtitle: "5 pending", icon: Building2, iconColor: "text-primary-darker" },
  { title: "Check-ins Today", value: "890", subtitle: "60% of total", icon: UserCheck, iconColor: "text-primary-darker" },
  { title: "Agenda Items", value: "35", subtitle: "5 sessions today", icon: Calendar, iconColor: "text-primary-darker" },
  { title: "Engagement Rate", value: "87%", subtitle: "+5% vs. last year", icon: TrendingUp, iconColor: "text-primary-darker" },
];

const recentActivityLeft = [
  { id: 1, title: "New speaker confirmed", subtitle: "Dr. Nasir Foster - 2 hours ago", color: "bg-success" },
  { id: 2, title: "45 participants checked in", subtitle: "Session: Digital Nigeria - 4 hours ago", color: "bg-info" },
  { id: 3, title: "New exhibitor registered", subtitle: "Session: Future of AI - 6 hours ago", color: "bg-purple" },
  { id: 4, title: "Agenda update", subtitle: "Workshop session rescheduled - 7 hours ago", color: "bg-warning" },
];

const recentActivityRight = [
  { id: 1, title: "Opening keynote: Future of AI", subtitle: "Dr. Nasir Muhammad", color: "bg-purple" },
  { id: 2, title: "Workshop: Scalable Systems", subtitle: "Mr. Ibrahim", color: "bg-success" },
  { id: 3, title: "Panel: Ethics in Technology", subtitle: "Multiple Speakers", color: "bg-info" },
  { id: 4, title: "Design Thinking Workshop", subtitle: "Dr. Nazy Ajanah", color: "bg-warning" },
];

export default function DashboardPageContent() {
  return (
      <div className="space-y-6" >
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ActivityFeed title="Recent Activity" activities={recentActivityLeft} />
        <ActivityFeed title="Recent Activity" activities={recentActivityRight} />
      </div>
      </div>

  );
}
