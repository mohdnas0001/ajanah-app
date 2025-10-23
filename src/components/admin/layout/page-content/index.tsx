'use client';

import React, { ReactNode } from "react";

interface PageContentProps {
  header?: ReactNode; // can pass <PageHeader /> or any custom header
  children: ReactNode;
  className?: string;
}

export const PageContent: React.FC<PageContentProps> = ({ header, children, className }) => {
  return (
    <div className={`p-2 md:p-6 space-y-8 ${className || ""}`}>
      {header && <div>{header}</div>}
      <div>{children}</div>
    </div>
  );
};
