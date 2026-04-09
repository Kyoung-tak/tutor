import { SectionShell } from "@/components/SectionShell";
import { sectionIds, weddingData } from "@/data/wedding";

function ContactCard({
  title,
  items
}: {
  title: string;
  items: Array<{ role: string; name: string; phone: string }>;
}) {
  return (
    <article className="glass-panel rounded-[1.75rem] p-5 shadow-soft">
      <h3 className="title-font text-2xl text-cocoa">{title}</h3>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div
            key={`${item.role}-${item.phone}`}
            className="rounded-[1.25rem] border border-cocoa/10 bg-white/65 p-4"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-stone">{item.role}</p>
            <p className="mt-2 text-lg font-medium text-cocoa">{item.name}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`tel:${item.phone.replaceAll("-", "")}`}
                className="rounded-full border border-cocoa/15 bg-white px-4 py-2 text-sm font-medium text-cocoa transition hover:bg-sand"
              >
                전화하기
              </a>
              <a
                href={`sms:${item.phone.replaceAll("-", "")}`}
                className="rounded-full border border-cocoa/15 bg-white px-4 py-2 text-sm font-medium text-cocoa transition hover:bg-sand"
              >
                문자하기
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function ContactSection() {
  return (
    <SectionShell
      id={sectionIds.contact}
      eyebrow="Contact"
      title={weddingData.contacts.title}
      description={weddingData.contacts.privacyHint}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <ContactCard title="신랑측 연락처" items={weddingData.contacts.groomSide} />
        <ContactCard title="신부측 연락처" items={weddingData.contacts.brideSide} />
      </div>
    </SectionShell>
  );
}
