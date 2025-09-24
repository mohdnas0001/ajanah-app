import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  price?: string;
  isFree?: boolean;
}

const EventCard = ({ title, description, date, location, image = "/placeholder.svg", price, isFree }: EventCardProps) => {
  return (
    <div className="overflow-hidden transition-shadow border rounded-lg bg-card border-primary-darker/30 hover:shadow-md">
      <div className="flex">
        <div className="flex w-full p-2">
          {/* Event Image */}
        <div className="flex-shrink-0 rounded-md">
          <Image 
            src={image} 
            alt={title}
            width={168}
            height={96}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        
        {/* Event Content */}
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="p-1 mb-2 text-[10px] px-2  font-medium rounded-2xl bg-primary-light/50 w-fit text-primary font-neue-regrade">{date}</div>
              <h3 className="mb-2 text-xl font-semibold font-neue-regrade text-card-foreground">{title}</h3>
              <p className="mb-2 text-base text-muted-foreground line-clamp-2">{description}</p>
              
                <div className="flex items-center justify-start gap-4">
                   {/* Attendees */}
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <Avatar className="w-6 h-6 border-2 border-background">
                    <AvatarFallback className="text-xs bg-primary text-primary-foreground">A</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-background">
                    <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">B</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-background">
                    <AvatarFallback className="text-xs bg-tertiary text-tertiary-foreground">C</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Image src="/icons/location.svg" width={16} height={16} alt="Location" className="w-4 h-4" />
                <span className="font-neue-regrade">{location}</span>
              </div>
             </div>
            </div>
            
            {/* Price and Action */}
            <div className="flex flex-col items-end justify-center ml-4 space-y-2">
              {isFree ? (
                <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
                  Free
                </Badge>
              ) : price && (
                <span className="text-lg font-semibold font-neue-regrade text-primary">{price}</span>
              )}
              <Button className="font-medium bg-primary hover:bg-primary-hover text-primary-foreground font-neue-regrade">
                View
              </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;