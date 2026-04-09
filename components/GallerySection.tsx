"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionShell } from "@/components/SectionShell";
import { sectionIds, weddingData } from "@/data/wedding";

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage =
    selectedIndex !== null ? weddingData.gallery.images[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedIndex(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <SectionShell
        id={sectionIds.gallery}
        eyebrow="Gallery"
        title={weddingData.gallery.title}
        description="사진을 눌러 크게 볼 수 있도록 가볍고 직관적인 모달을 넣었습니다."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {weddingData.gallery.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[0.88] overflow-hidden rounded-[1.4rem] border border-white/70 bg-white/70 shadow-soft"
              aria-label={`${index + 1}번째 갤러리 이미지 확대 보기`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </SectionShell>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(38,28,23,0.82)] p-4"
          role="dialog"
          aria-modal="true"
          aria-label="확대된 갤러리 이미지"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/85 px-3 py-2 text-sm text-cocoa"
              aria-label="갤러리 모달 닫기"
            >
              닫기
            </button>
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10]">
              <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-cover" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
