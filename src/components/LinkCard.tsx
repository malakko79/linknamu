"use client";

import { getLinkMeta } from "./link-meta";
import type { LinkItem } from "@/data/profile";

type LinkCardProps = LinkItem & {
  count: number;
  onClick: (id: string) => void;
};

export default function LinkCard({ id, title, url, description, count, onClick }: LinkCardProps) {
  const { Icon, badgeClass } = getLinkMeta(url);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onClick(id)}
      className="group flex min-h-16 items-center gap-4 rounded-3xl border border-white/50 bg-white/55 px-5 py-4 shadow-[0_6px_20px_-10px_rgba(154,82,25,0.2)] backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_10px_26px_-10px_rgba(154,82,25,0.28)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${badgeClass}`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block truncate font-medium text-stone-800 dark:text-stone-50">
          {title}
        </span>
        {description && (
          <span className="block truncate text-xs text-stone-500 dark:text-stone-400">
            {description}
          </span>
        )}
      </span>
      <span className="shrink-0 text-xs text-stone-400 dark:text-stone-500">{count}회</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-4 w-4 shrink-0 text-stone-300 transition-transform group-hover:translate-x-0.5 dark:text-stone-600"
        aria-hidden="true"
      >
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
