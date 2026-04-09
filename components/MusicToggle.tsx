"use client";

import { useEffect, useRef, useState } from "react";
import { weddingData } from "@/data/wedding";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!weddingData.audio.enabled) return;

    audioRef.current = new Audio(weddingData.audio.src);
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  async function toggleMusic() {
    if (!weddingData.audio.enabled || !audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      type="button"
      onClick={toggleMusic}
      className="fixed right-4 top-5 z-40 rounded-full border border-white/70 bg-[rgba(255,248,242,0.92)] px-4 py-2 text-sm font-medium text-cocoa shadow-soft backdrop-blur"
      aria-label={playing ? "배경음악 끄기" : "배경음악 켜기"}
    >
      {weddingData.audio.enabled ? (playing ? "음악 끄기" : "음악 켜기") : "음악 준비중"}
    </button>
  );
}
