import { SectionShell } from "@/components/SectionShell";
import { sectionIds, weddingData } from "@/data/wedding";

const infoItems = [
  { label: "날짜", value: weddingData.wedding.dateText },
  { label: "시간", value: weddingData.wedding.timeText },
  { label: "예식장", value: weddingData.wedding.venueName },
  { label: "주소", value: weddingData.wedding.address },
  { label: "홀 안내", value: weddingData.wedding.hallFloor }
];

export function EventInfoSection() {
  return (
    <SectionShell
      id={sectionIds.event}
      eyebrow="Wedding Day"
      title="예식 정보"
      description="핵심 정보가 바로 보이도록 구성해 모바일에서도 확인이 쉽습니다."
    >
      <div className="glass-panel overflow-hidden rounded-[1.75rem] shadow-soft">
        <div className="grid divide-y divide-[color:var(--line)] md:grid-cols-[0.95fr_1.05fr] md:divide-x md:divide-y-0">
          <div className="p-6 sm:p-8">
            <dl className="space-y-5">
              {infoItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs uppercase tracking-[0.24em] text-stone">{item.label}</dt>
                  <dd className="mt-2 text-sm leading-7 text-cocoa sm:text-base">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-white/45 p-6 sm:p-8">
            <p className="title-font text-2xl text-cocoa">참석 전 참고해 주세요</p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
              문의가 필요한 경우 아래 버튼 구조만 수정해서 바로 사용할 수 있습니다.
              예식장 연락처, 문자 문의, 별도 안내 페이지 링크 등으로 쉽게 바꿀 수 있습니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {weddingData.event.contactButtons.map((button) => (
                <a
                  key={button.label}
                  href={button.href}
                  className="rounded-full border border-cocoa/15 bg-white px-4 py-3 text-sm font-medium text-cocoa transition hover:-translate-y-0.5 hover:bg-sand"
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
