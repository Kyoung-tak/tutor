# 모바일 청첩장 프로젝트

Next.js + TypeScript + Tailwind CSS로 만든 모바일 퍼스트 웨딩 초대장입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 을 열면 됩니다.

## 초보자가 가장 먼저 수정할 파일

`data/wedding.ts`

이 파일 하나에서 아래 내용을 대부분 바꿀 수 있습니다.

- 신랑 / 신부 이름
- 부모님 성함
- 날짜 / 시간
- 예식장 / 주소 / 홀 정보
- 인사말
- 갤러리 이미지 경로
- 계좌번호
- 연락처
- 지도 링크
- 배경음악 설정

## 폴더 구조

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  화면에 보이는 각 섹션 컴포넌트
data/
  wedding.ts  <- 실제 청첩장 데이터
public/
  images/     <- 기본 샘플 이미지
```

## 이미지 바꾸는 방법

1. 원하는 이미지를 `public/images` 폴더에 넣습니다.
2. `data/wedding.ts` 에서 경로를 바꿉니다.

예시:

```ts
heroImage: "/images/my-hero.jpg"
```

## 배경음악 사용 방법

기본값은 꺼져 있습니다.

1. 음악 파일을 `public/audio/wedding-bgm.mp3` 경로에 넣습니다.
2. `data/wedding.ts` 에서 아래 값을 `true` 로 바꿉니다.

```ts
audio: {
  enabled: true,
  title: "배경음악",
  src: "/audio/wedding-bgm.mp3"
}
```

## 연락처 숨기기

`data/wedding.ts` 에서 전화번호를 지우거나, `app/page.tsx` 에서 `ContactSection` 을 제거하면 됩니다.
