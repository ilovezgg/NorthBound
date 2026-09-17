"use client";

import { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode[];
  speed?: number;
};

export function Marquee({ children, speed = 32 }: MarqueeProps) {
  return (
    <div className="flex w-full overflow-hidden">
      <div
        className="flex shrink-0 items-center gap-12 pr-12"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center gap-12 pr-12"
        style={{ animation: `marquee ${speed}s linear infinite` }}
        aria-hidden="true"
      >
        {children}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
