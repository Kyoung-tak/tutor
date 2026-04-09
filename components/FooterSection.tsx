import { weddingData } from "@/data/wedding";

export function FooterSection() {
  return (
    <footer className="px-4 pb-28 pt-8 sm:px-6 md:pb-16">
      <div className="mx-auto max-w-4xl">
        <div className="section-divider" />
        <div className="px-2 py-10 text-center">
          <p className="title-font text-2xl text-cocoa sm:text-3xl">감사합니다</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
            {weddingData.footer.thanks}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-stone">
            {weddingData.couple.groom.name} · {weddingData.couple.bride.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
