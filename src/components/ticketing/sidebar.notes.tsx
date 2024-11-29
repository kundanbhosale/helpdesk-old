import React from "react";
import { Button } from "../ui/button";
import { PenLine } from "lucide-react";
import { formatRelative, subDays } from "date-fns";
export default function TicketingSidebarNotes() {
  const notes = Array.from({ length: 5 }).map((_, i) => {
    return {
      name: "Kundan Bhosale",
      note: "Annual fixed cost for the Honda Jet is slightly less than $200,000, roughly the same price as the Phenom 100 as it's annual fixed costs rests around $202,000.",
      time: subDays(new Date(), i).toISOString(),
    };
  });
  return (
    <div className="px-4 space-y-6">
      {notes.map((n, i) => (
        <div className="">
          <p className="flex justify-between">
            <span className="truncate font-semibold">{n.name}</span>{" "}
            <span className="text-xs">
              {formatRelative(n.time, new Date())}
            </span>
          </p>
          <p className="text-muted-foreground">{n.note}</p>
        </div>
      ))}
      <div className="border-t py-4 bg-background sticky bottom-0">
        <div>
          <Button className="w-full">
            <PenLine />
            <span>Add Ticket Note</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
