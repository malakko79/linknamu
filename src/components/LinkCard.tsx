"use client";

import { getLinkMeta } from "./link-meta";
import type { LinkItem } from "@/data/profile";

const CLICKS_STORAGE_KEY = "linknamu-clicks";

function recordClick(id: string) {
  try {
    const raw = window.localStorage.getItem(CLICKS_STORAGE_KEY);
    const counts = raw ? (JSON.parse(raw) as Record<string, number>) : {};
    counts[id] = (counts[id] ?? 0) + 1;
    window.localStorage.setItem(CLICKS_STORAGE_KEY, JSON.stringify(counts));
  } catch {
    // 통계 집계 실패는 사용자 페이지 동작에 영향을 주지 않아야 한다.
  }
}

export default function LinkCard({ id, title, url, description }: LinkItem) {
  const { Icon, badgeClass } = getLinkMeta(url);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => recordClick(id)}
      className="group flex min-h-16 items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${badgeClass}`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block truncate font-medium text-zinc-900 dark:text-zinc-50">
          {title}
        </span>
        {description && (
          <span className="block truncate text-xs text-zinc-500 dark:text-zinc-400">
            {description}
          </span>
        )}
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-4 w-4 shrink-0 text-zinc-300 transition-transform group-hover:translate-x-0.5 dark:text-zinc-600"
        aria-hidden="true"
      >
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
