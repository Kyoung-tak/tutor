export type QuickLink = {
  label: string;
  targetId: string;
};

export type ContactPerson = {
  role: string;
  name: string;
  phone: string;
};

export const weddingData = {
  seo: {
    title: "이도윤 · 한서윤 모바일 청첩장",
    description: "소중한 분들을 예식에 정중히 초대합니다."
  },
  couple: {
    groom: {
      name: "이도윤",
      image: "/images/groom.svg",
      parents: "이정호 · 김미경의 장남"
    },
    bride: {
      name: "한서윤",
      image: "/images/bride.svg",
      parents: "한승우 · 박지연의 장녀"
    }
  },
  wedding: {
    datetime: "2026-10-18T13:00:00+09:00",
    dateText: "2026년 10월 18일 일요일",
    timeText: "오후 1시",
    venueName: "라움 아트센터 마제스틱홀",
    hallFloor: "2층 마제스틱홀",
    address: "서울 강남구 언주로 564 라움 아트센터",
    notice: "따뜻한 가을날, 두 사람이 한마음으로 새로운 시작을 맞이합니다.",
    heroImage: "/images/hero.svg"
  },
  greeting: {
    title: "초대의 글",
    message: [
      "서로를 아끼고 사랑하며 함께 걸어온 두 사람이",
      "이제 평생의 동반자가 되어 새로운 길을 시작하려 합니다.",
      "소중한 걸음으로 오셔서 두 사람의 앞날을 따뜻한 마음으로 축복해 주시면",
      "더없는 기쁨으로 간직하겠습니다."
    ]
  },
  intro: {
    title: "신랑 · 신부 소개",
    groomText:
      "잔잔한 배려와 성실함으로 일상을 단단하게 채워가는 사람입니다. 따뜻한 책임감으로 새로운 가정을 이루겠습니다.",
    brideText:
      "섬세한 감성과 환한 미소로 주변을 편안하게 만드는 사람입니다. 서로의 하루를 더 다정하게 가꾸며 살아가겠습니다."
  },
  event: {
    contactButtons: [
      {
        label: "예식장 전화",
        href: "tel:02-1234-5678"
      },
      {
        label: "문자 문의",
        href: "sms:01012345678"
      }
    ]
  },
  gallery: {
    title: "갤러리",
    images: [
      { src: "/images/gallery-1.svg", alt: "웨딩 갤러리 이미지 1" },
      { src: "/images/gallery-2.svg", alt: "웨딩 갤러리 이미지 2" },
      { src: "/images/gallery-3.svg", alt: "웨딩 갤러리 이미지 3" },
      { src: "/images/gallery-4.svg", alt: "웨딩 갤러리 이미지 4" },
      { src: "/images/gallery-5.svg", alt: "웨딩 갤러리 이미지 5" },
      { src: "/images/gallery-6.svg", alt: "웨딩 갤러리 이미지 6" }
    ]
  },
  directions: {
    title: "오시는 길",
    mapEmbedUrl:
      "https://www.google.com/maps?q=%EB%9D%BC%EC%9B%80%20%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0&output=embed",
    copyAddress: "서울 강남구 언주로 564 라움 아트센터",
    navigationLinks: [
      {
        label: "네이버 지도",
        href: "https://map.naver.com/p/search/%EB%9D%BC%EC%9B%80%20%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0"
      },
      {
        label: "카카오맵",
        href: "https://map.kakao.com/link/search/%EB%9D%BC%EC%9B%80%20%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0"
      },
      {
        label: "티맵",
        href: "https://apis.openapi.sk.com/tmap/app/routes?goalname=%EB%9D%BC%EC%9B%80%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0"
      }
    ],
    transport: {
      subway:
        "학동역 10번 출구에서 도보 약 8분, 강남구청역 3번 출구에서 도보 약 10분 거리입니다.",
      bus: "언북중학교입구, 라움아트센터 인근 정류장 하차 후 도보 이동 가능합니다.",
      parking:
        "예식장 내 주차 가능하며, 혼잡할 수 있으니 대중교통 이용을 권장드립니다."
    }
  },
  accounts: {
    title: "마음 전하실 곳",
    groom: [
      {
        bank: "국민은행",
        number: "123456-78-901234",
        holder: "이도윤"
      },
      {
        bank: "신한은행",
        number: "110-456-789012",
        holder: "이정호"
      }
    ],
    bride: [
      {
        bank: "하나은행",
        number: "321-654321-98704",
        holder: "한서윤"
      },
      {
        bank: "우리은행",
        number: "1002-234-567890",
        holder: "박지연"
      }
    ]
  },
  contacts: {
    title: "연락하기",
    groomSide: [
      { role: "신랑", name: "이도윤", phone: "010-2345-6789" },
      { role: "신랑 아버지", name: "이정호", phone: "010-1111-2222" }
    ] as ContactPerson[],
    brideSide: [
      { role: "신부", name: "한서윤", phone: "010-9876-5432" },
      { role: "신부 어머니", name: "박지연", phone: "010-3333-4444" }
    ] as ContactPerson[],
    privacyHint:
      "개인정보를 숨기고 싶다면 이 파일에서 전화번호를 지우거나 섹션 자체를 숨기면 됩니다."
  },
  footer: {
    thanks:
      "함께해 주시는 모든 마음을 오래도록 소중히 간직하며, 감사한 마음으로 아름답게 살아가겠습니다."
  },
  audio: {
    enabled: false,
    title: "배경음악",
    src: "/audio/wedding-bgm.mp3"
  },
  quickLinks: [
    { label: "예식", targetId: "event" },
    { label: "달력", targetId: "calendar" },
    { label: "갤러리", targetId: "gallery" },
    { label: "오시는 길", targetId: "directions" },
    { label: "연락", targetId: "contact" }
  ] as QuickLink[]
};

export const sectionIds = {
  hero: "hero",
  greeting: "greeting",
  intro: "intro",
  event: "event",
  countdown: "countdown",
  calendar: "calendar",
  gallery: "gallery",
  directions: "directions",
  account: "account",
  contact: "contact"
};
