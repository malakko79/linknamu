import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  const initial = profile.name.trim().charAt(0) || "L";

  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-6xl font-semibold text-white shadow-md ring-4 ring-white dark:ring-zinc-900">
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
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          {profile.name || "이름을 입력해주세요"}
        </h1>
        {profile.bio && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{profile.bio}</p>
        )}
      </div>
    </header>
  );
}
