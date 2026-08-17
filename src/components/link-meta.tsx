import type { SVGProps } from "react";

type Glyph = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

const CameraGlyph: Glyph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M8 7l1.5-2.5h5L16 7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="13.5" r="3.2" />
  </svg>
);

const PlayGlyph: Glyph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3" />
    <path d="M10.5 9.5l4.5 2.5-4.5 2.5v-5z" fill="currentColor" stroke="none" />
  </svg>
);

const CodeGlyph: Glyph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M9 8L4.5 12 9 16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8l4.5 4-4.5 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PenGlyph: Glyph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path
      d="M4 20l1-4.2L15.3 5.5a1.5 1.5 0 0 1 2.1 0l1.1 1.1a1.5 1.5 0 0 1 0 2.1L8.2 19 4 20z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BagGlyph: Glyph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M6 8h12l-1 12H7L6 8z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" strokeLinecap="round" />
  </svg>
);

const LinkGlyph: Glyph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M9.5 14.5l5-5" strokeLinecap="round" />
    <path
      d="M11 6.5l1-1a3.5 3.5 0 0 1 5 5l-1.5 1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 17.5l-1 1a3.5 3.5 0 0 1-5-5l1.5-1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type LinkMeta = {
  Icon: Glyph;
  badgeClass: string;
};

const RULES: { test: RegExp; meta: LinkMeta }[] = [
  {
    test: /instagram\.com/i,
    meta: {
      Icon: CameraGlyph,
      badgeClass: "bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400",
    },
  },
  {
    test: /youtube\.com|youtu\.be/i,
    meta: {
      Icon: PlayGlyph,
      badgeClass: "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400",
    },
  },
  {
    test: /github\.com/i,
    meta: {
      Icon: CodeGlyph,
      badgeClass: "bg-zinc-200 text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-200",
    },
  },
  {
    test: /blog|tistory|velog|medium\.com/i,
    meta: {
      Icon: PenGlyph,
      badgeClass: "bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
    },
  },
  {
    test: /shop|store|smartstore/i,
    meta: {
      Icon: BagGlyph,
      badgeClass: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
    },
  },
];

const DEFAULT_META: LinkMeta = {
  Icon: LinkGlyph,
  badgeClass: "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400",
};

export function getLinkMeta(url: string): LinkMeta {
  const rule = RULES.find(({ test }) => test.test(url));
  return rule ? rule.meta : DEFAULT_META;
}
