'use client';

import {
  Home,
  Users,
  Mic,
  Building2,
  Calendar,
  Tag,
  Settings,
  LogOut,
  Menu, // Add Menu icon for the hamburger button
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react"; // Add useState import

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: Home, section: "Overview" },
  { name: "Participants", href: "/admin/participants", icon: Users, section: "Management" },
  { name: "Speakers", href: "/admin/speakers", icon: Mic, section: "Management" },
  { name: "Exhibitor", href: "/admin/exhibitor", icon: Building2, section: "Management" },
  { name: "Agenda", href: "/admin/agenda", icon: Calendar, section: "Management" },
  { name: "E-Tags", href: "/admin/e-tags", icon: Tag, section: "Management" },
];

interface SidebarProps {
  // Optional prop for external toggle if needed
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen: externalIsOpen, onToggle: externalOnToggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Use external if provided, otherwise internal
  const isOpen = externalIsOpen ?? internalIsOpen;
  const toggleOpen = externalOnToggle ?? (() => setInternalIsOpen((prev) => !prev));

  // Detect if a route is active or nested under it
  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  // Close sidebar on route change (for mobile)
  const handleLinkClick = () => {
    if (!externalIsOpen && window.innerWidth < 1024) { // lg breakpoint is 1024px
      setInternalIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button - Place this in your header/layout outside the sidebar */}
      {/* Example: <button onClick={toggleOpen} className="p-2 lg:hidden"> */}
      {/*   <Menu className="w-6 h-6" /> */}
      {/* </button> */}

      <aside className={cn(
        "flex flex-col w-64 border-r bg-sidebar border-sidebar-border z-50",
        "fixed inset-y-0 left-0 transform -translate-x-full transition-transform duration-200 ease-in-out lg:static lg:inset-auto lg:z-auto lg:translate-x-0 lg:transform-none",
        isOpen && "translate-x-0"
      )}>
        <div className="px-4 mt-6 mb-2">
          <h3 className="px-3 mb-2 text-lg font-semibold tracking-wider uppercase text-foreground">
            Admin portal
          </h3>
          {/* Mobile close button */}
          <button
            onClick={toggleOpen}
            className="absolute p-2 rounded-lg lg:hidden top-4 right-4 hover:bg-sidebar-accent/50"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {/* Overview Section */}
          <div className="mb-6">
            <p className="px-3 mb-2 text-xs font-semibold text-muted-foreground">
              Overview
            </p>
            <Link
              href="/admin/dashboard"
              onClick={handleLinkClick}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200",
                isActive("/admin/dashboard")
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <Home
                className={cn(
                  "w-5 h-5 transition-colors ",
                )}
              />
              Dashboard
            </Link>
          </div>

          {/* Management Section */}
          <div>
            <p className="px-3 mb-2 text-xs font-semibold text-muted-foreground">
              Management
            </p>
            {navigation.slice(1).map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-colors",
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-sidebar-border">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors w-full">
            <Settings className="w-5 h-5" />
            Settings
          </button>

          <div className="flex items-center gap-3 px-3 mt-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
              <span className="font-semibold text-primary-foreground">NA</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">NAZIH AJANAH</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
            <button className="transition-colors text-muted-foreground hover:text-foreground">
              <LogOut onClick={() => router.push("/signin")} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Optional: Overlay for mobile to close on outside click */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/50"
          onClick={toggleOpen}
        />
      )}
    </>
  );
};