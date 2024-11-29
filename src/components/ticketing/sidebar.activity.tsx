import React, { Fragment } from "react";

import { format, formatRelative, subDays } from "date-fns";

export default function TicketingSidebarActivity() {
  const notes = Array.from({ length: 5 }).map((_, i) => {
    return {
      text:
        i === 1
          ? "Ticket assigned to Kundan BhosaleTicket assigned to Kundan BhosaleTicket assigned to Kundan BhosaleTicket assigned to Kundan BhosaleTicket assigned to Kundan BhosaleTicket assigned to Kundan BhosaleTicket assigned to Kundan BhosaleTicket assigned to Kundan BhosaleTicket assigned to Kundan Bhosale"
          : "Ticket assigned to Kundan Bhosale",
      time: subDays(new Date(), i).toISOString(),
    };
  });

  return (
    <div className="px-4">
      {notes.map((n, i) => (
        <div key={i} className="relative">
          <div className="flex gap-2 relative">
            <div className="border-1 border-primary rounded-full bg-primary w-2 h-2 mt-1 relative z-10"></div>

            <p className="flex-1">
              {n.text} on <span>{format(n.time, "Pp")}</span>
            </p>
          </div>
          <br />
          {i !== notes.length - 1 && (
            <div className="absolute border-r border-dashed h-full block top-2 left-[3px] -z-1" />
          )}
        </div>
      ))}
    </div>
  );
}
