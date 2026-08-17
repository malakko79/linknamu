import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-zinc-50 px-4 py-10 dark:bg-zinc-950 sm:py-16">
      <div className="w-full max-w-[420px]">
        <div className="mb-6 flex justify-end">
          <ThemeToggle />
        </div>

        <ProfileHeader profile={profile} />

        <main className="mt-8 flex flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </main>

        <footer className="mt-10 text-center text-xs text-zinc-400 dark:text-zinc-600">
          🌳 링크나무로 만든 페이지
        </footer>
      </div>
    </div>
  );
}
