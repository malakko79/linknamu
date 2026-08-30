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
  name: "김도형",
  bio: "COF & Smart IC Tape Substrate Manufacturing Team Leader",
  avatarUrl:
    "https://lh3.googleusercontent.com/pw/AP1GczP0FrTzmvtcplm1if_q2l_3ylSzC1UfW1AqrNLVtq7Ci1EVm0OyupW8zWCCbx7vXREqwXwbNOvt6TI11XHoNrsW3NUjuY5k5ZhePpa0OriK72rSjZpSQjGWTMoBxIgY18adWl8iI-y-vO9TSlyxHUaNF6C71dEsnJxY6MMBWt6h-za_wym0tHcjkNZKAe1cs9Lanidmq-odzcbWZIlOlf8W_F5UzeNhyD6gsVLlHEaSTA_cARYpFZn9XIoW6oQyph6SD7NEFBN0EUxIyw7xltqootdbnRbURvNVp7XRLyiqVhz470NVoFkCr0leHJOIDKnjcXVGBDLsokJ78LcMvToa7ivX_8EqR8IRsN54nYEZalRBJu_GXNEoSM65jbxZxliN-ilLDEspEFGN3cTIuN2a4DTTbAlm9xEjrg8wLw5hrGim9adT3xh69yGJohtrLEdDV3XmR_LyoVJuS-dQrweQVzFFhBS0REyBn5KAXMiF4ebdBAbhc13j5WmdXD8ZvEGbfKfXZzToyIj1UZ4CBGHFras_YWNJdNXxBLfptmeeIMNypPWd-KLzxUCqMGHaRSG76rPCnPx3h08gh0ueN3TLQn6yAXwvL0HpHI0-BzgFk7cB2LScgvi7e11duayhybas4ielPdVpUFBiST6UB0ezrjgF0xHGde6dYwCDq_G96vtNTp0hsLuZq-jd_eU1meZyOzmHZn_mJHHpQf5mQUmMi7Y65lwhng7nirXIwsube6jXnhn1MLf7fzhqfMWcJGPwQnKY1JqgDNYGsjcBYri2-UH32zoooBWdn7HL3sEvrs7lDVbVmT94PKKV0TKBvqqTEHQqKO4W6KiVRxKcYQA-SeWtklZ7EyfuWCklHdtIeqfD9cs21qDjW9ZasgPuVUJqSpbDdZ3LEV2ROpJlAnCszx81Bn58hAEcIJJeiIYKGrapPdoc9hWKglALloveP59DGm-K4bSZ2BWmlAEljdn4gZySfjh1p1luwotbn5Q7KJcuX14Z7f6ifyE=w300-h300-c",
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
    url: "https://www.youtube.com/channel/UCtQ1IW5VjDcnhFHyDda5HWA",
  },
  {
    id: "blog",
    title: "블로그",
    url: "https://blog.naver.com/tobeprouddad",
    description: "작업 이야기와 일상을 기록해요",
  },
  {
    id: "shop",
    title: "쇼핑몰",
    url: "https://shop.example.com",
    description: "제가 만든 굿즈를 만나보세요",
  },
];
