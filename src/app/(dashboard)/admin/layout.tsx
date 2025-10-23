'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bell, CalendarDays, ChevronDown, LayoutDashboard, MessagesSquare, Settings, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton"; 
import Image from "next/image";
import { Sidebar } from "@/components/admin/layout/sidebar";
import Footer from "@/components/admin/layout/footer";

function DashboardSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="px-4 py-3 border-b bg-background border-border">
        <div className="flex items-center justify-between">
          <Skeleton className="w-[60px] h-[20px]" />
          <div className="items-center hidden space-x-8 md:flex">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Skeleton className="w-4 h-4 rounded" />
                <Skeleton className="w-20 h-4 rounded" />
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-24 h-8 rounded" />
          </div>
        </div>
      </nav>
      <main className="flex-1 p-6 space-y-6">
        {/* Hero/Stats Section */}
        <div className="space-y-4">
          <Skeleton className="w-48 h-8" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="w-full h-12 rounded-lg" />
                <Skeleton className="w-3/4 h-4 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections - e.g., Recent Events or Messages */}
        <div className="space-y-4">
          <Skeleton className="w-full h-100vH" />
        </div>
      </main>
    </div>
  );
}

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading (replace with your actual loading logic if needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700); // quick and smooth
    return () => clearTimeout(timer);
  }, []);

  // Define your nav items and their paths
  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/user/dashboard",
    },
    {
      label: "Discover Events",
      icon: CalendarDays,
      href: "/user/discover-events",
    },
    {
      label: "Messages",
      icon: MessagesSquare,
      href: "/user/messages",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/user/settings",
    },
  ];

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="flex flex-col h-screen">
      <nav className="px-4 py-3 border-b bg-background border-border">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/icons/ajanah-logo-2.svg"
              alt="Ajanah Logo"
              width={60}
              height={20}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navItems.map(({ label, icon: Icon, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center space-x-2 font-medium font-neue-regrade cursor-pointer transition-colors
                    ${isActive ? "text-[#004B1A] font-bold" : "text-muted-foreground hover:text-foreground"}
                  `}
                >
                  <Icon
                    className="w-4 h-4"
                    fill={isActive ? "#004B1A" : "none"}
                    stroke={isActive ? "#004B1A" : "currentColor"}
                  />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="p-2 md:hidden"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Open navigation"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg" alt="Yusuf Gambo" />
                    <AvatarFallback className="bg-primary text-primary-foreground">YG</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-sm font-medium font-neue-regrade">Yusuf Gambo</div>
                    <div className="text-xs text-muted-foreground">Participant</div>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileNavOpen && (
          <div className="flex flex-col mt-3 space-y-2 md:hidden">
            {navItems.map(({ label, icon: Icon, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center space-x-2 px-2 py-2 rounded font-medium font-neue-regrade cursor-pointer transition-colors
                    ${isActive ? "text-[#004B1A] font-bold bg-[#e6f4ec]" : "text-muted-foreground hover:text-foreground"}
                  `}
                  onClick={() => setMobileNavOpen(false)}
                >
                  <Icon
                    className="w-4 h-4"
                    fill={isActive ? "#004B1A" : "none"}
                    stroke={isActive ? "#004B1A" : "currentColor"}
                  />
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
      <main className="flex flex-1 min-h-0">
        <Sidebar  />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
          <Footer/>
    </div>
  );
}