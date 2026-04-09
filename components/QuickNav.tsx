"use client";

import { QuickLink } from "@/data/wedding";

type QuickNavProps = {
  links: QuickLink[];
};

export function QuickNav({ links }: QuickNavProps) {
  return (
    <nav
      aria-label="주요 섹션 바로가기"
      className="fixed inset-x-0 bottom-4 z-40 mx-auto w-[calc(100%-1.5rem)] max-w-md rounded-full border border-white/60 bg-[rgba(255,248,242,0.9)] px-3 py-2 shadow-soft backdrop-blur md:top-5 md:bottom-auto md:w-auto"
    >
      <ul className="flex items-center justify-between gap-2 overflow-x-auto text-center text-xs text-cocoa sm:text-sm">
        {links.map((link) => (
          <li key={link.targetId} className="flex-1">
            <a
              className="block rounded-full px-3 py-2 transition hover:bg-white/70"
              href={`#${link.targetId}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
