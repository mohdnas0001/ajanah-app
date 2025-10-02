import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    type: string;
    location: string;
    price: string;
    imageUrl: string;
    organizer: string;
    attendees: number;
  };
}

export const EventCard = ({ event }: EventCardProps) => {
  const router = useRouter();

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg group">
      <div className="relative overflow-hidden aspect-video bg-primary/10" style={{ backgroundImage: 'url("/images/card-placeholder-bg.png")' , backgroundSize: 'cover', backgroundPosition: 'center'}}>
       
        <div className="absolute p-2 transition-colors rounded-full cursor-pointer top-3 right-3 bg-card hover:bg-accent hover:text-accent-foreground">
                    <Image src={"/icons/bookmark.svg"} alt="bookmarks" width={32} height={32} />
        </div>
        <div className="absolute flex items-center gap-2 px-3 py-1 rounded-full bottom-3 left-3 bg-card/90 backdrop-blur-sm">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold text-primary-foreground">
            {event.organizer.charAt(0)}
          </div>
          <span className="text-sm font-medium">{event.organizer}</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-start gap-4">
          <Badge
            variant="secondary"
            className="text-xs font-semibold bg-success/20 text-success-foreground hover:bg-success/30"
          >
            {event.date}
          </Badge>
          <Badge variant="secondary"
            className="text-xs font-semibold bg-warning/20 text-warning hover:bg-warning/30"
>
            {event.type}
          </Badge>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-bold transition-colors line-clamp-2 group-hover:text-primary">
            {event.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Leading healthcare professionals gather to discuss the future of
            digital transformation in medical...
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{event.location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 border-2 rounded-full bg-muted border-card"
                />
              ))}
            </div>
          </div>
          <span
            className={`font-medium bg-success/20 p-[1px] px-2 rounded-sm rounded-br-2xl  ${
              event.price === "Free" ? "text-foreground bg-secondary/10" : "text-foreground"
            }`}
          >
            {event.price}
          </span>
        </div>

        <Button
          onClick={() => router.push(`/user/discover-events/event-details/${event.id}`)}
          className="w-full bg-primary hover:bg-primary/90"
        >
          Register
        </Button>
      </div>
    </Card>
  );
};