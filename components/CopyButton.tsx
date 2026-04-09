"use client";

import { useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
  className?: string;
};

export function CopyButton({ value, label, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`rounded-full border border-cocoa/15 bg-white px-4 py-2 text-sm font-medium text-cocoa transition hover:bg-sand ${className}`}
      aria-label={`${label} 복사`}
    >
      {copied ? "복사됨" : label}
    </button>
  );
}
