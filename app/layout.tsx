import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { weddingData } from "@/data/wedding";

export const metadata: Metadata = {
  title: weddingData.seo.title,
  description: weddingData.seo.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
