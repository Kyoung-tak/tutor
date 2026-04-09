import { CopyButton } from "@/components/CopyButton";
import { SectionShell } from "@/components/SectionShell";
import { sectionIds, weddingData } from "@/data/wedding";

export function DirectionsSection() {
  return (
    <SectionShell
      id={sectionIds.directions}
      eyebrow="Location"
      title={weddingData.directions.title}
      description="주소 복사와 지도 앱 이동 버튼을 바로 사용할 수 있게 구성했습니다."
    >
      <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 shadow-soft">
          <iframe
            title="예식장 지도"
            src={weddingData.directions.mapEmbedUrl}
            className="h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="glass-panel rounded-[1.75rem] p-6 shadow-soft">
          <p className="title-font text-2xl text-cocoa">{weddingData.wedding.venueName}</p>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            {weddingData.directions.copyAddress}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CopyButton value={weddingData.directions.copyAddress} label="주소 복사" />
            {weddingData.directions.navigationLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cocoa/15 bg-white px-4 py-2 text-sm font-medium text-cocoa transition hover:bg-sand"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-5 text-sm leading-7 text-cocoa/90">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone">지하철</p>
              <p className="mt-2">{weddingData.directions.transport.subway}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone">버스</p>
              <p className="mt-2">{weddingData.directions.transport.bus}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone">주차</p>
              <p className="mt-2">{weddingData.directions.transport.parking}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
