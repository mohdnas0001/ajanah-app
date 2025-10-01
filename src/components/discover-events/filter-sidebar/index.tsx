import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

export const FilterSidebar = () => {
  return (
    <Card className="space-y-2">
      <div className="flex items-center gap-2 p-4 py-2 text-base font-medium">
        <Image src={"/icons/filter-square.svg"} width={20} height={20} alt="filter icon"  />
        Filter
      </div>

      <div className="p-4 space-y-3 border-y border-border">
        <label className="text-sm font-medium">Date</label>
        <div className="relative">
          <Calendar className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
          <Input
            type="date"
            placeholder="mm/dd/yy"
            className="pl-10"
          />
        </div>
      </div>

      <div className="p-4 space-y-3">
        <label className="text-sm font-medium">Price($)</label>
        <Slider
          defaultValue={[0]}
          max={1000}
          step={10}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>$0</span>
          <span>$1000</span>
        </div>

      <Button variant="outline" className="w-full border-primary">
        Clear
      </Button>
      </div>
      

    </Card>
  );
};