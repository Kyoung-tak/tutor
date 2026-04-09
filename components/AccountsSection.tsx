"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { SectionShell } from "@/components/SectionShell";
import { sectionIds, weddingData } from "@/data/wedding";

type AccountGroupProps = {
  title: string;
  accounts: Array<{ bank: string; number: string; holder: string }>;
  defaultOpen?: boolean;
};

function AccountGroup({ title, accounts, defaultOpen = false }: AccountGroupProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-[1.5rem] border border-cocoa/10 bg-white/60">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
        aria-label={`${title} 계좌 ${open ? "접기" : "펼치기"}`}
      >
        <span className="title-font text-xl text-cocoa">{title}</span>
        <span className="text-sm text-stone">{open ? "닫기" : "열기"}</span>
      </button>
      {open ? (
        <div className="space-y-4 border-t border-cocoa/10 px-5 py-5">
          {accounts.map((account) => (
            <div
              key={`${account.bank}-${account.number}`}
              className="rounded-[1.25rem] bg-white/85 p-4"
            >
              <p className="text-sm font-semibold text-cocoa">
                {account.bank} {account.number}
              </p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">예금주 {account.holder}</p>
              <CopyButton
                value={`${account.bank} ${account.number} 예금주 ${account.holder}`}
                label="계좌 복사"
                className="mt-3"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function AccountsSection() {
  return (
    <SectionShell
      id={sectionIds.account}
      eyebrow="Account"
      title={weddingData.accounts.title}
      description="화면이 복잡해지지 않도록 접기/펼치기 형태로 정리했습니다."
    >
      <div className="glass-panel mx-auto grid max-w-3xl gap-4 rounded-[1.75rem] p-4 shadow-soft sm:p-5">
        <AccountGroup title="신랑측" accounts={weddingData.accounts.groom} defaultOpen />
        <AccountGroup title="신부측" accounts={weddingData.accounts.bride} />
      </div>
    </SectionShell>
  );
}
