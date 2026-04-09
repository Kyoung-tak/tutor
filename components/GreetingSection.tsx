import { SectionShell } from "@/components/SectionShell";
import { sectionIds, weddingData } from "@/data/wedding";

export function GreetingSection() {
  return (
    <SectionShell
      id={sectionIds.greeting}
      eyebrow="Invitation"
      title={weddingData.greeting.title}
      description="두 사람의 소중한 시작에 귀한 걸음으로 함께해 주세요."
    >
      <div className="glass-panel mx-auto max-w-3xl rounded-[1.75rem] px-6 py-8 text-center shadow-soft sm:px-10">
        <div className="space-y-4 text-[15px] leading-8 text-cocoa sm:text-base">
          {weddingData.greeting.message.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
