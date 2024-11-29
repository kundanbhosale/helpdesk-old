import React from "react";
import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

export function SkeletonCard({ className }: { className: string }) {
  return (
    <Skeleton className={cn("h-[125px] w-[250px] rounded-xl", className)} />
  );
}

export function SkeletonBar({
  className,
  count = 1,
  widths,
  heights,
}: {
  className?: string;
  count?: number;
  widths?: string | string[];
  heights?: string | string[];
}) {
  return (
    <div className={cn("p-4 space-y-4", className)}>
      {Array.from({ length: count }).map((_, idx) => (
        <Skeleton
          key={idx}
          className={"h-9 w-full"}
          style={{
            ...(heights && {
              height: typeof heights === "string" ? heights : heights[idx],
            }),
            ...(widths && {
              width: typeof widths === "string" ? widths : widths[idx],
            }),
          }}
        />
      ))}
    </div>
  );
}
