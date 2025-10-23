import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  iconColor?: string;
}

export const StatCard = ({ title, value, subtitle, icon: Icon, iconColor = "text-primary-dark" }: StatCardProps) => {
  return (
    <Card className="p-6 transition-shadow hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
        <div className={`p-2 ${iconColor}`}>
          <Icon className="w-5 h-5 " />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </Card>
  );
};
