"use client";

import { cn } from "@/lib/utils";

/**
 * Seamless infinite marquee. Two identical tracks (each carrying a trailing
 * gap) sit inside a container translated exactly -50%, so the loop never seams.
 */
export function Marquee({
  children,
  className,
  duration = 42,
  pauseOnHover = true,
  gap = "2.75rem",
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  pauseOnHover?: boolean;
  gap?: string;
}) {
  const trackStyle: React.CSSProperties = { columnGap: gap, paddingRight: gap };
  return (
    <div className={cn("mask-fade-x group flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center" style={trackStyle}>
          {children}
        </div>
        <div
          className="flex shrink-0 items-center"
          style={trackStyle}
          aria-hidden
        >
          {children}
        </div>
      </div>
    </div>
  );
}
