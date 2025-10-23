import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`space-y-1 ${className || ""}`}>
      <h1 className="mb-1 text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
};
