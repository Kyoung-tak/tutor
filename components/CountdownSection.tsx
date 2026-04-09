import { SectionShell } from "@/components/SectionShell";
import { sectionIds, weddingData } from "@/data/wedding";

function getCountdown(targetDate: string) {
  const today = new Date();
  const target = new Date(targetDate);
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const diff = targetStart.getTime() - todayStart.getTime();

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function CountdownSection() {
  const dDay = getCountdown(weddingData.wedding.datetime);
  const isPassed = dDay < 0;

  return (
    <SectionShell
      id={sectionIds.countdown}
      eyebrow="D-Day"
      title="함께하는 날까지"
      description="예식일까지 남은 시간을 간결하게 확인할 수 있습니다."
    >
      <div className="glass-panel mx-auto max-w-3xl rounded-[1.75rem] p-6 text-center shadow-soft sm:p-10">
        <p className="text-sm uppercase tracking-[0.26em] text-stone">Wedding Countdown</p>
        <p className="title-font mt-4 text-4xl text-cocoa sm:text-5xl">
          {isPassed ? "예식일이 지났습니다" : `D-${dDay}`}
        </p>
        <p className="mt-5 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
          {weddingData.couple.groom.name} 님과 {weddingData.couple.bride.name} 님의 결혼식은{" "}
          {weddingData.wedding.dateText} {weddingData.wedding.timeText}에 진행됩니다.
        </p>
      </div>
    </SectionShell>
  );
}
