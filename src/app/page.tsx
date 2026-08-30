import LinksSection from "@/components/LinksSection";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-gradient-to-b from-[#fff9f2] via-[#fdf1e3] to-[#fbe3cc] px-5 py-14 dark:from-[#1b1613] dark:via-[#201915] dark:to-[#251c17] sm:px-6 sm:py-20">
      <div className="w-full max-w-[420px]">
        <div className="mb-8 flex justify-end">
          <ThemeToggle />
        </div>

        <ProfileHeader profile={profile} />

        <LinksSection links={links} />

        <footer className="mt-12 text-center text-xs text-stone-400 dark:text-stone-500">
          🌳 링크나무로 만든 페이지
        </footer>
      </div>
    </div>
  );
}
