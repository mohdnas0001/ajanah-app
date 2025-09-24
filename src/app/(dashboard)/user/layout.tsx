'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Bell, CalendarDays, ChevronDown, LayoutDashboard, MessagesSquare, Settings, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

// Skeleton Loader Component
function DashboardSkeleton() {
  return (
    <div className="flex flex-col min-h-screen animate-pulse">
      <nav className="px-4 py-3 border-b bg-background border-border">
        <div className="flex items-center justify-between">
          <div className="w-[60px] h-[20px] bg-gray-200 rounded" />
          <div className="items-center hidden space-x-8 md:flex">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-200 rounded" />
                <div className="w-20 h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div className="w-24 h-8 bg-gray-200 rounded" />
          </div>
        </div>
      </nav>
      <main className="flex-1 p-6">
        <div className="w-full h-64 mb-4 bg-gray-200 rounded" />
        <div className="w-full h-32 bg-gray-200 rounded" />
      </main>
    </div>
  );
}

export default function UserDashboardLayout({
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
    <div className="flex flex-col min-h-screen">
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
                <a
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
                </a>
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
                <a
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
                </a>
              );
            })}
          </div>
        )}
      </nav>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}