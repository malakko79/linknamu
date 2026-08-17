export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export const profile: Profile = {
  name: "김민지",
  bio: "디자이너 · 콘텐츠 크리에이터 🎨",
  avatarUrl: "",
};

export const links: LinkItem[] = [
  {
    id: "portfolio",
    title: "포트폴리오",
    url: "https://example.com/portfolio",
    description: "제 작업물을 모아뒀어요",
  },
  {
    id: "instagram",
    title: "인스타그램",
    url: "https://instagram.com/example",
  },
  {
    id: "youtube",
    title: "유튜브",
    url: "https://youtube.com/@example",
  },
  {
    id: "blog",
    title: "블로그",
    url: "https://blog.example.com",
    description: "작업 이야기와 일상을 기록해요",
  },
  {
    id: "shop",
    title: "쇼핑몰",
    url: "https://shop.example.com",
    description: "제가 만든 굿즈를 만나보세요",
  },
];
