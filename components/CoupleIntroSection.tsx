import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";
import { sectionIds, weddingData } from "@/data/wedding";

function PersonCard({
  image,
  role,
  name,
  parents,
  description
}: {
  image: string;
  role: string;
  name: string;
  parents: string;
  description: string;
}) {
  return (
    <article className="glass-panel rounded-[1.75rem] p-5 shadow-soft">
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-white/70 bg-white/70">
          <Image src={image} alt={`${role} 프로필 이미지`} fill className="object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone">{role}</p>
          <h3 className="title-font mt-2 text-2xl text-cocoa">{name}</h3>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{parents}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-cocoa/90">{description}</p>
    </article>
  );
}

export function CoupleIntroSection() {
  const { groom, bride } = weddingData.couple;

  return (
    <SectionShell
      id={sectionIds.intro}
      eyebrow="Couple"
      title={weddingData.intro.title}
      description="간단한 소개와 가족 정보를 한눈에 볼 수 있도록 정리했습니다."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <PersonCard
          image={groom.image}
          role="Groom"
          name={groom.name}
          parents={groom.parents}
          description={weddingData.intro.groomText}
        />
        <PersonCard
          image={bride.image}
          role="Bride"
          name={bride.name}
          parents={bride.parents}
          description={weddingData.intro.brideText}
        />
      </div>
    </SectionShell>
  );
}
