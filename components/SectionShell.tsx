type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = ""
}: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-4 py-14 sm:px-6 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-stone">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="title-font text-3xl text-cocoa sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
