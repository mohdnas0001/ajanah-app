import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState("July 2025");
  
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const calendarDays = [
    [null, null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, null, null, null, null, null, null]
  ];

  const selectedDays = [5, 7, 8, 9, 10, 11]; // Days with events

  return (
    <div className="p-6 border rounded-lg bg-card border-border">
      {/* Month header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold font-neue-regrade">{currentMonth}</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 text-sm font-medium text-center font-neue-regrade text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.flat().map((day, index) => (
          <div key={index} className="flex items-center justify-center aspect-square">
            {day && (
              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-neue-regrade font-medium transition-colors ${
                  selectedDays.includes(day)
                    ? "bg-primary-hover text-primary-foreground"
                    : day === 11
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {day}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;