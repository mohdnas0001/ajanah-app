// app/(auth)/layout.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/auth-bg.svg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/5" /> */}
      </div>

      {/* Page Content */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full md:w-2/3 bg-white/90 ">{children}</div>
      </div>
    </div>
  );
}
