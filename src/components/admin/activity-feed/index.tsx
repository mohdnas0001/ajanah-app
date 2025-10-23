import { Card } from "@/components/ui/card";

interface Activity {
  id: number;
  title: string;
  subtitle: string;
  color: string;
}

interface ActivityFeedProps {
  title: string;
  activities: Activity[];
}

export const ActivityFeed = ({ title, activities }: ActivityFeedProps) => {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">{title}</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <div className={`w-1 rounded-full ${activity.color}`} />
            <div className="flex-1">
              <p className="text-sm font-medium mb-0.5">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
