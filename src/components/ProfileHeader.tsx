import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  const initial = profile.name.trim().charAt(0) || "L";

  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-orange-200 to-amber-400 text-5xl font-semibold text-white shadow-[0_14px_30px_-10px_rgba(154,82,25,0.4),0_4px_12px_-4px_rgba(154,82,25,0.22)] ring-[3px] ring-white/80 dark:ring-white/10 sm:h-40 sm:w-40">
        {profile.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatarUrl}
            alt={`${profile.name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span aria-hidden="true">{initial}</span>
        )}
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-tight text-stone-800 dark:text-stone-50">
          {profile.name || "이름을 입력해주세요"}
        </h1>
        {profile.bio && (
          <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">{profile.bio}</p>
        )}
      </div>
    </header>
  );
}
