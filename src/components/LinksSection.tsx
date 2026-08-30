"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinksSection({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        if (!cancelled) setCounts(data);
      })
      .catch(() => {
        // 클릭 수 조회 실패는 페이지 표시에 영향을 주지 않아야 한다.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch(`/api/clicks/${id}`, { method: "POST" }).catch(() => {
      // 집계 실패는 사용자 페이지 동작에 영향을 주지 않아야 한다.
    });
  }

  return (
    <main className="mt-10 flex flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} {...link} count={counts[link.id] ?? 0} onClick={handleClick} />
      ))}
    </main>
  );
}
