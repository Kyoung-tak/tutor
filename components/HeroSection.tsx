import Image from "next/image";
import { weddingData } from "@/data/wedding";

function formatKoreanDate(dateValue: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date(dateValue));
}

export function HeroSection() {
  const { couple, wedding } = weddingData;

  return (
    <section id="hero" className="px-4 pb-10 pt-6 sm:px-6 sm:pt-10">
      <div className="mx-auto max-w-5xl">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] border-white/60 px-5 py-8 shadow-soft sm:px-10 sm:py-12">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-transparent" />
          <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -left-6 bottom-10 h-28 w-28 rounded-full bg-pine/10 blur-3xl" />
          <div className="grid gap-8 md:grid-cols-[1fr_0.92fr] md:items-center">
            <div className="relative z-10 animate-fade-up">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-stone">
                Wedding Invitation
              </p>
              <h1 className="title-font text-4xl leading-tight text-cocoa sm:text-5xl">
                {couple.groom.name}
                <span className="mx-3 text-gold">·</span>
                {couple.bride.name}
              </h1>
              <div className="mt-6 space-y-2 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                <p>{formatKoreanDate(wedding.datetime)}</p>
                <p>
                  {wedding.timeText} · {wedding.venueName}
                </p>
                <p>{wedding.hallFloor}</p>
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7 text-cocoa/90 sm:text-base">
                {wedding.notice}
              </p>
            </div>

            <div className="relative z-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-soft">
                <Image
                  src={wedding.heroImage}
                  alt="대표 웨딩 이미지"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="mt-4 rounded-3xl border border-white/70 bg-white/70 p-4 text-center text-sm leading-6 text-[color:var(--muted)]">
                "{wedding.notice}"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
